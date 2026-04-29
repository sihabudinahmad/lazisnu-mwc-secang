import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { RANTING, RANTING_TOTAL, formatRp } from "@/data/lazisnu";

const RantingMap = lazy(() => import("@/components/RantingMap"));

export const Route = createFileRoute("/wilayah")({
  head: () => ({
    meta: [
      { title: "Wilayah & Peta Ranting — LAZISNU MWC Secang" },
      { name: "description", content: "Peta interaktif persebaran 20 ranting NU di Kecamatan Secang beserta data koin koin terhimpun." },
    ],
  }),
  component: WilayahPage,
});

function WilayahPage() {
  const sorted = [...RANTING].sort((a, b) => b.total - a.total);
  const max = Math.max(...RANTING.map((r) => r.total));

  return (
    <>
      <PageHeader
        eyebrow="Wilayah Operasional"
        title="20 Ranting NU se-Kecamatan Secang"
        description="Persebaran kotak koin NU dan total penghimpunan di seluruh ranting wilayah Kecamatan Secang."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Total Ranting" value="20" />
          <Stat label="Kotak Koin" value={RANTING_TOTAL.kotak.toLocaleString("id-ID")} />
          <Stat label="Tersebar" value={RANTING_TOTAL.tersebar.toLocaleString("id-ID")} />
          <Stat label="Total Penghimpunan" value={formatRp(RANTING_TOTAL.total)} small />
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
          <div className="border-b border-border bg-secondary/50 px-5 py-4">
            <h2 className="font-display text-lg font-bold">Peta Persebaran Ranting</h2>
            <p className="text-sm text-muted-foreground">Klik marker untuk melihat detail tiap ranting.</p>
          </div>
          <ClientOnly fallback={<div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">Memuat peta…</div>}>
            <Suspense fallback={<div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">Memuat peta…</div>}>
              <RantingMap />
            </Suspense>
          </ClientOnly>
        </div>
      </section>

      {/* TABLE */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-display text-xl font-bold">Data Penghimpunan per Ranting</h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-3 py-3 text-left">No</th>
                  <th className="px-3 py-3 text-left">Ranting</th>
                  <th className="px-3 py-3 text-right">Kotak</th>
                  <th className="px-3 py-3 text-right">Tersebar</th>
                  <th className="px-3 py-3 text-right">Terdata</th>
                  <th className="px-3 py-3 text-right">Total Penghimpunan</th>
                  <th className="px-3 py-3 text-left">Kontribusi</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((r, i) => (
                  <tr key={r.no} className={i % 2 ? "bg-secondary/30" : ""}>
                    <td className="px-3 py-2.5 text-muted-foreground">{r.no}</td>
                    <td className="px-3 py-2.5 font-semibold">{r.nama}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{r.kotak.toLocaleString("id-ID")}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{r.tersebar.toLocaleString("id-ID")}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{r.terdata.toLocaleString("id-ID")}</td>
                    <td className="px-3 py-2.5 text-right font-semibold tabular-nums">{formatRp(r.total)}</td>
                    <td className="px-3 py-2.5">
                      <div className="h-2 w-full max-w-[120px] overflow-hidden rounded-full bg-secondary">
                        <div className="h-full bg-gradient-primary" style={{ width: `${(r.total / max) * 100}%` }} />
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-primary bg-primary/5 font-bold">
                  <td className="px-3 py-3" colSpan={2}>TOTAL</td>
                  <td className="px-3 py-3 text-right tabular-nums">{RANTING_TOTAL.kotak.toLocaleString("id-ID")}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{RANTING_TOTAL.tersebar.toLocaleString("id-ID")}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{RANTING_TOTAL.terdata.toLocaleString("id-ID")}</td>
                  <td className="px-3 py-3 text-right tabular-nums text-primary">{formatRp(RANTING_TOTAL.total)}</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-1 font-display font-bold text-primary ${small ? "text-xl" : "text-2xl"}`}>{value}</div>
    </div>
  );
}
