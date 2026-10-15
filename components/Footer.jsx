import { COACH_PHONE_DISPLAY, SITE, NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-[1.2fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl text-sand">BOMBER</span>
            <span className="font-display text-xl text-clay">STYLE BOXING</span>
          </div>
          <p className="mt-4 text-sand/60 text-sm max-w-xs leading-relaxed">
            {SITE.location}, Uganda. Today's pain is tomorrow's achievement.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wide text-sand/50 mb-4">Site</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sand/70 hover:text-ochre text-sm transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wide text-sand/50 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/70 hover:text-ochre transition-colors"
              >
                WhatsApp Coach
              </a>
            </li>
            <li className="text-sand/70">{COACH_PHONE_DISPLAY}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-line py-6">
        <p className="max-w-content mx-auto px-5 sm:px-8 text-xs text-sand/40">
          © {new Date().getFullYear()} {SITE.fullName}. Naguru, Kampala.
        </p>
      </div>
    </footer>
  );
}
