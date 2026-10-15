import { LOCATION } from "@/lib/constants";

export default function Location() {
  const mapsQuery = encodeURIComponent(`${LOCATION.addressLine}, ${LOCATION.area}`);

  return (
    <section id="location" className="py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-sand leading-[0.95]">
            Find us on
            <br />
            Naguru Hill.
          </h2>
          <p className="mt-6 text-sand/70 text-lg leading-relaxed max-w-md">
            {LOCATION.addressLine}, {LOCATION.area}.
          </p>

          <dl className="mt-10 space-y-3">
            {LOCATION.hours.map((h) => (
              <div key={h.day} className="flex justify-between max-w-xs border-b border-charcoal-line pb-3">
                <dt className="text-sand/70">{h.day}</dt>
                <dd className="text-sand">{h.time}</dd>
              </div>
            ))}
          </dl>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-ochre hover:text-ochre-soft transition-colors"
          >
            Get directions
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="relative aspect-[4/3] rounded-sm border border-charcoal-line bg-charcoal-soft overflow-hidden">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src="https://www.google.com/maps?q=Naguru+Godown,+Kampala,+Uganda&output=embed"
            title="Map showing Naguru Godown in Kampala"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-clay shrink-0" />
            <span className="text-sand/80 text-sm">Naguru Godown, Kampala</span>
          </div>
        </div>
      </div>
    </section>
  );
}
