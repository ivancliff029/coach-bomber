import { WHATSAPP_LINK, SITE } from "@/lib/constants";
import ImpactMark from "@/components/graphics/ImpactMark";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-noise pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-[68%_center] bg-no-repeat opacity-45 sm:bg-center"
        style={{
          backgroundImage:
            "url('/img/home.jpeg')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/35 via-[#0d0d0d]/20 to-[#0d0d0d]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 top-10 w-[560px] h-[560px] opacity-70"
        aria-hidden="true"
      >
        <ImpactMark className="w-full h-full" />
      </div>

      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-[6px] bg-clay"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto px-5 sm:px-8">
        <p className="text-sand/70 text-sm sm:text-base mb-6 max-w-md">
          A boxing and fitness gym at Naguru GoDown — where the Community comes to work.
        </p>

        <h1 className="font-display uppercase leading-[0.9] text-[15vw] sm:text-[6.5rem] lg:text-[7.5rem] text-sand">
          Train the
          <br />
          <span className="text-clay">Bomber</span> way.
        </h1>

        <p className="mt-8 max-w-lg text-lg sm:text-xl text-sand/85 leading-relaxed">
          Full body conditioning, real boxing technique, and a coach who pushes
          you past where you'd stop on your own. Around here we say it plainly —
          today's pain is tomorrow's achievement.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_LINK("Hi Coach, I'd like to book a free class at Bomber Style.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-clay px-7 py-4 text-sand font-medium hover:bg-clay-bright transition-colors"
          >
            Book a Class Today At Affordable Prices on WhatsApp
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center rounded-sm border border-sand/25 px-7 py-4 text-sand/90 font-medium hover:border-ochre hover:text-ochre transition-colors"
          >
            See the Programs
          </a>
        </div>

        <div className="mt-16 flex items-center gap-3 text-sand/60 text-sm">
          <span className="h-px w-10 bg-sand/30" />
          {SITE.location}, Uganda
        </div>
      </div>
    </section>
  );
}
