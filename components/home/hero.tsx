import { Button } from "../ui/button";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  return (
    <section className="container  min-h-screen px-6 flex items-center justify-center  lg:px-8">
      {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f2ff80] to-[#adfc89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      <div className=" py-12 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-brand-500 flex flex-col  sm:text-8xl">
            <span className=" text-brand-600">We build custom</span>
            <span className=" text-brand-800"> Software solutions </span>
            for Enterprises
          </h1>
          <p className="mt-6 text-xl leading-8 max-w-4xl mx-auto  text-secondary-foreground/90">
            Specialize in crafting cutting-edge technology solutions that
            redefine possibilities. Join us on a journey of innovation,
            excellence, and limitless opportunities!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>Free Consultation</Button>
            <Button variant={"ghost"}>Discover now</Button>
          </div>
        </div>
      </div>
      {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#eeff80] to-[#e9fc89] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
    </section>
  );
}
