import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, Coins, Ambulance, MapPin, TrendingUp, Heart, GraduationCap, ShieldAlert, Users } from "lucide-react";
import { ORG, RANTING_TOTAL, SUMBER_DANA, PILAR, formatRp } from "@/data/lazisnu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAZISNU MWC Secang — Beranda" },
      { name: "description", content: "Annual Report 2024 LAZISNU MWC NU Kecamatan Secang. Amanah, transparan, profesional." },
    ],
  }),
  component: HomePage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, TrendingUp, ShieldAlert, GraduationCap, Users,
};

function HomePage() {
  const totalDana = SUMBER_DANA.reduce((s, x) => s + x.value, 0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.95 0.15 90 / 0.4) 0, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.78 0.15 155 / 0.5) 0, transparent 50%)"
        }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground ring-1 ring-primary-foreground/20">
              Annual Report {ORG.year}
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              Manfaat Berlipat, <span className="text-gold">Berkah Berlimpah</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Laporan tahunan {ORG.name}. Mengelola zakat, infaq, shodaqoh warga Nahdliyin se-Kecamatan Secang dengan amanah, transparan, dan profesional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/laporan" className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 font-semibold text-primary shadow-elegant transition-transform hover:-translate-y-0.5">
                Lihat Laporan Keuangan <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/wilayah" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20">
                Peta 20 Ranting
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={<Coins className="h-6 w-6" />} label="Total Penghimpunan" value={formatRp(totalDana)} />
            <StatCard icon={<MapPin className="h-6 w-6" />} label="Ranting Aktif" value="20 Ranting" />
            <StatCard icon={<HandHeart className="h-6 w-6" />} label="Kotak Koin Tersebar" value={RANTING_TOTAL.tersebar.toLocaleString("id-ID")} />
            <StatCard icon={<Ambulance className="h-6 w-6" />} label="Layanan Ambulance" value="24 Jam Gratis" />
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-3 sm:px-6 lg:px-8">
          <Highlight value={RANTING_TOTAL.kotak.toLocaleString("id-ID")} label="Total Kotak Koin NU" sub="Disebar di 20 ranting" />
          <Highlight value={formatRp(RANTING_TOTAL.total)} label="Total Koin Terhimpun" sub="Akumulasi 20 ranting" />
          <Highlight value="6 Tahun" label="Pertumbuhan Konsisten" sub="2019 – 2024" />
        </div>
      </section>

      {/* PILAR */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">5 Pilar Program</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Manfaat untuk Umat</h2>
          <p className="mt-3 text-muted-foreground">
            Dana ZIS yang terhimpun didayagunakan melalui lima pilar utama untuk kemaslahatan warga Nahdliyin Kecamatan Secang.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PILAR.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <div key={p.title} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/program" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Pelajari setiap pilar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-card sm:p-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-2xl font-display text-2xl font-bold leading-tight sm:text-3xl">
                Transparansi penuh untuk setiap rupiah amanah yang Anda titipkan.
              </h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/85">
                Lihat laporan rinci penerimaan, penyaluran, dan saldo dana ZIS sepanjang tahun {ORG.year}.
              </p>
            </div>
            <Link to="/laporan" className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 font-semibold text-primary shadow-elegant">
              Buka Laporan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur-sm">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-gold-foreground">
        {icon}
      </div>
      <div className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">{label}</div>
      <div className="mt-1 font-display text-lg font-bold leading-tight text-primary-foreground">{value}</div>
    </div>
  );
}

function Highlight({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
      <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{value}</div>
      <div className="mt-1 font-semibold text-foreground">{label}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}
