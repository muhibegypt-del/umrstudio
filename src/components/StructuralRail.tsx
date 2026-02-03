"use client";

export default function StructuralRail() {
    return (
        <div className="fixed left-0 top-0 h-full w-[80px] md:w-[100px] z-50 flex flex-col items-center pointer-events-none">
            {/* The Line */}
            <div className="absolute right-0 top-0 h-full w-[1px] bg-ink/10" />

            {/* Bottom Anchor Kanji (Text-based) */}
            <div className="mt-auto mb-12 flex flex-col gap-6 items-center">
                <span
                    className="font-kanji text-5xl md:text-7xl font-black text-ink/90 select-none"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    光
                </span>
                <div className="w-[1px] h-16 bg-ink/30" />
                <span className="font-mono text-[8px] uppercase text-ink/50 font-medium tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                    Est. 2026
                </span>
            </div>
        </div>
    );
}
