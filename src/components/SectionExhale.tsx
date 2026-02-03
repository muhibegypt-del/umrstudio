"use client";
import { motion } from "framer-motion";

interface SectionExhaleProps {
    figure: string;
}

export default function SectionExhale({ figure }: SectionExhaleProps) {
    return (
        <motion.div
            className="h-[150px] md:h-[200px] flex items-end justify-center pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-15">
                {figure}
            </span>
        </motion.div>
    );
}
