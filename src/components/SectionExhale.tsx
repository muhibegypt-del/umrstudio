"use client";
import { motion } from "framer-motion";

interface SectionExhaleProps {
    figure: string;
}

export default function SectionExhale({ figure }: SectionExhaleProps) {
    return (
        <motion.div
            className="h-[60px] md:h-[80px] flex items-end justify-center pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-15">
                {figure}
            </span>
        </motion.div>
    );
}
