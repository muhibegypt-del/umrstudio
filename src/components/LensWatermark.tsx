"use client";

export default function LensWatermark() {
    return (
        <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-30 pointer-events-none flex items-end justify-end mix-blend-difference text-paper">
            <div className="relative flex flex-col items-end gap-2 md:gap-3">
                {/* The Arabic (Al-Ihsan) - Sacred, Prominent */}
                <span className="font-serif text-lg md:text-2xl opacity-100 leading-none drop-shadow-lg" dir="rtl">
                    الإحسان
                </span>
                {/* The Technical Specs */}
                <div className="flex gap-2 items-center opacity-60">
                    <span className="font-mono text-[9px] uppercase tracking-widest border-t border-paper/40 pt-1">
                        UMR / REF: 26
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-800 mix-blend-hard-light" />
                </div>
            </div>
        </div>
    );
}
