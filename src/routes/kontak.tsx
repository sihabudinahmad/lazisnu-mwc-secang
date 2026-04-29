import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Ambulance } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ORG } from "@/data/lazisnu";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — LAZISNU MWC Secang" },
      { name: "description", content: "Hubungi LAZISNU MWC NU Secang. Alamat, email, telepon, dan call center ambulance." },
    ],
  }),
  component: KontakPage,
});

function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Kami Siap Melayani"
        description="Sampaikan pertanyaan, koordinasi donasi, atau permintaan layanan ambulance kepada tim kami."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <ContactItem icon={<MapPin />} title="Alamat Sekretariat" body={ORG.address} />
          <ContactItem icon={<Mail />} title="Email" body={ORG.email} href={`mailto:${ORG.email}`} />
          <ContactItem icon={<Phone />} title="Telepon" body={ORG.phone} href={`tel:${ORG.phone.replace(/-/g, "")}`} />
          <ContactItem icon={<Ambulance />} title="Call Center Ambulance 24 Jam" body={ORG.ambulanceCallCenter} href={`tel:${ORG.ambulanceCallCenter.replace(/-/g, "")}`} highlight />
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
          <iframe
            title="Lokasi LAZISNU MWC Secang"
            src="https://www.openstreetmap.org/export/embed.html?bbox=110.21%2C-7.46%2C110.27%2C-7.43&layer=mapnik&marker=-7.4385%2C110.2470"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, title, body, href, highlight }: { icon: React.ReactNode; title: string; body: string; href?: string; highlight?: boolean }) {
  const content = (
    <div className={`flex gap-4 rounded-2xl border p-5 shadow-sm transition-colors ${highlight ? "border-primary bg-gradient-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"}`}>
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${highlight ? "bg-primary-foreground/15" : "bg-gradient-primary text-primary-foreground"}`}>
        {icon}
      </div>
      <div>
        <div className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{title}</div>
        <div className={`mt-1 font-display text-base font-bold ${highlight ? "text-primary-foreground" : "text-foreground"}`}>{body}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
