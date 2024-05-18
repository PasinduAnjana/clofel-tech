import RevealText from "@/components/home/reveal-animation";
import { Button } from "@/components/ui/button";
import HeroImg from "@/public/img/solutions/Hero_Glas-Manufacturing.webp";
import Image from "next/image";
export default function Stats() {
  return (
    <RevealText className="relative mt-12 isolate overflow-hidden min-h-[95vh] ">
      <Image
        src={HeroImg}
        alt=""
        className="absolute rounded-xl inset-0 -z-10 h-full w-full object-cover"
      />
      <div className=" absolute w-full bg-background/50 h-full"> </div>
      <div className=" absolute  bg-background/80 backdrop-blur-xl  rounded-3xl bottom-6 left-6 max-w-[55.8125rem] px-6 lg:px-8">
        <div className="mx-auto max-w-none lg:mx-0 lg:max-w-3xl  py-8 px-4">
          <h2 className="text-xl   leading-8  text-foreground">
            Your step-by-step transition to a data and AI-driven
          </h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight  text-foreground sm:text-6xl">
            Glass Factory
          </p>

          <p className="mt-8 text-lg leading-8 max-w-[32rem] text-muted-foreground">
            HappyOps supports glass makers to evolve into digital factories,
            improving Pack-to-Melt and worker productivity, reducing setup
            times, error rates, and scrap.
          </p>
          <Button className=" mt-8">Contact us</Button>
        </div>
      </div>
    </RevealText>
  );
}
