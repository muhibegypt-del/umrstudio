import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import ArchitectureOfLegacy from "@/components/ArchitectureOfLegacy";
import WorksIndex from "@/components/WorksIndex";
import LegacyOrigin from "@/components/LegacyOrigin";
import AscensionGrid from "@/components/AscensionGrid";
import VisualInterlude from "@/components/VisualInterlude";
import HankoSeal from "@/components/HankoSeal";
import CyclesGallery from "@/components/CyclesGallery";
import SectionExhale from "@/components/SectionExhale";


export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Navigation />
      <Preloader />

      <AscensionGrid>
        <Hero />

        <SectionExhale figure="§ I" />

        <ArchitectureOfLegacy />

        <SectionExhale figure="§ II" />

        <VisualInterlude />

        <SectionExhale figure="§ III" />

        <WorksIndex />

        <SectionExhale figure="§ IV" />

        <CyclesGallery />

        <SectionExhale figure="§ V" />

        <LegacyOrigin />
      </AscensionGrid>

      {/* Footer */}
      <footer className="py-2 border-t border-ink/5 mt-0">
        <HankoSeal />
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-6 py-4">
          <div className="hidden md:block md:col-span-1" />
          <div className="col-span-4 md:col-span-11 w-full flex justify-between items-end">
            <div>
              <p className="font-display text-lg">UMR STUDIOS</p>
              <p className="font-mono text-[10px] mt-2 tracking-widest uppercase">Manchester • 2026</p>
            </div>
            <div className="font-mono text-[10px] opacity-40">
              THE INK OF THE SCHOLAR
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
