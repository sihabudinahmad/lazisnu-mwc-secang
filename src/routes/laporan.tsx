import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from "recharts";
import { PageHeader } from "@/components/PageHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { LAPORAN_TAHUNAN, formatRp } from "@/data/lazisnu";

export const Route = createFileRoute("/laporan")({
  head: () => ({
    meta: [
      { title: "Laporan Keuangan Multi Tahun — LAZISNU MWC Secang" },
      { name: "description", content: "Laporan keuangan transparan multi tahun: sumber dana, alokasi, penerimaan dan penyaluran dana ZIS LAZISNU MWC Secang." },
    ],
  }),
  component: LaporanPage,
});

const PIE_COLORS = ["#15803d", "#65a30d", "#ca8a04", "#0891b2", "#7c3aed", "#db2777", "#dc2626"];

type Row = { nama: string; nilai: number };

function aggregateNamedValues<T extends { name: string; value: number }>(groups: T[][]): T[] {
  const map = new Map<string, number>();
  for (const rows of groups) {
    for (const row of rows) {
      map.set(row.name, (map.get(row.name) ?? 0) + row.value);
    }
  }
  return Array.from(map, ([name, value]) => ({ name, value } as T));
}

function aggregateRows(groups: Row[][]): Row[] {
  const map = new Map<string, number>();
  for (const rows of groups) {
    for (const row of rows) {
      map.set(row.nama, (map.get(row.nama) ?? 0) + row.nilai);
    }
  }
  return Array.from(map, ([nama, nilai]) => ({ nama, nilai }));
}

function parseYearLabel(label: string) {
  const matched = label.match(/(\d{4})$/);
  return matched ? Number(matched[1]) : null;
}

