import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from "react-leaflet";
import { RANTING, formatRp } from "@/data/lazisnu";

export default function RantingMap() {
  const max = Math.max(...RANTING.map((r) => r.total));

  return (
    <div className="h-[520px] w-full">
      <MapContainer
        center={[-7.4505, 110.2400]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {RANTING.map((r) => {
          const ratio = max ? r.total / max : 0;
          const radius = 8 + ratio * 22;
          const color = r.total === 0 ? "#94a3b8" : "#15803d";
          return (
            <CircleMarker
              key={r.no}
              center={[r.lat, r.lng]}
              radius={radius}
              pathOptions={{ color, fillColor: color, fillOpacity: 0.55, weight: 2 }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1}>
                <strong>{r.nama}</strong>
              </Tooltip>
              <Popup>
                <div className="space-y-1">
                  <div className="text-base font-bold text-emerald-800">Ranting {r.nama}</div>
                  <div className="text-xs text-slate-600">Kec. Secang, Kab. Magelang</div>
                  <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                    <span className="text-slate-500">Kotak</span><span className="text-right font-semibold">{r.kotak.toLocaleString("id-ID")}</span>
                    <span className="text-slate-500">Tersebar</span><span className="text-right font-semibold">{r.tersebar.toLocaleString("id-ID")}</span>
                    <span className="text-slate-500">Terdata</span><span className="text-right font-semibold">{r.terdata.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="mt-2 border-t pt-1.5 text-sm font-bold text-emerald-700">{formatRp(r.total)}</div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
