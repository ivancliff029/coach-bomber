import { COACH_PHONE_DISPLAY, WHATSAPP_LINK, CALL_LINK } from "@/lib/constants";

export default function CoachCTA() {
  return (
    <section id="coach" className="py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="bg-charcoal-soft border border-charcoal-line rounded-sm p-10 sm:p-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <h2 className="font-display uppercase text-4xl sm:text-5xl text-sand leading-[0.95]">
              Talk to Coach
              <br />
              before you commit.
            </h2>
            <p className="mt-6 text-sand/70 text-lg leading-relaxed max-w-md">
              No booking system, no forms — message him directly on WhatsApp
              and he'll sort out the right class time and program for you.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK("Hi Coach, I'd like to know more about training at Bomber Style.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-7 py-4 text-charcoal font-semibold hover:brightness-95 transition"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href={CALL_LINK}
                className="inline-flex items-center justify-center rounded-sm border border-sand/25 px-7 py-4 text-sand/90 font-medium hover:border-ochre hover:text-ochre transition-colors"
              >
                Call {COACH_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-charcoal-line lg:pl-12">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-sand/50">Phone</dt>
                <dd className="mt-1 text-xl text-sand">{COACH_PHONE_DISPLAY}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-sand/50">Response time</dt>
                <dd className="mt-1 text-xl text-sand">Usually within the hour</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-sand/50">Best for</dt>
                <dd className="mt-1 text-xl text-sand">First-timers, schedules, private sessions</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.36.66 4.56 1.8 6.44L4 29l7.76-1.75A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.62 28 15S22.64 3 16.02 3Zm0 21.7c-2.02 0-3.9-.58-5.48-1.58l-.39-.24-4.6 1.04 1.06-4.48-.26-.4A9.6 9.6 0 0 1 6.3 15c0-5.36 4.36-9.7 9.72-9.7 5.35 0 9.7 4.34 9.7 9.7 0 5.35-4.35 9.7-9.7 9.7Zm5.33-7.27c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34Z" />
    </svg>
  );
}
