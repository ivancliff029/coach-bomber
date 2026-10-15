import { GYM_GALLERY, GALLERY_VIDEOS } from "@/lib/constants";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-charcoal text-sand">
      <section className="bg-noise border-b border-charcoal-line">
        <div className="max-w-content mx-auto px-5 sm:px-8 py-32 sm:py-40">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sand/70 hover:text-ochre transition-colors"
          >
            <span aria-hidden="true">←</span>
            Back to home
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-ochre">Gallery</p>
            <h1 className="mt-3 font-display uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-sand">
              Bomber Style
              <br />
              in motion.
            </h1>
            <p className="mt-6 text-sand/70 text-lg leading-relaxed max-w-xl">
              A closer look at the training, discipline, and atmosphere behind the work we put in at Naguru Hill.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-ochre">Videos</p>
            <h2 className="mt-3 font-display uppercase text-4xl sm:text-5xl text-sand leading-[0.95]">
              Watch the work.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {GALLERY_VIDEOS.map((video) => (
              <article key={video.title} className="overflow-hidden rounded-sm border border-charcoal-line bg-charcoal-soft">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display uppercase text-2xl text-sand leading-tight">{video.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand/70">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-line py-20">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-ochre">Photos</p>
            <h2 className="mt-3 font-display uppercase text-4xl sm:text-5xl text-sand leading-[0.95]">
              The gym, the grind.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {GYM_GALLERY.map((item) => (
              <figure
                key={`${item.title}-${item.image}`}
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
                  <h3 className="font-display uppercase text-2xl text-sand leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/70">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
