"use client";

import { motion } from "framer-motion";
export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="overflow-x-clip p-4 flex">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-16 text-7xl md:text-8xl font-medium"
                    >
                        {Array.from({ length: 10 }).map((_, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-16"
                                >
                                    <span className="text-lime-400 text-7xl">
                                        &#10038;
                                    </span>
                                    <span>Try it for free</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
