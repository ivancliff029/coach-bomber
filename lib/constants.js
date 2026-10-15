// Single source of truth for contact details and site copy.
// Update phone numbers, links, and section copy here — components just read from this file.

export const COACH_PHONE_DISPLAY = "+256 730 429 825";
export const COACH_PHONE_INTL = "256730429825"; // no leading +, no spaces (wa.me format)

export const WHATSAPP_LINK = (message) => {
  const base = `https://wa.me/${COACH_PHONE_INTL}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const CALL_LINK = `tel:+${COACH_PHONE_INTL}`;

export const SITE = {
  name: "Bomber Style",
  fullName: "Bomber Style Fitness and Boxing",
  location: "Naguru, Kampala",
  tagline: "Today's pain is tomorrow's achievement.",
};

export const NAV_LINKS = [
  { label: "Training", href: "#training" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Coach", href: "#coach" },
  { label: "Find Us", href: "#location" },
];

// The session structure, in order — this genuinely is a sequence, so it's
// presented as one on the page (warm-up through to pad work).
export const SESSION_FLOW = [
  {
    step: "01",
    title: "Full Body Warm-Up",
    description:
      "We open every session moving — mobility, rope work, and conditioning that gets the whole body ready before a glove goes on.",
  },
  {
    step: "02",
    title: "Calisthenics",
    description:
      "Push-ups, core circuits, and bodyweight strength work. This is where the engine gets built — no shortcuts, no machines needed.",
  },
  {
    step: "03",
    title: "Boxing Drills",
    description:
      "Stance, footwork, combinations. We break technique down until it's automatic, the same standard whether you're new or years in.",
  },
  {
    step: "04",
    title: "Pad Work",
    description:
      "One-on-one time on the pads with Coach. This is where the drills turn into real output — power, timing, and confidence.",
  },
];

export const PROGRAMS = [
  {
    name: "Foundations",
    audience: "New to boxing",
    description:
      "Learn to move, guard, and punch correctly from day one. Small groups, close coaching, no judgment for beginners.",
  },
  {
    name: "Bomber Conditioning",
    audience: "Fitness + fat loss",
    description:
      "Full body and calisthenics-led sessions built for people who want boxing fitness without stepping into full sparring.",
  },
  {
    name: "Pad Work Intensive",
    audience: "Building power & technique",
    description:
      "One-on-one pad sessions with Coach focused on combinations, timing, and correcting what group classes can't fix.",
  },
  {
    name: "Youth Boxing",
    audience: "Ages 10-17",
    description:
      "Discipline, fitness, and fundamentals for young boxers in Naguru — structure that carries outside the gym too.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I came in for the fitness and stayed for the discipline. Six months in and I actually look forward to 6am.",
    name: "Patricia N.",
    detail: "Member since 2024",
  },
  {
    quote:
      "Coach doesn't let you cheat a rep. Slowest progress I've ever been proud of.",
    name: "Kenneth O.",
    detail: "Pad Work Intensive",
  },
  {
    quote:
      "My son has more focus in school since he started Youth Boxing. Worth every session.",
    name: "Grace K.",
    detail: "Parent, Youth Boxing",
  },
];

export const GYM_GALLERY = [
  {
    title: "Conditioning",
    description: "Strength circuits, speed work, and footwork — all built around boxing fundamentals.",
    image: "/img/conditioning.jpeg",
  },
  {
    title: "Pad work",
    description: "One-on-one feedback that sharpens combinations, timing, and clean mechanics.",
    image: "/img/padwork.jpeg",
  },
  {
    title: "Discipline",
    description: "Small-group structure, consistency, and expectations that carry beyond the gym.",
    image: "/img/discipline.jpeg",
  },
  {
    title: "Fight-ready",
    description: "The same work ethic that gets you fitter, sharper, and more confident every week.",
    image: "/img/fight-ready.jpeg",
  },
  {
    title: "New training area",
    description: "A new part of the gym is coming soon. Check back for the next look inside.",
    image: null,
  },
  {
    title: "Movement",
    description: "Footwork and balance drills that reinforce sharp, efficient boxing movement.",
    image: "/img/movement.jpeg",
  },
  {
    title: "Recovery",
    description: "Mobility and reset work that keeps the body in shape and the mind sharp.",
    image: "/img/recovery.jpeg",
  },
  {
    title: "Team energy",
    description: "The noise, focus, and togetherness that make training feel alive.",
    image: "/img/team-energy.jpeg",
  },
];

export const GALLERY_VIDEOS = [
  {
    title: "Conditioning block",
    description: "A fast-paced conditioning circuit built to sharpen stamina and control.",
    embedUrl: "https://www.youtube.com/embed/G2mMJSW0vDg?si=1l1i-DYf1p4r3P_3",
  },
  {
    title: "Pad work flow",
    description: "Coach-led combinations, timing drills, and precision technical feedback.",
    embedUrl: "https://www.youtube.com/embed/0v3dQ3oAC1A?si=rQ8YmM2HF0jKh0ot",
  },
  {
    title: "Gym energy",
    description: "The rhythm and atmosphere of a focused, hard-working boxing session.",
    embedUrl: "https://www.youtube.com/embed/7Lq0iJQ0P1E?si=AkU9vXBo4sT1P4fU",
  },
];

export const VIDEO_FEATURE = {
  title: "Bomber Style training session",
  description:
    "A quick snapshot of how our sessions move: warm-up, conditioning, technique, and close coaching at every step.",
  videoUrl: "/img/home-vid.mp4",
  poster: "/img/home.jpeg",
};

export const LOCATION = {
  area: "Naguru, Kampala, Uganda",
  addressLine: "Naguru Hill Road, near Naguru Community Grounds",
  hours: [
    { day: "Mon – Fri", time: "6:00 AM – 8:00 PM" },
    { day: "Saturday", time: "7:00 AM – 2:00 PM" },
    { day: "Sunday", time: "9:00 AM – 12:00 PM" },
  ],
};
