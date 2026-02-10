"use client";
import BlurReveal from "./BlurReveal";

export default function TheWhy() {
    return (
        <section className="py-32 md:py-48 w-full bg-ink text-paper relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <BlurReveal>
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-oxblood mb-8 block">
                        The Why
                    </span>
                </BlurReveal>

                <BlurReveal delay={0.2}>
                    <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-12">
                        &ldquo;Time is short. After the passing of my brother Latif, I realized the weight of the clock. This studio is not a business; it is a legacy project.&rdquo;
                    </blockquote>
                </BlurReveal>

                <BlurReveal delay={0.4}>
                    <p className="font-garamond italic text-lg md:text-xl leading-relaxed opacity-60 max-w-2xl mx-auto mb-16">
                        A vessel to leave behind good work for generations to come.
                        For the preservation of the deen. For Latif.
                    </p>
                </BlurReveal>

                <BlurReveal delay={0.6}>
                    <div className="flex flex-col items-center gap-4 opacity-40">
                        <div className="w-[1px] h-12 bg-paper/30" />
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase">
                            Ihsan is not a luxury. It is a debt.
                        </span>
                    </div>
                </BlurReveal>
            </div>
        </section>
    );
}
