// All data sourced from LazisNU MWC Secang Annual Report 2024

export const ORG = {
  name: "UPZISNU CARE LAZISNU MWC NU SECANG",
  shortName: "LAZISNU MWC Secang",
  tagline: "Manfaat Berlipat, Berkah Berlimpah",
  address: "Jl. Raya Secang–Payaman KM 4, Payaman, Secang, Magelang",
  email: "lazisnukecamatansecang@gmail.com",
  phone: "085803324288",
  ambulanceCallCenter: "0852-9005-1899",
  ketua: "Anwari",
  year: 2025,
};

export const VISI =
  "Bertekad menjadi lembaga pengelola dana zakat, infaq, shodaqoh, dan dana sosial lainnya yang amanah, transparan, dan profesional sesuai prinsip syariah untuk kemaslahatan umat.";

export const MISI = [
  "Mendorong tumbuhnya kesadaran masyarakat untuk mengeluarkan zakat, infaq, dan shodaqoh.",
  "Mengumpulkan dan mendayagunakan dana ZIS secara amanah, transparan, dan profesional.",
  "Mendistribusikan dan mendayagunakan dana ZIS untuk pemberdayaan ekonomi, pendidikan, kesehatan, sosial, dan kebencanaan.",
  "Memberikan pelayanan terbaik kepada muzakki, munfiq, dan mustahiq.",
];

export const TUJUAN = [
  "Meningkatkan kesejahteraan umat melalui pendayagunaan ZIS.",
  "Mewujudkan tata kelola lembaga yang amanah dan transparan.",
  "Membangun kemandirian ekonomi warga Nahdliyin di Kecamatan Secang.",
  "Memperkuat sinergi antar ranting NU se-Kecamatan Secang.",
];

export const PENGURUS = [
  { jabatan: "Ketua", nama: "Anwari" },
  { jabatan: "Wakil Ketua", nama: "Muh Tabi'in" },
  { jabatan: "Sekretaris", nama: "Muhammad Syihabbudin S.Kom" },
  { jabatan: "Wakil Sekretaris", nama: "Siti Mariyatul Kibtiyah, S.Pd" },
  { jabatan: "Bendahara", nama: "Ibu Retno Eko S, S.E" },
  { jabatan: "Wakil Bendahara", nama: "Sri Chayati, S.PdI" },
  { jabatan: "Divisi Penghimpunan", nama: "M. Khalwani" },
  { jabatan: "Divisi Pendayagunaan", nama: "M. Kholiq" },
  { jabatan: "Divisi Ambulance", nama: "Nuryudi Darmawan" },
];

export type Ranting = {
  no: number;
  nama: string;
  kotak: number;
  tersebar: number;
  terdata: number;
  total: number;
  // Approximate coordinates within Kecamatan Secang, Kab. Magelang
  lat: number;
  lng: number;
};

