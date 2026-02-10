"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurRevealProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export default function BlurReveal({
    children,
    delay = 0,
    duration = 0.6,
    className = ""
}: BlurRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-5% 0px -5% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: "blur(5px)", y: 6 }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
