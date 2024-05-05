import NextImg from "@/public/img/tech/next.png";
import LaravelImg from "@/public/img/tech/laravel.png";
import FlutterImg from "@/public/img/tech/flutter.png";
import ReactImg from "@/public/img/tech/reactjs.png";
import NodeImg from "@/public/img/tech/nodejs.png";
import Image from "next/image";

export default function TechLogos() {
  return (
    <section className="container mb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center  leading-8 text-foreground ">
          We’re Experts in Next-Gen Technologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-8  opacity-70 w-full object-contain lg:col-span-1"
            src={ReactImg}
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-8  opacity-70 w-full object-contain lg:col-span-1"
            src={NextImg}
            alt="Reform"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-8  opacity-70 w-full object-contain lg:col-span-1"
            src={NodeImg}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-8  opacity-70 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={LaravelImg}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-8  opacity-70 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={FlutterImg}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
}
