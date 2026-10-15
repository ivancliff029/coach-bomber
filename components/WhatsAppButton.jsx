"use client";

import { WHATSAPP_LINK } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK("Hi Coach, I have a question about Bomber Style.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Coach on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/40 hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" fill="#15120F" className="w-7 h-7" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.36.66 4.56 1.8 6.44L4 29l7.76-1.75A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.62 28 15S22.64 3 16.02 3Zm0 21.7c-2.02 0-3.9-.58-5.48-1.58l-.39-.24-4.6 1.04 1.06-4.48-.26-.4A9.6 9.6 0 0 1 6.3 15c0-5.36 4.36-9.7 9.72-9.7 5.35 0 9.7 4.34 9.7 9.7 0 5.35-4.35 9.7-9.7 9.7Zm5.33-7.27c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34Z" />
      </svg>
    </a>
  );
}
