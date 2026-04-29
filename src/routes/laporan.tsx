import { createFileRoute } from "@tanstack/react-router";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from "recharts";
import { PageHeader } from "@/components/PageHeader";
import { SUMBER_DANA, ALOKASI_DANA, PERTUMBUHAN_KOTAK, KEUANGAN_SEMESTER, SALDO_NOVEMBER, formatRp } from "@/data/lazisnu";

export const Route = createFileRoute("/laporan")({
  head: () => ({
    meta: [
      { title: "Laporan Keuangan 2024 — LAZISNU MWC Secang" },
      { name: "description", content: "Laporan keuangan transparan: sumber dana, alokasi, penerimaan dan penyaluran dana ZIS LAZISNU MWC Secang tahun 2024." },
    ],
  }),
  component: LaporanPage,
});

const PIE_COLORS = ["#15803d", "#65a30d", "#ca8a04", "#0891b2", "#7c3aed", "#db2777", "#dc2626"];

function LaporanPage() {
  const totalDana = SUMBER_DANA.reduce((s, x) => s + x.value, 0);

  return (
    <>
      <PageHeader
        eyebrow="Transparansi Keuangan"
        title="Laporan Keuangan 2024"
        description="Rincian penerimaan, penyaluran, dan saldo dana ZIS LAZISNU MWC NU Kecamatan Secang."
      />

      {/* RINGKASAN */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Total Sumber Dana" value={formatRp(totalDana)} />
          <Stat label="Saldo Awal Januari" value={formatRp(KEUANGAN_SEMESTER.saldoAwal)} />
          <Stat label="Saldo Akhir Juni" value={formatRp(KEUANGAN_SEMESTER.saldoAkhir)} />
          <Stat label="Saldo Buku November" value={formatRp(SALDO_NOVEMBER.total)} />
        </div>
      </section>

      {/* SUMBER & ALOKASI */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ChartCard title="Sumber Penghimpunan Dana" subtitle="Komposisi dana ZIS yang berhasil dihimpun">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={SUMBER_DANA} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={2}>
                {SUMBER_DANA.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v: number) => formatRp(v)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <ul className="mt-4 space-y-2 text-sm">
            {SUMBER_DANA.map((d, i) => (
              <li key={d.name} className="flex items-center justify-between border-b border-border/60 py-1.5">
                <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{ background: PIE_COLORS[i] }} />{d.name}</span>
                <span className="font-semibold tabular-nums">{formatRp(d.value)}</span>
              </li>
            ))}
          </ul>
        </ChartCard>

        <ChartCard title="Alokasi Penyaluran Dana" subtitle="Persentase pendayagunaan ke seluruh pos">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ALOKASI_DANA} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis type="number" unit="%" />
              <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="value" fill="#15803d" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* PERTUMBUHAN */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ChartCard title="Pertumbuhan Kotak Koin NU 2019 – 2024" subtitle="Konsistensi pertumbuhan jaringan koin di seluruh ranting">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={PERTUMBUHAN_KOTAK}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="tahun" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="jumlah" stroke="#15803d" strokeWidth={3} dot={{ r: 5, fill: "#15803d" }} activeDot={{ r: 7 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* TABEL JAN - JUNI */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <TableCard
            title="Penerimaan Januari – Juni 2024"
            rows={KEUANGAN_SEMESTER.penerimaan}
            total={KEUANGAN_SEMESTER.totalPenerimaan}
            totalLabel="Total Penerimaan"
          />
          <TableCard
            title="Penyaluran Januari – Juni 2024"
            rows={KEUANGAN_SEMESTER.penyaluran}
            total={KEUANGAN_SEMESTER.totalPenyaluran}
            totalLabel="Total Penyaluran"
          />
        </div>
      </section>

      {/* SALDO NOV */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <TableCard
            title="Perincian Saldo Buku — November 2024"
            rows={SALDO_NOVEMBER.perincian}
            total={SALDO_NOVEMBER.total}
            totalLabel="Total Saldo Buku"
          />
          <TableCard
            title="Saldo Fisik — November 2024"
            rows={SALDO_NOVEMBER.fisik}
            total={SALDO_NOVEMBER.fisik.reduce((s, x) => s + x.nilai, 0)}
            totalLabel="Total Saldo Fisik"
          />
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-lg font-bold text-primary">{value}</div>
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

function TableCard({ title, rows, total, totalLabel }: { title: string; rows: { nama: string; nilai: number }[]; total: number; totalLabel: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-secondary/50 px-5 py-3">
        <h3 className="font-display text-base font-bold">{title}</h3>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.nama} className={i % 2 ? "bg-secondary/20" : ""}>
              <td className="px-5 py-2.5">{r.nama}</td>
              <td className="px-5 py-2.5 text-right font-semibold tabular-nums">{formatRp(r.nilai)}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-primary bg-primary/5 font-bold">
            <td className="px-5 py-3">{totalLabel}</td>
            <td className="px-5 py-3 text-right text-primary tabular-nums">{formatRp(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
