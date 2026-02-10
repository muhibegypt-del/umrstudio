"use client";
import BlurReveal from "./BlurReveal";

export default function MissionStatement() {
    return (
        <section className="relative w-full py-16 md:py-28">
            {/* Section Label */}
            <BlurReveal>
                <div className="border-b border-ink/10 pb-4 mb-12 md:mb-16 flex justify-between items-end px-1">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">
                        The Team
                    </span>
                    <span className="font-mono text-[9px] opacity-20">
                        Credibility
                    </span>
                </div>
            </BlurReveal>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

                {/* Left Column — The Expertise */}
                <div className="md:col-start-1 md:col-span-5">
                    <BlurReveal>
                        <h2 className="font-display text-2xl md:text-3xl leading-tight text-ink mb-6">
                            We've Done This Before. Now We're Doing It for the Deen.
                        </h2>
                    </BlurReveal>

                    <BlurReveal delay={0.1}>
                        <p className="font-display text-sm md:text-base leading-loose opacity-60 max-w-md mb-6">
                            Our team has spent over a decade in professional media and content creation. We've generated hundreds of millions of views and helped individuals and organisations build their presence at the highest level.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.2}>
                        <div className="pl-4 border-l border-ink/20">
                            <p className="font-garamond italic text-lg leading-relaxed opacity-80">
                                We've been blessed to learn from and work alongside scholars. We know what our community needs because we need it too.
                            </p>
                        </div>
                    </BlurReveal>
                </div>

                {/* Right Column — The Track Record */}
                <div className="md:col-start-7 md:col-span-5">
                    <BlurReveal delay={0.1}>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E0D25] mb-6 block opacity-80">
                            The Credentials
                        </span>
                    </BlurReveal>

                    <div className="flex flex-col gap-4">
                        {[
                            "Content produced at Harvard and Yale",
                            "Collaborated with Anthony Joshua & Under Armour",
                            "Campaigns that raised over £500,000 for charity",
                            "Hundreds of millions of views across platforms",
                            "10+ years in professional content creation"
                        ].map((item, i) => (
                            <BlurReveal key={i} delay={0.2 + (i * 0.05)}>
                                <div className="flex items-baseline gap-3">
                                    <span className="w-1 h-1 rounded-full bg-ink/40 flex-shrink-0" />
                                    <p className="font-display text-sm md:text-base opacity-70">
                                        {item}
                                    </p>
                                </div>
                            </BlurReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle center line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-ink/5 to-transparent -z-10" />
        </section>
    );
}
