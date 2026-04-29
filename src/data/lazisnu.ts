// All data sourced from LazisNU MWC Secang Annual Report 2024

export const ORG = {
  name: "UPZISNU CARE LAZISNU MWC NU SECANG",
  shortName: "LAZISNU MWC Secang",
  tagline: "Manfaat Berlipat, Berkah Berlimpah",
  address: "Jl. Raya Secang–Payaman KM 4, Payaman, Secang, Magelang",
  email: "lazisnukecamatansecang@gmail.com",
  phone: "0858-0332-4288",
  ambulanceCallCenter: "0858-0332-4288",
  ketua: "H. Moh. Fathul Aziz",
  year: 2024,
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
  { jabatan: "Ketua", nama: "H. Moh. Fathul Aziz" },
  { jabatan: "Wakil Ketua", nama: "H. Ahmad Munir" },
  { jabatan: "Sekretaris", nama: "Muhammad Nur Hadi" },
  { jabatan: "Wakil Sekretaris", nama: "Slamet Riyadi" },
  { jabatan: "Bendahara", nama: "H. Mahmud" },
  { jabatan: "Wakil Bendahara", nama: "Nur Cholis" },
  { jabatan: "Divisi Penghimpunan", nama: "Tim Penghimpun" },
  { jabatan: "Divisi Pendayagunaan", nama: "Tim Tasyaruf" },
  { jabatan: "Divisi Ambulance", nama: "Koordinator Ambulance" },
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
  { name: "Koin NU", value: 858_327_321 },
  { name: "Infaq Lain", value: 288_421_639 },
  { name: "Lain-lain", value: 132_079_808 },
  { name: "Qurban", value: 15_000_000 },
  { name: "Zakat", value: 300_000 },
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
  { tahun: "2019", jumlah: 1600 },
  { tahun: "2020", jumlah: 6156 },
  { tahun: "2021", jumlah: 7063 },
  { tahun: "2022", jumlah: 7648 },
  { tahun: "2023", jumlah: 8099 },
  { tahun: "2024", jumlah: 8230 },
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

// Laporan Keuangan Jan – Juni 2024
export const KEUANGAN_SEMESTER = {
  saldoAwal: 208_611_163,
  penerimaan: [
    { nama: "Koin NU Rumah", nilai: 415_499_400 },
    { nama: "Koin NU Non Rumah", nilai: 1_886_000 },
    { nama: "Infaq Lain", nilai: 114_772_142 },
    { nama: "Zakat", nilai: 200_000 },
  ],
  totalPenerimaan: 532_357_542,
  totalDana: 740_968_705,
  penyaluran: [
    { nama: "Bagian Ranting", nilai: 281_594_711 },
    { nama: "Kesehatan", nilai: 88_335_802 },
    { nama: "Sosial Keagamaan", nilai: 74_047_000 },
    { nama: "Operasional LazisNU", nilai: 31_614_221 },
    { nama: "Operasional Ambulance", nilai: 19_210_071 },
    { nama: "Bagian PC", nilai: 19_210_071 },
    { nama: "Sosialisasi ZIS", nilai: 7_204_000 },
    { nama: "Pendidikan", nilai: 3_000_000 },
    { nama: "Siaga Bencana", nilai: 148_000 },
  ],
  totalPenyaluran: 524_363_876,
  saldoAkhir: 216_604_829,
};

// Saldo per November 2024
export const SALDO_NOVEMBER = {
  total: 184_205_912,
  perincian: [
    { nama: "Koin NU", nilai: 83_426_055 },
    { nama: "Operasional Ambulance dari Koin", nilai: 54_561_106 },
    { nama: "Operasional LazisNU", nilai: 45_063_751 },
    { nama: "Zakat", nilai: 700_000 },
    { nama: "Lain-lain", nilai: 455_000 },
  ],
  fisik: [
    { nama: "Rekening BRI", nilai: 137_086_356 },
    { nama: "Rekening BNU", nilai: 25_818_941 },
    { nama: "Kas Tunai", nilai: 21_300_615 },
  ],
};

export const AMBULANCE_PENYAKIT = [
  { nama: "Ginjal", jumlah: 175 },
  { nama: "Stroke", jumlah: 112 },
  { nama: "Jantung", jumlah: 65 },
  { nama: "Patah Tulang", jumlah: 51 },
  { nama: "Kanker Usus", jumlah: 48 },
  { nama: "Diabetes", jumlah: 42 },
  { nama: "Lain-lain", jumlah: 188 },
];

export const AMBULANCE_ASAL = [
  { nama: "Payaman", jumlah: 130 },
  { nama: "Ngabean", jumlah: 87 },
  { nama: "Kalijoso", jumlah: 82 },
  { nama: "Madyocondro", jumlah: 78 },
  { nama: "Donomulyo", jumlah: 70 },
  { nama: "Krincing", jumlah: 32 },
  { nama: "Pirikan", jumlah: 28 },
  { nama: "Secang", jumlah: 25 },
  { nama: "Lainnya", jumlah: 95 },
];

export const KEGIATAN = [
  { judul: "Maleha (Malam Lailatul Husna)", desc: "Kegiatan rutin tahunan untuk meningkatkan ukhuwah Nahdliyin.", kategori: "Sosial Keagamaan" },
  { judul: "Qurban Idul Adha 1445 H", desc: "Penyembelihan & distribusi hewan qurban ke 20 ranting se-Kecamatan Secang.", kategori: "Sosial Keagamaan" },
  { judul: "Santunan Anak Yatim", desc: "Bantuan rutin bulanan & tahunan untuk anak yatim warga NU.", kategori: "Sosial" },
  { judul: "Periksa Kesehatan Gratis", desc: "Pengobatan & cek kesehatan gratis bagi dhuafa di tiap ranting.", kategori: "Kesehatan" },
  { judul: "Layanan Takziah", desc: "Pendampingan keluarga duka serta layanan ambulance gratis.", kategori: "Sosial" },
  { judul: "Beasiswa Santri", desc: "Bantuan biaya pendidikan untuk santri & siswa madrasah.", kategori: "Pendidikan" },
];

export function formatRp(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}
