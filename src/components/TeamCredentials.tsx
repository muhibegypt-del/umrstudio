"use client";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

const metrics = [
    { label: "Years in Production", value: "10+" },
    { label: "Views Generated", value: "500M+" },
    { label: "Campaigns Raised", value: "£500k+" },
];

export default function TeamCredentials() {
    return (
        <section className="py-24 md:py-32 w-full bg-paper text-ink relative overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">

                {/* Heading Block */}
                <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
                    <BlurReveal>
                        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-oxblood mb-6 block">The Team</span>
                    </BlurReveal>
                    <BlurReveal delay={0.1}>
                        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8">
                            We aren&apos;t starting from zero.
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.2}>
                        <p className="font-garamond text-lg md:text-xl leading-relaxed opacity-80 max-w-md">
                            We&apos;ve spent a decade in media production at the highest level.
                            Creating content for major brands, global athletes, and charitable causes.
                            Now we&apos;re turning those skills toward the deen.
                        </p>
                    </BlurReveal>
                </div>

                {/* Vertical Divider (Hidden on mobile) */}
                <div className="hidden md:block col-span-1 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-ink/10" />
                </div>

                {/* Metrics Grid */}
                <div className="col-span-1 md:col-span-6 flex flex-col justify-center gap-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {metrics.map((metric, i) => (
                            <BlurReveal key={i} delay={0.3 + (i * 0.1)}>
                                <div className="flex flex-col gap-2">
                                    <span className="font-display text-4xl md:text-5xl text-oxblood">{metric.value}</span>
                                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50">{metric.label}</span>
                                </div>
                            </BlurReveal>
                        ))}
                    </div>

                    <BlurReveal delay={0.6}>
                        <div className="p-6 border border-ink/10 bg-ink/5 mt-4">
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-40 mb-4 block">Proven Track Record</span>
                            <ul className="flex flex-col gap-3 font-garamond italic text-lg opacity-80">
                                <li>— Content created at Harvard & Yale</li>
                                <li>— Collaborated with Anthony Joshua & Under Armour</li>
                                <li>— Helped organizations build their digital presence</li>
                            </ul>
                        </div>
                    </BlurReveal>
                </div>
            </div>
        </section>
    );
}
