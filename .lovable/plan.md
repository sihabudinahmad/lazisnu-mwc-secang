## Masalah

Semua request ke `https://lazisnu-mwc-secang.lovable.app/` mengembalikan:
```
{"status":500,"unhandled":true,"message":"HTTPError"}
```
Ini adalah pola khas TanStack Start saat error SSR "ditelan" oleh layer HTTP internal — error asli (kemungkinan dari modul Leaflet / import yang berjalan di server, atau modul yang gagal di runtime Worker) tidak pernah sampai ke Server Logs, sehingga kita hanya melihat pesan generik.

Pada project ini, **wrapper SSR belum dipasang sama sekali** (`src/server.ts` tidak ada, `vite.config.ts` masih default), jadi tidak ada lapisan yang menangkap error tersebut.

## Solusi

Pasang 4 lapisan error-handling SSR sesuai pola standar TanStack Start:

### 1. `src/lib/error-capture.ts` (baru)
Pasang listener `error` & `unhandledrejection` global, simpan error terakhir dengan TTL 5 detik agar bisa dipanggil kembali oleh wrapper saat h3 menelan error.

### 2. `src/lib/error-page.ts` (baru)
Fungsi `renderErrorPage()` yang mengembalikan HTML standalone (system fonts, tombol "Muat ulang" + "Beranda"), tanpa import apapun dari app — supaya tetap bisa render meski modul app gagal.

### 3. `src/server.ts` (baru)
Wrapper Worker entry:
- Lazy `import("@tanstack/react-start/server-entry")` agar module-init throw bisa ditangkap.
- `try/catch` di sekitar `handler.fetch()`.
- `normalizeCatastrophicSsrResponse()` yang mendeteksi response `{"unhandled":true,"message":"HTTPError"}` dan menggantinya dengan halaman error HTML, sambil `console.error` error asli dari `error-capture`.
- Import `./lib/error-capture` di paling atas agar listener terpasang.

### 4. `vite.config.ts` (edit)
Tambahkan override agar plugin TanStack memakai wrapper kita:
```ts
export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
});
```
Juga update `wrangler.jsonc` `main` → `src/server.ts` agar konsisten.

### 5. `src/routes/__root.tsx` (edit kecil)
Tambahkan `errorComponent` pada root route untuk menangkap error in-render React (loader/component) dengan UI branded + tombol retry.

## Hasil yang diharapkan

- Setelah deploy ulang, jika ada error SSR, Server Logs akan menampilkan stack trace sebenarnya (bukan lagi "HTTPError").
- User melihat halaman error rapi alih-alih JSON mentah.
- Kita bisa lihat penyebab asli (kemungkinan besar terkait Leaflet/SSR atau modul lain) dan memperbaikinya pada iterasi berikutnya jika masih muncul.

## Detail teknis (untuk catatan)

- Tidak menyentuh logika bisnis / UI eksisting — murni infrastruktur SSR.
- Wrapper aman terhadap edge runtime Cloudflare Worker (tidak pakai modul Node-only).
- Setelah perbaikan ini live, log akan memberitahu kita apakah masih ada error sekunder yang perlu di-fix (misal sebuah komponen yang harus dibungkus `<ClientOnly>`).
