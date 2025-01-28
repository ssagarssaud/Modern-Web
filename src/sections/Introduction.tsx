"use client";
import { useScroll } from "framer-motion";

import Tags from "@/components/Tags";
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20">
                    <div className="flex justify-center">
                        <Tags>Introducing the layers</Tags>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserve better.</span>{" "}
                        <span className="text-white/15 ">{text}</span>
                        <span className="text-lime-400 block">
                            That's why we built layers
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]"></div>
            </div>
        </section>
    );
}