// Approximate coordinates around Kec. Secang (-7.45, 110.23)
export const RANTING: Ranting[] = [
  { no: 1, nama: "Payaman", kotak: 733, tersebar: 730, terdata: 730, total: 162_414_600, lat: -7.4385, lng: 110.2470 },
  { no: 2, nama: "Pucang", kotak: 412, tersebar: 412, terdata: 380, total: 30_024_850, lat: -7.4290, lng: 110.2305 },
  { no: 3, nama: "Jambewangi", kotak: 205, tersebar: 170, terdata: 135, total: 23_465_700, lat: -7.4150, lng: 110.2560 },
  { no: 4, nama: "Purwosari", kotak: 184, tersebar: 130, terdata: 115, total: 0, lat: -7.4205, lng: 110.2120 },
  { no: 5, nama: "Ngabean", kotak: 521, tersebar: 515, terdata: 504, total: 34_839_000, lat: -7.4475, lng: 110.2235 },
  { no: 6, nama: "Candiretno", kotak: 595, tersebar: 595, terdata: 330, total: 47_355_850, lat: -7.4625, lng: 110.2150 },
  { no: 7, nama: "Madyocondro", kotak: 408, tersebar: 366, terdata: 337, total: 14_062_000, lat: -7.4715, lng: 110.2295 },
  { no: 8, nama: "Donorejo", kotak: 209, tersebar: 159, terdata: 149, total: 5_491_000, lat: -7.4685, lng: 110.2030 },
  { no: 9, nama: "Kalijoso", kotak: 546, tersebar: 546, terdata: 546, total: 59_988_150, lat: -7.4555, lng: 110.2410 },
  { no: 10, nama: "Candisari", kotak: 388, tersebar: 388, terdata: 212, total: 40_314_000, lat: -7.4530, lng: 110.2625 },
  { no: 11, nama: "Ngadirojo", kotak: 298, tersebar: 280, terdata: 280, total: 29_253_100, lat: -7.4810, lng: 110.2475 },
  { no: 12, nama: "Pirikan", kotak: 726, tersebar: 720, terdata: 720, total: 53_063_100, lat: -7.4905, lng: 110.2350 },
  { no: 13, nama: "Secang", kotak: 433, tersebar: 385, terdata: 385, total: 43_114_400, lat: -7.4505, lng: 110.2510 },
  { no: 14, nama: "Karangkajen", kotak: 266, tersebar: 266, terdata: 266, total: 7_494_000, lat: -7.4395, lng: 110.2655 },
  { no: 15, nama: "Pancuranmas", kotak: 460, tersebar: 455, terdata: 419, total: 38_176_500, lat: -7.4750, lng: 110.2620 },
  { no: 16, nama: "Krincing", kotak: 541, tersebar: 541, terdata: 541, total: 61_332_100, lat: -7.4860, lng: 110.2185 },
  { no: 17, nama: "Girikulon", kotak: 170, tersebar: 170, terdata: 0, total: 18_750_000, lat: -7.4225, lng: 110.2715 },
  { no: 18, nama: "Sidomulyo", kotak: 539, tersebar: 539, terdata: 507, total: 25_813_600, lat: -7.4310, lng: 110.2185 },
  { no: 19, nama: "Madusari", kotak: 378, tersebar: 372, terdata: 361, total: 37_125_600, lat: -7.4640, lng: 110.2740 },
  { no: 20, nama: "Donomulyo", kotak: 218, tersebar: 218, terdata: 218, total: 20_263_800, lat: -7.4080, lng: 110.2415 },
];

export const RANTING_TOTAL = {
  kotak: 8230,
  tersebar: 7957,
  terdata: 7135,
  total: 752_341_350,
};

export const SUMBER_DANA = [
  { name: "Saldo Awal", value: 54_561_106 },
  { name: "Donatur Tetap 2025", value: 73_062_066 },
  { name: "Koin NU (5%) 2025", value: 40_389_575 },
];

export const ALOKASI_DANA = [
  { name: "Bagian Ranting", value: 36.5 },
  { name: "Kesehatan", value: 18.3 },
  { name: "Sosial Keagamaan", value: 16.0 },
  { name: "Lain-lain", value: 11.5 },
  { name: "Operasional", value: 7.5 },
  { name: "Bagian PC", value: 2.8 },
  { name: "Pendidikan", value: 2.0 },
];

export const ALOKASI_INTERNAL = [
  { name: "Ranting", value: 65 },
  { name: "MWC", value: 25 },
  { name: "Ambulance", value: 5 },
  { name: "PC", value: 5 },
];

export const TASYARUF_5_PILAR = [
  { name: "Sosial Keagamaan", value: 30 },
  { name: "Kesehatan", value: 20 },
  { name: "Pendidikan", value: 20 },
  { name: "Ekonomi", value: 20 },
  { name: "Tanggap Bencana", value: 10 },
];

export const PERTUMBUHAN_KOTAK = [
  { tahun: "Jan 2025", jumlah: 3_133_990 },
  { tahun: "Feb 2025", jumlah: 3_167_823 },
  { tahun: "Mar 2025", jumlah: 3_019_960 },
  { tahun: "Apr 2025", jumlah: 3_225_920 },
  { tahun: "Mei 2025", jumlah: 3_409_055 },
  { tahun: "Jun 2025", jumlah: 3_410_620 },
  { tahun: "Jul 2025", jumlah: 3_384_445 },
  { tahun: "Agt 2025", jumlah: 3_365_055 },
  { tahun: "Sep 2025", jumlah: 3_405_095 },
  { tahun: "Okt 2025", jumlah: 3_759_553 },
  { tahun: "Nov 2025", jumlah: 3_490_025 },
  { tahun: "Des 2025", jumlah: 3_618_035 },
];

