import { useEffect, useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Images, ZoomIn } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GALERI_KEGIATAN_DUMMY, KEGIATAN } from "@/data/lazisnu";

export const Route = createFileRoute("/kegiatan/$slug")({
  head: () => ({
    meta: [
      { title: "Detail Kegiatan & Galeri — LAZISNU MWC Secang" },
      { name: "description", content: "Detail dokumentasi kegiatan LAZISNU MWC Secang dengan galeri foto dan mode zoom slider." },
    ],
  }),
  component: KegiatanDetailPage,
});

function KegiatanDetailPage() {
  const { slug } = Route.useParams();

  const kegiatan = useMemo(() => KEGIATAN.find((item) => item.slug === slug), [slug]);
  const images = GALERI_KEGIATAN_DUMMY[slug] ?? [];

  const [openZoom, setOpenZoom] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!openZoom || !api) {
      return;
    }
    api.scrollTo(startIndex, true);
  }, [openZoom, api, startIndex]);

  if (!kegiatan) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="font-display text-2xl font-bold">Kegiatan tidak ditemukan</h1>
          <p className="mt-2 text-muted-foreground">Data kegiatan dengan slug tersebut belum tersedia.</p>
          <Link
            to="/kegiatan"
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke daftar kegiatan
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Detail Kegiatan"
        title={kegiatan.judul}
        description={kegiatan.desc}
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Link
            to="/kegiatan"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-xs font-semibold transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
            {kegiatan.kategori}
          </span>
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
            Tahun {kegiatan.tahun}
          </span>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold">Galeri Kegiatan</h2>
              <p className="text-sm text-muted-foreground">Dokumentasi kegiatan. Klik gambar untuk zoom dan geser dengan slider.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Images className="h-3.5 w-3.5" />
              {images.length} Foto
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => {
                  setStartIndex(index);
                  setOpenZoom(true);
                }}
                className="group relative overflow-hidden rounded-xl border border-border text-left"
              >
                <img
                  src={src}
                  alt={`${kegiatan.judul} ${index + 1}`}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/35">
                  <span className="inline-flex translate-y-2 items-center gap-1 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-black opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <ZoomIn className="h-3.5 w-3.5" />
                    Zoom
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={openZoom} onOpenChange={setOpenZoom}>
        <DialogContent className="max-h-[95vh] max-w-6xl overflow-hidden border-none bg-transparent p-0 shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Zoom galeri kegiatan</DialogTitle>
            <DialogDescription>
              Tampilan slider galeri kegiatan.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl bg-black/90 p-4 sm:p-6">
            <Carousel setApi={setApi} opts={{ loop: true }} className="mx-auto w-full max-w-5xl">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={`${src}-zoom-${index}`}>
                    <div className="flex items-center justify-center">
                      <img
                        src={src}
                        alt={`${kegiatan.judul} zoom ${index + 1}`}
                        className="max-h-[70vh] w-full rounded-lg object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 border-white/30 bg-white/20 text-white hover:bg-white/30" />
              <CarouselNext className="right-2 border-white/30 bg-white/20 text-white hover:bg-white/30" />
            </Carousel>

            <p className="mt-3 text-center text-xs font-medium text-white/80">
              Foto {currentIndex} dari {images.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
