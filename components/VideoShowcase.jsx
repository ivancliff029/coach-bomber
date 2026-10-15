import { VIDEO_FEATURE } from "@/lib/constants";

export default function VideoShowcase() {
  return (
    <section className="bg-charcoal-soft border-y border-charcoal-line py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-ochre">Coach's eye</p>
          <h2 className="mt-4 font-display uppercase text-4xl sm:text-5xl text-sand leading-[0.95]">
            See what
            <br />
            discipline looks like.
          </h2>
          <p className="mt-6 max-w-md text-sand/70 text-lg leading-relaxed">
            {VIDEO_FEATURE.description}
          </p>

          <a
            href="#coach"
            className="mt-8 inline-flex items-center gap-2 text-ochre hover:text-ochre-soft transition-colors"
          >
            Talk to Coach
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-charcoal-line bg-charcoal shadow-[0_0_0_1px_rgba(201,190,168,0.05)]">
          <div className="aspect-video w-full">
            <video
              className="h-full w-full"
              src={VIDEO_FEATURE.videoUrl}
              title={VIDEO_FEATURE.title}
              poster={VIDEO_FEATURE.poster}
              controls
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
