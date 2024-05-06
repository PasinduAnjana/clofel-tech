"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/img/logo/logo.svg";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import MobileNav from "./mobile-nav";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[calc(100%-1.5rem)]  md:max-w-fit fixed top-4 inset-x-0 mx-auto    bg-muted/90 backdrop-blur-md rounded-2xl  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center  justify-between space-x-4",
          className
        )}
      >
        <div>
          <a href="#top" className="logo font-alt">
            <Image
              src={Logo}
              alt="Clofel Tech"
              width={40}
              className="mr-4 w-16"
              height={40}
            />
          </a>
        </div>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            data-btn-animate="y"
            className={cn(
              "relative  hidden md:flex text-muted-foreground items-center text-xs font-medium   space-x-1 no-underline hover:no-underline hover:text-neutral-300"
            )}
          >
            <span className="block sm:hidden ">{navItem.icon}</span>
            <span className=" block text-sm no-underline">{navItem.name}</span>
          </Link>
        ))}
        <div className=" flex items-center space-x-2">
          <Button
            className=" bg-transparent rounded-xl border border-white/10"
            variant={"outline"}
          >
            Contact us
          </Button>
          <MobileNav navItems={navItems} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
