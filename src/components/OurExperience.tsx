"use client";
import BlurReveal from "./BlurReveal";

export default function OurExperience() {
    return (
        <section className="relative w-full py-16 md:py-28">
            {/* Section Label */}
            <BlurReveal>
                <div className="border-b border-ink/10 pb-4 mb-12 md:mb-16 flex justify-between items-end px-1">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">
                        The Foundation
                    </span>
                    <span className="font-mono text-[9px] opacity-20">
                        Experience & Conviction
                    </span>
                </div>
            </BlurReveal>

            {/* Asymmetric Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">

                {/* Our Experience — Left offset */}
                <div className="md:col-start-1 md:col-span-5">
                    <BlurReveal>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E0D25] mb-6 block opacity-80">
                            Our Experience
                        </span>
                    </BlurReveal>

                    <div className="border-l border-ink/20 pl-6 flex flex-col gap-5">
                        <BlurReveal delay={0.1}>
                            <p className="font-display text-sm md:text-base leading-loose opacity-60">
                                Our team has been working in social media and content creation for over a decade, generating hundreds of millions of views and helping individuals and organizations build their online presence.
                            </p>
                        </BlurReveal>

                        <BlurReveal delay={0.2}>
                            <p className="font-display text-sm md:text-base leading-loose opacity-60">
                                We&apos;ve created content at institutions like Harvard and Yale, collaborated with notable figures including Anthony Joshua and brands like Under Armour, and produced campaigns that raised over half a million pounds for charitable causes.
                            </p>
                        </BlurReveal>

                        <BlurReveal delay={0.3}>
                            <p className="font-garamond italic text-lg md:text-xl leading-relaxed text-ink/80">
                                Now we&apos;re applying these skills to elevate the voices of scholars who deserve wider platforms—because our community needs access to their knowledge and wisdom.
                            </p>
                        </BlurReveal>
                    </div>
                </div>

                {/* Why This Matters — Right offset, pushed down */}
                <div className="md:col-start-7 md:col-span-5 md:mt-20">
                    <BlurReveal delay={0.15}>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E0D25] mb-6 block opacity-80">
                            Why This Matters to Us
                        </span>
                    </BlurReveal>

                    <BlurReveal delay={0.25}>
                        <p className="font-garamond italic text-xl md:text-2xl leading-relaxed text-ink/90 mb-6">
                            We share the same desire for deeper, more meaningful Islamic content.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.35}>
                        <p className="font-display text-sm md:text-base leading-loose opacity-60">
                            We&apos;ve been blessed to learn from and work alongside scholars and sheikhs, and we believe it&apos;s time to bring their teachings to a broader audience through professional, engaging media that showcases the depth and beauty of Islam.
                        </p>
                    </BlurReveal>
                </div>
            </div>

        </section>
    );
}
