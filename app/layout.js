import { Anton, Work_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

export const metadata = {
  title: "Bomber Style Fitness and Boxing | Naguru, Kampala",
  description:
    "Real boxing training and full-body conditioning in Naguru, Kampala. Full body warm-up, calisthenics, boxing drills, and pad work with Coach. Today's pain is tomorrow's achievement.",
  keywords: [
    "boxing gym Kampala",
    "boxing Naguru",
    "fitness Kampala",
    "boxing training Uganda",
    "Bomber Style",
  ],
  openGraph: {
    title: "Bomber Style Fitness and Boxing",
    description:
      "Real boxing training and full-body conditioning in Naguru, Kampala.",
    locale: "en_UG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${workSans.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
