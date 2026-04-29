import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Compass } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { VISI, MISI, TUJUAN, PENGURUS, ORG } from "@/data/lazisnu";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang LAZISNU MWC Secang" },
      { name: "description", content: "Visi, misi, tujuan, dan struktur pengurus LAZISNU MWC NU Kecamatan Secang." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Lembaga ZIS Resmi MWC NU Kecamatan Secang"
        description="Mengelola dana zakat, infaq, dan shodaqoh warga Nahdliyin secara amanah, transparan, dan profesional."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card icon={<Eye className="h-6 w-6" />} title="Visi">
            <p className="leading-relaxed text-muted-foreground">{VISI}</p>
          </Card>
          <Card icon={<Target className="h-6 w-6" />} title="Misi">
            <ul className="space-y-2.5">
              {MISI.map((m) => (
                <li key={m} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6">
          <Card icon={<Compass className="h-6 w-6" />} title="Tujuan">
            <ul className="grid gap-3 sm:grid-cols-2">
              {TUJUAN.map((t) => (
                <li key={t} className="flex gap-2.5 rounded-xl bg-secondary/60 p-4 text-sm leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Struktur Organisasi</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Pengurus LAZISNU MWC Secang</h2>
            <p className="mt-3 text-muted-foreground">Periode kepengurusan {ORG.year}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PENGURUS.map((p) => (
              <div key={p.jabatan} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{p.jabatan}</div>
                <div className="mt-1 font-display text-base font-bold">{p.nama}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
        {icon}
      </div>
      <h3 className="mb-3 font-display text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
}
