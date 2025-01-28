import Button from "@/components/Button";
import designExampleImage1 from "@/assets/images/design-example-1.png";
import designExampleImage2 from "@/assets/images/design-example-2.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden ">
                    <Image src={designExampleImage1} alt="Design Example 1" />
                </div>
                <div className="absolute -right-64 top -16 hidden ">
                    <Image src={designExampleImage2} alt="Design Example 2" />
                </div>
                <div className="flex justify-center ">
                    <div className="inline-flex py-1 px-3 rounded-full font-semibold text-neutral-950 bg-gradient-to-r from-purple-400 to-pink-400">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impaceful design, created effortlessly
                </h1>
                <p className="text-center mx-auto text-xl text-white/50 mt-8 max-w-2xl">
                    Design tools shouldn't slow you down. Layers combine
                    powerful features with intuitive interface that keeps you in
                    your creative flow.
                </p>
                <form className="flex  border border-white/15 rounded-full p-2  mt-8 mx-auto max-w-lg">
                    <input
                        className="bg-transparent md:px-3 md:flex-1 border-none outline-none"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className="whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
