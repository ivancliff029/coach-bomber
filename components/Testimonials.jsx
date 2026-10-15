import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-charcoal-soft border-y border-charcoal-line py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <h2 className="font-display uppercase text-4xl sm:text-5xl text-sand mb-14 leading-[0.95]">
          From the gym floor.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <blockquote className="text-sand/90 text-lg leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-sand/60">
                <span className="text-sand">{t.name}</span> — {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
