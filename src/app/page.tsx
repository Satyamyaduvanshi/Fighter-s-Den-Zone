import { HeroSection } from "@/components/HeroSection";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { VideoWelcome } from "@/components/VideoWelcome";
import { Timetable } from "@/components/Timetable";
import { FaqAndStats } from "@/components/FaqAndStats";
import { TestimonialsMap } from "@/components/TestimonialsMap";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProgramsGrid />
      <VideoWelcome />
      <Timetable />
      <FaqAndStats />
      <TestimonialsMap />
    </main>
  );
}