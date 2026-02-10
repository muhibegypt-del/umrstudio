"use client";
import React from "react";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import WorksIndex from "@/components/WorksIndex";
import LegacyOrigin from "@/components/LegacyOrigin";
import AscensionGrid from "@/components/AscensionGrid";
import HankoSeal from "@/components/HankoSeal";
import SectionExhale from "@/components/SectionExhale";
import VisualInterlude from "@/components/VisualInterlude"; // Restoring Art
import IhsanQuote from "@/components/IhsanQuote"; // Restoring Art
import MissionStatement from "@/components/MissionStatement";
import HowItWorks from "@/components/HowItWorks";
import TheProblem from "@/components/TheProblem";


export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Preloader />

      <AscensionGrid>
        <Hero />

        <SectionExhale figure="§ I" />

        {/* NEW: The Problem (Section II) */}
        <TheProblem />

        <SectionExhale figure="§ II" />

        {/* The Team / The Guide (Section III) */}
        <MissionStatement />

        {/* ART RESTORED: The Zen Garden / Visual Break */}
        <VisualInterlude />

        <SectionExhale figure="§ III" />

        {/* The Plan / Works (Section IV) */}
        <WorksIndex />

        <SectionExhale figure="§ IV" />

        {/* The Stakes / Legacy (Section V) */}
        <LegacyOrigin />

        {/* ART RESTORED: The Ihsan Quote */}
        {/* Full-bleed dramatic break before the Ask */}
      </AscensionGrid>

      <IhsanQuote
        quote="Ihsan is to worship Allah as though you see Him, and if you cannot see Him, then indeed He sees you."
        attribution="Hadith Jibril"
        reference="Sahih Muslim"
      />

      <AscensionGrid>
        <SectionExhale figure="§ V" />

        {/* The Ask / Support (Section VI) */}
        <HowItWorks />

      </AscensionGrid>

      {/* Footer */}
      <footer className="py-2 border-t border-ink/5 mt-0">
        <HankoSeal />
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-6 py-4">
          <div className="hidden md:block md:col-span-1" />
          <div className="col-span-4 md:col-span-11 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <p className="font-display text-lg">UMR STUDIOS</p>
              <p className="font-mono text-[10px] mt-2 tracking-widest uppercase">Manchester • 2026</p>
              <p className="font-garamond italic text-xs mt-1 opacity-40">Islamic Media Production for the Ummah</p>
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