function LaporanPage() {
  const availableYears = useMemo(
    () => Object.keys(LAPORAN_TAHUNAN).map(Number).sort((a, b) => b - a),
    [],
  );
  const [selectedYears, setSelectedYears] = useState<number[]>(availableYears);

  const toggleYear = (year: number, checked: boolean) => {
    setSelectedYears((prev) => {
      if (checked) {
        return prev.includes(year) ? prev : [...prev, year].sort((a, b) => b - a);
      }
      if (prev.length === 1) {
        return prev;
      }
      return prev.filter((y) => y !== year);
    });
  };

  const filtered = useMemo(() => {
    const years = selectedYears.filter((year) => LAPORAN_TAHUNAN[year]);
    const reports = years.map((year) => LAPORAN_TAHUNAN[year]);

    const sumberDana = aggregateNamedValues(reports.map((r) => r.sumberDana));
    const alokasiRaw = aggregateNamedValues(reports.map((r) => r.alokasiDana));
    const alokasiDana = alokasiRaw.map((x) => ({
      ...x,
      value: Number((x.value / reports.length).toFixed(1)),
    }));
    const pertumbuhanKotak = reports
      .flatMap((r) => r.pertumbuhanKotak)
      .filter((x) => {
        const year = parseYearLabel(x.tahun);
        return year ? years.includes(year) : true;
      });
    const keuangan = {
      saldoAwal: reports.reduce((s, r) => s + r.keuangan.saldoAwal, 0),
      saldoAkhir: reports.reduce((s, r) => s + r.keuangan.saldoAkhir, 0),
      totalPenerimaan: reports.reduce((s, r) => s + r.keuangan.totalPenerimaan, 0),
      totalPenyaluran: reports.reduce((s, r) => s + r.keuangan.totalPenyaluran, 0),
      penerimaan: aggregateRows(reports.map((r) => r.keuangan.penerimaan)),
      penyaluran: aggregateRows(reports.map((r) => r.keuangan.penyaluran)),
    };
    const saldoNovember = {
      total: reports.reduce((s, r) => s + r.saldoNovember.total, 0),
      perincian: aggregateRows(reports.map((r) => r.saldoNovember.perincian)),
      fisik: aggregateRows(reports.map((r) => r.saldoNovember.fisik)),
    };

    return { years, sumberDana, alokasiDana, pertumbuhanKotak, keuangan, saldoNovember };
  }, [selectedYears]);

  const yearLabel = filtered.years.length === 1
    ? String(filtered.years[0])
    : `${filtered.years[filtered.years.length - 1]}–${filtered.years[0]}`;
  const isSementara = filtered.years.includes(2026);
  const saldoStatLabel = isSementara ? "Saldo Sementara" : "Saldo Buku November";
  const saldoPeriodLabel = isSementara ? "s.d. April" : "November";

  const totalDana = filtered.sumberDana.reduce((s, x) => s + x.value, 0);

  return (
    <>
      <PageHeader
        eyebrow="Transparansi Keuangan"
        title={`Laporan Keuangan ${yearLabel}`}
        description="Rincian penerimaan, penyaluran, dan saldo dana ZIS LAZISNU MWC NU Kecamatan Secang."
      />

      <section className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="text-sm font-semibold">Filter Tahun (multi-select)</div>
          <div className="mt-3 flex flex-wrap gap-4">
            {availableYears.map((year) => {
              const checked = selectedYears.includes(year);
              return (
                <label key={year} className="inline-flex cursor-pointer items-center gap-2 text-sm">
                  <Checkbox checked={checked} onCheckedChange={(v) => toggleYear(year, Boolean(v))} />
                  <span>Tahun {year}</span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      {/* RINGKASAN */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Total Sumber Dana" value={formatRp(totalDana)} />
          <Stat label="Saldo Awal Januari" value={formatRp(filtered.keuangan.saldoAwal)} />
          <Stat label="Saldo Akhir Juni" value={formatRp(filtered.keuangan.saldoAkhir)} />
          <Stat label={saldoStatLabel} value={formatRp(filtered.saldoNovember.total)} />
        </div>
      </section>

      {/* SUMBER & ALOKASI */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ChartCard title="Sumber Penghimpunan Dana" subtitle="Komposisi dana ZIS yang berhasil dihimpun">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={filtered.sumberDana} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={2}>
                {filtered.sumberDana.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v) => formatRp(Number(v))} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <ul className="mt-4 space-y-2 text-sm">
            {filtered.sumberDana.map((d, i) => (
              <li key={d.name} className="flex items-center justify-between border-b border-border/60 py-1.5">
                <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{ background: PIE_COLORS[i] }} />{d.name}</span>
                <span className="font-semibold tabular-nums">{formatRp(d.value)}</span>
              </li>
            ))}
          </ul>
        </ChartCard>

        <ChartCard title="Alokasi Penyaluran Dana" subtitle="Persentase pendayagunaan ke seluruh pos">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filtered.alokasiDana} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis type="number" unit="%" />
              <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v) => `${v}%`} />
              <Bar dataKey="value" fill="#15803d" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* PERTUMBUHAN */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ChartCard title={`Pertumbuhan Kotak Koin NU (${yearLabel})`} subtitle="Konsistensi pertumbuhan jaringan koin di seluruh ranting">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filtered.pertumbuhanKotak}>
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
            title={`Penerimaan Januari – Juni (${yearLabel})`}
            rows={filtered.keuangan.penerimaan}
            total={filtered.keuangan.totalPenerimaan}
            totalLabel="Total Penerimaan"
          />
          <TableCard
            title={`Penyaluran Januari – Juni (${yearLabel})`}
            rows={filtered.keuangan.penyaluran}
            total={filtered.keuangan.totalPenyaluran}
            totalLabel="Total Penyaluran"
          />
        </div>
      </section>

      {/* SALDO NOV */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <TableCard
            title={`Perincian ${saldoStatLabel} — ${saldoPeriodLabel} (${yearLabel})`}
            rows={filtered.saldoNovember.perincian}
            total={filtered.saldoNovember.total}
            totalLabel={`Total ${saldoStatLabel}`}
          />
          <TableCard
            title={`Saldo Fisik — ${saldoPeriodLabel} (${yearLabel})`}
            rows={filtered.saldoNovember.fisik}
            total={filtered.saldoNovember.fisik.reduce((s, x) => s + x.nilai, 0)}
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
