"use client";
import BlurReveal from "./BlurReveal";
import Image from "next/image";

export default function ArchitectureOfLegacy() {
    return (
        <section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center gap-16 md:gap-24">

            {/* Arabic Pillar — Hidden on mobile to prevent overlap */}
            <div className="absolute right-4 md:right-8 top-0 bottom-0 w-[60px] md:w-[100px] hidden md:flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-[80%] max-h-[800px]">
                    <Image
                        src="/images/arabic-pillar.png"
                        alt="Arabic Calligraphy"
                        fill
                        className="object-contain opacity-90 mix-blend-multiply"
                    />
                </div>
            </div>

            {/* Identity — What UMR Studios Is */}
            <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center">
                <BlurReveal>
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood mb-6 block opacity-80">
                        Who We Are
                    </span>
                </BlurReveal>

                <BlurReveal delay={0.1}>
                    <h2 className="font-garamond italic text-3xl md:text-5xl lg:text-6xl leading-snug md:leading-tight text-ink/90">
                        We produce Islamic media that honours the tradition and speaks to the modern world.
                    </h2>
                </BlurReveal>

                <BlurReveal delay={0.2}>
                    <p className="mt-8 font-display text-sm md:text-base leading-loose opacity-60 max-w-xl mx-auto">
                        UMR Studios takes the weight of traditional scholarship and translates it into the language of the modern age — documentaries, podcasts, lectures, and films crafted with excellence.
                    </p>
                </BlurReveal>
            </div>

            {/* The Standard */}
            <div className="w-full max-w-2xl px-6 flex flex-col items-center text-center">
                <BlurReveal>
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood mb-6 block opacity-80">
                        The Standard
                    </span>
                </BlurReveal>

                <BlurReveal delay={0.1}>
                    <p className="font-garamond italic text-2xl md:text-4xl leading-snug text-ink/90">
                        &ldquo;Ihsan is not a luxury. It is a debt.&rdquo;
                    </p>
                </BlurReveal>

                <BlurReveal delay={0.2}>
                    <div className="mt-6 font-display text-sm md:text-base leading-loose opacity-60 max-w-md mx-auto">
                        <p>We do not change the message. We sharpen the vessel.</p>
                    </div>
                </BlurReveal>
            </div>

            {/* Dedication */}
            <div className="w-full max-w-2xl px-6 flex flex-col items-center text-center">
                <BlurReveal delay={0.1}>
                    <div className="font-mono text-[10px] uppercase tracking-widest space-y-2 opacity-50">
                        <p>For the preservation of the Deen.</p>
                        <p>For the generations to come.</p>
                        <p className="text-oxblood opacity-100">For Latif.</p>
                    </div>
                </BlurReveal>
            </div>

            {/* Subtle center line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-ink/5 to-transparent -z-10" />

        </section>
    );
}
