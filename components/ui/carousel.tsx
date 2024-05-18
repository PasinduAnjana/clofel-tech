"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import factoryImg from "@/public/img/solutions/HO-Glass-updated-2048x1152.png";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  curruntSlideIndex: number;
} & CarouselProps;

interface PointerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  slideIndex: number;
  position: string;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,

      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [curruntSlideIndex, setcurruntSlideIndex] = React.useState(0);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
      setcurruntSlideIndex(api?.selectedScrollSnap() || 0);
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
      setcurruntSlideIndex(api?.selectedScrollSnap() || 0);
    }, [api]);

    const scrollTo = React.useCallback(
      (index: number) => {
        api?.scrollTo(index);
        setcurruntSlideIndex(api?.selectedScrollSnap() || 0);
      },
      [api]
    );

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          curruntSlideIndex,
          scrollTo,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev, api } = useCarousel();
  console.log();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? ""
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselPreviousButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev, api, curruntSlideIndex } =
    useCarousel();

  return (
    <div className=" h-full absolute  flex flex-row justify-center items-center">
      <div className="  flex-1 inset-0 h-full absolute left-0 top-0 w-full  z-20">
        <CarouselPointerButton
          position="left-[12.2%] top-[30.73%]"
          slideIndex={1}
        />
        <CarouselPointerButton
          position="left-[53.2%] top-[46%]"
          slideIndex={2}
        />
        <CarouselPointerButton
          position="left-[30.2%] top-[36%]"
          slideIndex={3}
        />
        <CarouselPointerButton
          position="left-[65.2%] top-[25%]"
          slideIndex={4}
        />
        <CarouselPointerButton
          position="left-[63.2%] top-[61%]"
          slideIndex={5}
        />
        <CarouselPointerButton
          position="left-[78.2%] top-[40%]"
          slideIndex={6}
        />
      </div>

      <Image src={factoryImg} alt="" width={1024} height={576} />
    </div>
  );
});
CarouselPreviousButton.displayName = "CarouselPreviousButton";

const CarouselPointerButton = React.forwardRef<
  HTMLButtonElement,
  PointerButtonProps
>(
  (
    {
      className,
      slideIndex,
      position,
      variant = "outline",
      size = "icon",
      ...props
    },
    ref
  ) => {
    const { api, curruntSlideIndex, scrollTo } = useCarousel();
    const index = slideIndex - 1;
    return (
      <div className={`absolute  ${position}`}>
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn(
            "  size-10 text-md rounded-full    font-semibold   duration-300  ease-linear bg-transparent",
            curruntSlideIndex === index ? " text-foreground bg-background" : "",
            className
          )}
          onClick={() => scrollTo(index)}
          {...props}
        >
          0{slideIndex}
        </Button>
      </div>
    );
  }
);
CarouselPointerButton.displayName = "CarouselPointerButton";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, api, canScrollNext } = useCarousel();
  // console.log(api?.selectedScrollSnap());
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? ""
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselNumberSlider = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { curruntSlideIndex } = useCarousel();
  // console.log(api?.selectedScrollSnap());
  return (
    <div className=" flex py-3 px-8 font-semibold bg-muted/10 rounded-full">
      <div>0{curruntSlideIndex}</div>
      <span className=" h-0.5 m-[.6875rem] w-[4.125rem] rounded-full bg-background/50"></span>
      <span>06</span>
    </div>
  );
});
CarouselNumberSlider.displayName = "CarouselNumberSlider";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPreviousButton,
  CarouselNumberSlider,
};
