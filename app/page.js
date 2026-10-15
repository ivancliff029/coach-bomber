import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SessionFlow from "@/components/SessionFlow";
import Programs from "@/components/Programs";
import GymGallery from "@/components/GymGallery";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import CoachCTA from "@/components/CoachCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SessionFlow />
      <Programs />
      <GymGallery />
      <VideoShowcase />
      <Testimonials />
      <CoachCTA />
      <Location />
      <Footer />
    </main>
  );
}
