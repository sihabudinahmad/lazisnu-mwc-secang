type Props = { eyebrow?: string; title: string; description?: string };

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {eyebrow && (
          <div className="mb-3 inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/90 ring-1 ring-primary-foreground/20">
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl text-balance font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
