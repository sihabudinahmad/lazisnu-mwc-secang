import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Ambulance } from "lucide-react";
import { ORG } from "@/data/lazisnu";
import logo from "@/assets/nu-care-lazisnu-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="NU CARE LAZISNU" className="h-12 w-auto" />
              <div className="leading-tight">
                <div className="font-display text-base font-bold">NU CARE-LAZISNU</div>
                <div className="text-xs font-semibold text-primary">MWC NU Secang</div>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Lembaga amil zakat, infaq, shodaqoh resmi MWC NU Kecamatan Secang. Amanah, transparan, profesional.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">Kontak</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{ORG.address}</span></li>
              <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`mailto:${ORG.email}`} className="hover:text-primary">{ORG.email}</a></li>
              <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`tel:${ORG.phone.replace(/-/g,"")}`} className="hover:text-primary">{ORG.phone}</a></li>
              <li className="flex gap-2.5"><Ambulance className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Call Center Ambulance: {ORG.ambulanceCallCenter}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">Tautan</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                ["/tentang","Tentang"],["/wilayah","Wilayah"],
                ["/program","Program"],["/laporan","Laporan Keuangan"],
                ["/ambulance","Ambulance"],["/kegiatan","Kegiatan"],
              ].map(([to,l])=>(
                <li key={to}><Link to={to} className="text-muted-foreground hover:text-primary">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} UPZISNU CARE LAZISNU MWC NU Secang. Seluruh data bersumber dari Annual Report {ORG.year}.
        </div>
      </div>
    </footer>
  );
}
