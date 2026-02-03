"use client";
import { motion } from "framer-motion";

export default function HankoSeal() {
    // "UMR" stylized or a geometric seal representation
    // Oxblood Red: #800020 roughly, or a deep cinnabar. Let's use a custom hex.
    const OXBLOOD = "#6E0D25";

    return (
        <div className="flex flex-col items-center justify-center gap-4 py-2">
            <motion.div
                initial={{ scale: 1.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-16 h-16 border-2 border-[#6E0D25] rounded-sm flex items-center justify-center mix-blend-multiply"
            >
                {/* The Seal Content: UMR (Stylized Kanji-esque) */}
                <div className="grid grid-cols-2 gap-1 p-2 w-full h-full">
                    <div className="bg-[#6E0D25] w-full h-full rounded-[1px]" />
                    <div className="border border-[#6E0D25] w-full h-full rounded-[1px]" />
                    <div className="border border-[#6E0D25] w-full h-full rounded-[1px]" />
                    <div className="bg-[#6E0D25] w-full h-full rounded-[1px]" />
                </div>
            </motion.div>
            <span className="font-mono text-[9px] tracking-widest text-[#6E0D25] uppercase opacity-60">
                Seal of Quality
            </span>
        </div>
    );
}
