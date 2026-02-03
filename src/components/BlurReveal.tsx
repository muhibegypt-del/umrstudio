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
    duration = 1,
    className = ""
}: BlurRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
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
