import Tags from "@/components/Tags";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Key from "@/components/Key";

import Avatar from "@/components/Avatar";
import Image from "next/image";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tags>Features</Tags>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    {/* first Feature */}

                    <FeatureCard
                        title="Real time collaboration"
                        description="Work together samelessly with conflict-free team
                                editing"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className=" inline-flex size-1.5 rounded-full bg-white "
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    {/* second Feature */}
                    <FeatureCard
                        title="Interective Prototyping"
                        description="Engage your client with prototypes that react to
                                users actions"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We've achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    {/* Third Feature */}
                    <FeatureCard
                        title="Keyboard quick actions"
                        description="Powerful commands to help you create designs
                                more quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">Shift</Key>
                            <Key>Alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center ">
                    {features.map((feature) => {
                        return (
                            <div
                                key={feature}
                                className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl items-center gap-3"
                            >
                                <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">
                                    &#10038;
                                </span>
                                <span className="font-medium md:text-lg">
                                    {feature}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
