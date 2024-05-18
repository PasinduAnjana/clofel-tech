import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselPreviousButton,
  CarouselItem,
  CarouselNext,
  CarouselNumberSlider,
  CarouselPrevious,
} from "@/components/ui/carousel";

import factoryImg from "@/public/img/solutions/HO-Glass-updated-2048x1152.png";
import Image from "next/image";
import Screenshot1 from "@/public/img/solutions/glass-2.png";
export function Features() {
  return (
    <>
      <div className=" bg-white py-24 sm:py-32  px-6 lg:px-20 rounded-3xl ">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-7xl">
            <h2 className="mt-2 text-3xl font-semibold tracking-tight  leading-10 text-background sm:text-7xl">
              HappyOps guides you on your way to flexible and more efficient
              digital manufacturing operations, step by step.
            </h2>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3"></div>
          </div>
        </div>

        <Carousel className="w-full max-w-screen-2xl mx-auto      md:grid  grid-cols-12">
          <div className=" col-span-5">
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div>
                    <div>
                      <CardContent className=" aspect-square items-center  text-black justify-center p-0">
                        <Image
                          src={Screenshot1}
                          alt=""
                          width={1024}
                          height={640}
                        />
                        <h3 className="text-2xl mt-8 font-bold tracking-tight  sm:text-4xl">
                          Hot End Dashboard
                        </h3>
                        <p className="mt-4 text-lg leading-7 ">
                          A live dashboard mounted in the Hot End area displays
                          relevant data points from various parts of the line.
                          It also showcases calculated KPIs, some of which are
                          enhanced by AI, such as Efficiency, Pack-to-Melt,
                          Pack-to-Cut, and more
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className=" flex space-x-2  mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          <div className="   flex flex-col col-span-7  text-black">
            <div className=" flex w-full justify-end">
              <CarouselNumberSlider lastSlideIndex={6} />
            </div>
            <div className="relative min-h-[350px] mt-6 ">
              <CarouselPreviousButton />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
