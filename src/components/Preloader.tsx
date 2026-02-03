"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        // Lock scroll during preloader
        document.body.style.overflow = "hidden";

        // Total duration ~3.5s
        const timer = setTimeout(() => {
            setComplete(true);
            document.body.style.overflow = "";
        }, 3500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-paper pointer-events-none"
                >
                    <div className="font-display text-4xl overflow-hidden flex gap-1">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            U
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        >
                            M
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                        >
                            R
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                            className="ml-2 font-mono text-xs self-end mb-1 opacity-60"
                        >
                            STUDIOS
                        </motion.span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.2 }}
                        className="absolute bottom-12 font-serif text-sm opacity-40 italic"
                    >
                        In the name of God, the Most Gracious, the Most Merciful.
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
