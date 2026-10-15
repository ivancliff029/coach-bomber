import { PROGRAMS, WHATSAPP_LINK } from "@/lib/constants";

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-sand leading-[0.95]">
            Pick your
            <br />
            starting point.
          </h2>
          <p className="text-sand/70 max-w-sm">
            Every program runs the same four-part structure — the difference is
            pace, focus, and how much one-on-one time you get with Coach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-charcoal-line">
          {PROGRAMS.map((program) => (
            <div key={program.name} className="bg-charcoal p-8 sm:p-10">
              <span className="text-xs uppercase tracking-wide text-ochre">
                {program.audience}
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-sand uppercase">
                {program.name}
              </h3>
              <p className="mt-4 text-sand/70 leading-relaxed">
                {program.description}
              </p>
              <a
                href={WHATSAPP_LINK(
                  `Hi Coach, I'm interested in the ${program.name} program at Bomber Style.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-sand/90 hover:text-clay transition-colors"
              >
                Ask about this program
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
