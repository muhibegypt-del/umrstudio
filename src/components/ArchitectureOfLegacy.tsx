"use client";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import Image from "next/image";

export default function ArchitectureOfLegacy() {
    return (
        <section className="relative w-full py-32 md:py-64 flex flex-col items-center justify-center gap-32 md:gap-48">

            {/* Arabic Pillar - Positioned alongside Acts */}
            <div className="absolute right-4 md:right-8 top-0 bottom-0 w-[60px] md:w-[100px] flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-[80%] max-h-[800px]">
                    <Image
                        src="/images/arabic-pillar.png"
                        alt="Arabic Calligraphy"
                        fill
                        className="object-contain opacity-90 mix-blend-multiply"
                    />
                </div>
            </div>

            {/* ACT I: THE VOID */}
            <div className="w-full max-w-2xl px-6 flex flex-col items-center text-center">
                <BlurReveal>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-oxblood mb-8 block opacity-80">
                        Act I — The Signal
                    </span>
                </BlurReveal>

                <BlurReveal delay={0.2} duration={1.5}>
                    <p className="font-garamond italic text-3xl md:text-5xl leading-snug text-ink/90">
                        "We are losing the signal. The inheritors of the Prophets speak, but their voices are buried in static."
                    </p>
                </BlurReveal>

                <BlurReveal delay={0.4} duration={1.5}>
                    <p className="mt-8 font-display text-sm md:text-base leading-loose opacity-60 max-w-md mx-auto">
                        In an age where the war for the human soul is fought through the eye, we cannot afford to be invisible. If we do not consume at the level of the battles waged against us, we surrender the heart.
                    </p>
                </BlurReveal>
            </div>

            {/* ACT II: THE BRIDGE */}
            <div className="w-full max-w-2xl px-6 flex flex-col items-center text-center">
                <BlurReveal>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-oxblood mb-8 block opacity-80">
                        Act II — The Bridge
                    </span>
                </BlurReveal>

                <BlurReveal delay={0.2} duration={1.5}>
                    <p className="font-garamond italic text-3xl md:text-5xl leading-snug text-ink/90">
                        "Ihsan is not a luxury. It is a debt."
                    </p>
                </BlurReveal>

                <BlurReveal delay={0.4} duration={1.5}>
                    <div className="mt-8 font-display text-sm md:text-base leading-loose opacity-60 max-w-md mx-auto space-y-4">
                        <p>
                            UMR Studios exists to pay that debt. We take the weight of traditional scholarship and translate it into the language of the modern age: Aesthetics. Clarity. Excellence.
                        </p>
                        <p className="text-ink opacity-100">
                            We do not change the message. We sharpen the vessel.
                        </p>
                    </div>
                </BlurReveal>
            </div>

            {/* ACT III: THE OATH */}
            <div className="w-full max-w-2xl px-6 flex flex-col items-center text-center">
                <BlurReveal>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-oxblood mb-8 block opacity-80">
                        Act III — The Oath
                    </span>
                </BlurReveal>

                <BlurReveal delay={0.2} duration={1.5}>
                    <div className="font-garamond italic text-3xl md:text-5xl leading-snug text-ink/90">
                        <p className="mb-4">This house was built on the realization of time.</p>
                    </div>
                </BlurReveal>

                <BlurReveal delay={0.4} duration={1.5}>
                    <div className="mt-12 font-mono text-[10px] uppercase tracking-widest space-y-2 opacity-50">
                        <p>For the preservation of the Deen.</p>
                        <p>For the generations to come.</p>
                        <p className="text-oxblood opacity-100">For Latif.</p>
                    </div>
                </BlurReveal>
            </div>

            {/* The Vertical Line Connecting Them (Subtle) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-ink/5 to-transparent -z-10" />

        </section>
    );
}
