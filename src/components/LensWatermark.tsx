"use client";
import { motion } from "framer-motion";

export default function LensWatermark() {
    return (
        <div className="fixed right-6 bottom-6 z-30 pointer-events-none flex items-end justify-end mix-blend-difference text-paper">
            <motion.div
                className="relative flex flex-col items-end gap-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center center" }}
            >
                {/* The Arabic (Al-Ihsan) - Sacred, Prominent */}
                <span className="font-serif text-2xl opacity-100 leading-none drop-shadow-lg" dir="rtl">
                    الإحسان
                </span>
                {/* The Technical Specs */}
                <div className="flex gap-2 items-center opacity-60">
                    <span className="font-mono text-[9px] uppercase tracking-widest border-t border-paper/40 pt-1">
                        UMR / REF: 26
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-800 mix-blend-hard-light" />
                </div>
            </motion.div>
        </div>
    );
}
