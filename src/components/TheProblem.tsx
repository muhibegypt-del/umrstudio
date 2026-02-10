"use client";
import BlurReveal from "./BlurReveal";

export default function TheProblem() {
    return (
        <section className="relative w-full py-16 md:py-28 bg-paper text-ink">
            {/* Section Label */}
            <BlurReveal>
                <div className="border-b border-ink/10 pb-4 mb-12 md:mb-16 flex justify-between items-end px-1">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">
                        The Gap
                    </span>
                    <span className="font-mono text-[9px] opacity-20">
                        Current State
                    </span>
                </div>
            </BlurReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                {/* Heading */}
                <div className="md:col-start-1 md:col-span-5">
                    <BlurReveal>
                        <h2 className="font-display text-3xl md:text-5xl leading-tight text-ink mb-6">
                            Something Is Missing.
                        </h2>
                    </BlurReveal>

                    <BlurReveal delay={0.1}>
                        <p className="font-garamond italic text-xl md:text-2xl leading-relaxed text-ink/80">
                            You already feel it.
                        </p>
                    </BlurReveal>
                </div>

                {/* Body Text */}
                <div className="md:col-start-7 md:col-span-6 flex flex-col gap-6">
                    <BlurReveal delay={0.2}>
                        <p className="font-display text-sm md:text-base leading-loose opacity-70">
                            You open YouTube looking for a lecture that goes deeper than surface-level advice — and you scroll past hundreds of videos that leave you with more questions than answers.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.3}>
                        <p className="font-display text-sm md:text-base leading-loose opacity-70">
                            Meanwhile, mainstream media tells stories about us without us.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.4}>
                        <p className="font-display text-sm md:text-base leading-loose opacity-70">
                            Podcasts, lectures, YouTube, social media — these are the most powerful forces shaping hearts and minds today. And right now, the scholars who carry real knowledge don't have the platforms to match.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.5}>
                        <div className="mt-4 pl-6 border-l-2 border-[#6E0D25]/30">
                            <p className="font-garamond italic text-lg leading-relaxed text-ink/90">
                                That's the gap. We're here to close it.
                            </p>
                        </div>
                    </BlurReveal>
                </div>
            </div>
        </section>
    );
}
