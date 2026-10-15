import { GYM_GALLERY } from "@/lib/constants";

export default function GymGallery() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-ochre">Inside the gym</p>
            <h2 className="mt-3 font-display uppercase text-4xl sm:text-5xl text-sand leading-[0.95]">
              Real work.
              <br />
              Real atmosphere.
            </h2>
          </div>

          <a
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-sand/80 hover:text-ochre transition-colors"
          >
            See the full gallery
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {GYM_GALLERY.slice(0, 8).map((item) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-sm border border-charcoal-line bg-charcoal-soft"
            >
              <div className="h-80 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-charcoal px-8 text-center">
                    <span className="font-display uppercase text-3xl leading-none text-ochre">Photo coming soon</span>
                  </div>
                )}
              </div>
              <figcaption className="p-5">
                <h3 className="font-display uppercase text-2xl text-sand leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/70">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
