"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateY: 20 },
        visible: { opacity: 1, translateY: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default RevealText;
