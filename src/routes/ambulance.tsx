import { createFileRoute } from "@tanstack/react-router";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Ambulance, Phone, Activity, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AMBULANCE_PENYAKIT, AMBULANCE_ASAL, ORG } from "@/data/lazisnu";

export const Route = createFileRoute("/ambulance")({
  head: () => ({
    meta: [
      { title: "Layanan Ambulance — LAZISNU MWC Secang" },
      { name: "description", content: "Layanan ambulance gratis 24 jam dari LAZISNU MWC Secang. Statistik pengguna dan riwayat layanan tahun 2024." },
    ],
  }),
  component: AmbulancePage,
});

function AmbulancePage() {
  const totalPengguna = AMBULANCE_ASAL.reduce((s, x) => s + x.jumlah, 0);
  const totalKasus = AMBULANCE_PENYAKIT.reduce((s, x) => s + x.jumlah, 0);

  return (
    <>
      <PageHeader
        eyebrow="Layanan Sosial"
        title="Ambulance Gratis 24 Jam"
        description="Layanan ambulance gratis untuk seluruh warga Kecamatan Secang. Sebagai bentuk khidmat NU untuk umat."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-primary p-8 text-primary-foreground shadow-card sm:p-10">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur">
                <Ambulance className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-primary-foreground/80">Call Center 24 Jam</p>
                <a href={`tel:${ORG.ambulanceCallCenter.replace(/-/g,"")}`} className="font-display text-3xl font-bold sm:text-4xl">
                  {ORG.ambulanceCallCenter}
                </a>
                <p className="mt-1 text-sm text-primary-foreground/85">Gratis untuk warga Kecamatan Secang</p>
              </div>
            </div>
            <a href={`tel:${ORG.ambulanceCallCenter.replace(/-/g,"")}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 font-semibold text-primary shadow-elegant">
              <Phone className="h-4 w-4" /> Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat icon={<Users className="h-5 w-5" />} label="Total Pengguna" value={totalPengguna.toLocaleString("id-ID")} />
          <Stat icon={<Activity className="h-5 w-5" />} label="Kasus Tertangani" value={totalKasus.toLocaleString("id-ID")} />
          <Stat icon={<Ambulance className="h-5 w-5" />} label="Operasional" value="24 / 7" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ChartCard title="Asal Pengguna Layanan" subtitle="Jumlah pengguna per ranting">
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={AMBULANCE_ASAL} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis type="number" />
              <YAxis type="category" dataKey="nama" width={100} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="jumlah" fill="#15803d" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Riwayat Penyakit Pengguna" subtitle="Distribusi kasus medis yang dilayani">
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={AMBULANCE_PENYAKIT} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis type="number" />
              <YAxis type="category" dataKey="nama" width={100} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="jumlah" fill="#ca8a04" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>
    </>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">{icon}</div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-display text-xl font-bold text-foreground">{value}</div>
      </div>
    </div>
  );
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{subtitle}</p>
      {children}
    </div>
  );
}