export const PILAR = [
  {
    title: "Kesehatan",
    icon: "Heart",
    desc: "Layanan ambulance gratis, periksa kesehatan, bantuan pengobatan dhuafa.",
  },
  {
    title: "Ekonomi",
    icon: "TrendingUp",
    desc: "Pemberdayaan UMKM, modal usaha mikro, pelatihan kewirausahaan warga Nahdliyin.",
  },
  {
    title: "Siaga Bencana",
    icon: "ShieldAlert",
    desc: "Tanggap darurat, distribusi bantuan korban bencana di wilayah Magelang.",
  },
  {
    title: "Pendidikan",
    icon: "GraduationCap",
    desc: "Beasiswa santri, bantuan operasional madrasah, alat tulis siswa kurang mampu.",
  },
  {
    title: "Sosial Keagamaan",
    icon: "Users",
    desc: "Santunan yatim, takziah, qurban, kegiatan keagamaan & dakwah Aswaja.",
  },
];

// Laporan Keuangan Operasional Ambulans Tahun 2025
export const KEUANGAN_SEMESTER = {
  saldoAwal: 54_561_106,
  penerimaan: [
    { nama: "Donatur Tetap 2025", nilai: 73_062_066 },
    { nama: "Koin NU (5%) 2025", nilai: 40_389_575 },
  ],
  totalPenerimaan: 113_451_641,
  totalDana: 168_012_747,
  penyaluran: [
    { nama: "Uang Makan Driver", nilai: 32_973_000 },
    { nama: "BBM & Pemeliharaan Armada", nilai: 39_410_000 },
    { nama: "Pengadaan Seragam Petugas", nilai: 680_000 },
  ],
  totalPenyaluran: 73_063_000,
  saldoAkhir: 94_949_747,
};

// Saldo akhir per 31 Desember 2025 (nama konstanta dipertahankan untuk kompatibilitas komponen)
export const SALDO_NOVEMBER = {
  total: 94_949_747,
  perincian: [
    { nama: "Saldo Cadangan Peremajaan Unit", nilai: 94_949_747 },
  ],
  fisik: [
    { nama: "Saldo Operasional Tersisa", nilai: 94_949_747 },
  ],
};

export type LaporanRow = { nama: string; nilai: number };
export type LaporanTahunanData = {
  sumberDana: { name: string; value: number }[];
  alokasiDana: { name: string; value: number }[];
  pertumbuhanKotak: { tahun: string; jumlah: number }[];
  keuangan: {
    saldoAwal: number;
    penerimaan: LaporanRow[];
    totalPenerimaan: number;
    penyaluran: LaporanRow[];
    totalPenyaluran: number;
    saldoAkhir: number;
  };
  saldoNovember: {
    total: number;
    perincian: LaporanRow[];
    fisik: LaporanRow[];
  };
};

// Dataset laporan per tahun (2025 aktual, 2026 dummy dari dokumen aset Jan-Apr 2026).
export const LAPORAN_TAHUNAN: Record<number, LaporanTahunanData> = {
  2025: {
    sumberDana: SUMBER_DANA,
    alokasiDana: ALOKASI_DANA,
    pertumbuhanKotak: PERTUMBUHAN_KOTAK,
    keuangan: {
      saldoAwal: KEUANGAN_SEMESTER.saldoAwal,
      penerimaan: KEUANGAN_SEMESTER.penerimaan,
      totalPenerimaan: KEUANGAN_SEMESTER.totalPenerimaan,
      penyaluran: KEUANGAN_SEMESTER.penyaluran,
      totalPenyaluran: KEUANGAN_SEMESTER.totalPenyaluran,
      saldoAkhir: KEUANGAN_SEMESTER.saldoAkhir,
    },
    saldoNovember: SALDO_NOVEMBER,
  },
  2026: {
    sumberDana: [
      { name: "Saldo Awal", value: 94_949_747 },
      { name: "Donatur Tetap 2026 (Jan–Apr)", value: 25_000_000 },
      { name: "Koin NU (5%) 2026 (Jan–Apr)", value: 13_189_960 },
    ],
    alokasiDana: ALOKASI_DANA,
    pertumbuhanKotak: [
      { tahun: "Jan 2026", jumlah: 3_364_760 },
      { tahun: "Feb 2026", jumlah: 3_309_450 },
      { tahun: "Mar 2026", jumlah: 2_933_600 },
      { tahun: "Apr 2026", jumlah: 3_582_150 },
    ],
    keuangan: {
      saldoAwal: 94_949_747,
      penerimaan: [
        { nama: "Donatur Tetap 2026 (Jan–Apr)", nilai: 25_000_000 },
        { nama: "Koin NU (5%) 2026 (Jan–Apr)", nilai: 13_189_960 },
      ],
      totalPenerimaan: 38_189_960,
      penyaluran: [
        { nama: "Uang Makan Driver (Jan–Apr)", nilai: 13_218_000 },
        { nama: "BBM & Pemeliharaan Armada (Jan–Apr)", nilai: 14_899_000 },
      ],
      totalPenyaluran: 28_117_000,
      saldoAkhir: 105_022_707,
    },
    saldoNovember: {
      total: 105_022_707,
      perincian: [
        { nama: "Saldo Operasional Sementara (s.d. Apr 2026)", nilai: 105_022_707 },
      ],
      fisik: [
        { nama: "Saldo Operasional Tersisa", nilai: 105_022_707 },
      ],
    },
  },
};

