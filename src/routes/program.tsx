import { createFileRoute } from "@tanstack/react-router";
import { Heart, TrendingUp, ShieldAlert, GraduationCap, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PILAR, TASYARUF_5_PILAR, ALOKASI_INTERNAL } from "@/data/lazisnu";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program 5 Pilar — LAZISNU MWC Secang" },
      { name: "description", content: "Lima pilar program pendayagunaan dana ZIS LAZISNU MWC Secang: Kesehatan, Ekonomi, Siaga Bencana, Pendidikan, Sosial Keagamaan." },
    ],
  }),
  component: ProgramPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, TrendingUp, ShieldAlert, GraduationCap, Users,
};

const COLORS = ["from-rose-500 to-rose-600", "from-emerald-500 to-emerald-600", "from-amber-500 to-amber-600", "from-blue-500 to-blue-600", "from-violet-500 to-violet-600"];

function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Program Pendayagunaan"
        title="5 Pilar Tasyaruf LAZISNU MWC Secang"
        description="Setiap rupiah ZIS yang terhimpun didayagunakan melalui lima pilar utama yang mengena langsung ke kebutuhan umat."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILAR.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${COLORS[i]} text-white shadow-elegant`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <AlocCard title="Alokasi Internal Dana Koin" subtitle="Pembagian dana koin NU yang terhimpun" data={ALOKASI_INTERNAL} />
          <AlocCard title="Alokasi Tasyaruf 5 Pilar" subtitle="Distribusi dana ke program kemaslahatan" data={TASYARUF_5_PILAR} />
        </div>
      </section>
    </>
  );
}

function AlocCard({ title, subtitle, data }: { title: string; subtitle: string; data: { name: string; value: number }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <ul className="mt-5 space-y-3">
        {data.map((d) => (
          <li key={d.name}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium">{d.name}</span>
              <span className="font-bold text-primary tabular-nums">{d.value}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${d.value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
