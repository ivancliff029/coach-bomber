import { SESSION_FLOW } from "@/lib/constants";

export default function SessionFlow() {
  return (
    <section id="training" className="bg-charcoal-soft border-y border-charcoal-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display uppercase text-4xl sm:text-5xl leading-[0.95] text-sand">
              Every session
              <br />
              follows one order.
            </h2>
            <p className="mt-6 text-sand/70 text-base leading-relaxed max-w-sm">
              No shortcuts and no skipping ahead. We build the body first, then
              hand it the skill — that's how it sticks.
            </p>
            <p className="mt-8 font-display text-2xl text-ochre leading-tight max-w-xs">
              Today's pain is tomorrow's achievement.
            </p>
          </div>

          <ol className="flex flex-col">
            {SESSION_FLOW.map((item, i) => (
              <li
                key={item.step}
                className={`grid grid-cols-[auto_1fr] gap-6 py-8 ${
                  i !== SESSION_FLOW.length - 1 ? "border-b border-charcoal-line" : ""
                }`}
              >
                <span className="font-display text-3xl sm:text-4xl text-sand/25">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-xl text-sand font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sand/70 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