export const AMBULANCE_PENYAKIT = [
  { nama: "Gagal Ginjal (HD)", jumlah: 190 },
  { nama: "Stroke", jumlah: 130 },
  { nama: "Kanker & Tumor", jumlah: 105 },
  { nama: "Patah Tulang", jumlah: 85 },
  { nama: "Jantung", jumlah: 70 },
  { nama: "Lain-lain", jumlah: 62 },
];

export const AMBULANCE_ASAL = [
  { nama: "Kalijoso", jumlah: 124 },
  { nama: "Payaman", jumlah: 89 },
  { nama: "Candisari", jumlah: 62 },
  { nama: "Secang", jumlah: 60 },
  { nama: "Jambewangi", jumlah: 41 },
  { nama: "Lainnya", jumlah: 266 },
];

export const KEGIATAN = [
  { slug: "maleha-malam-lailatul-husna", judul: "Maleha (Mahir Sembelih Halal)", desc: "Kegiatan rutin tahunan untuk meningkatkan skill jagal hewan Qurban.", kategori: "Sosial Keagamaan", tahun: 2025 },
  { slug: "qurban-idul-adha-1445h", judul: "Qurban Idul Adha 1445 H", desc: "Penyembelihan & distribusi hewan qurban ke 20 ranting se-Kecamatan Secang.", kategori: "Sosial Keagamaan", tahun: 2025 },
  { slug: "santunan-anak-yatim", judul: "Santunan Anak Yatim", desc: "Bantuan rutin bulanan & tahunan untuk anak yatim warga NU.", kategori: "Sosial", tahun: 2025 },
  { slug: "periksa-kesehatan-gratis", judul: "Periksa Kesehatan Gratis", desc: "Pengobatan & cek kesehatan gratis bagi dhuafa di tiap ranting.", kategori: "Kesehatan", tahun: 2026 },
  { slug: "layanan-takziah", judul: "Layanan Takziah", desc: "Pendampingan keluarga duka serta layanan ambulance gratis.", kategori: "Sosial", tahun: 2026 },
  { slug: "beasiswa-santri", judul: "Beasiswa Santri", desc: "Bantuan biaya pendidikan untuk santri & siswa madrasah.", kategori: "Pendidikan", tahun: 2026 },
];

const assetImage = (fileName: string) => new URL(`../assets/images/${fileName}`, import.meta.url).href;

export const GALERI_KEGIATAN_DUMMY: Record<string, string[]> = {
  "maleha-malam-lailatul-husna": [
    assetImage("IMG_20251227_151203_848.jpg"),
    assetImage("IMG_20260308_174114_054.jpg"),
    assetImage("IMG_20260310_172546_594.jpg"),
  ],
  "qurban-idul-adha-1445h": [
    assetImage("IMG_20260317_140031_878.jpg"),
    assetImage("IMG_8402.JPG"),
  ],
  "santunan-anak-yatim": [
    assetImage("IMG_8464.JPG"),
    assetImage("IMG_20251227_151203_848.jpg"),
    assetImage("IMG_20260308_174114_054.jpg"),
  ],
  "periksa-kesehatan-gratis": [
    assetImage("IMG_20260310_172546_594.jpg"),
    assetImage("IMG_20260317_140031_878.jpg"),
    assetImage("IMG_8402.JPG"),
  ],
  "layanan-takziah": [
    assetImage("IMG_8464.JPG"),
    assetImage("IMG_20251227_151203_848.jpg"),
    assetImage("IMG_20260308_174114_054.jpg"),
  ],
  "beasiswa-santri": [
    assetImage("IMG_20260310_172546_594.jpg"),
    assetImage("IMG_20260317_140031_878.jpg"),
    assetImage("IMG_8402.JPG"),
    assetImage("IMG_8464.JPG"),
  ],
};

export function formatRp(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}
