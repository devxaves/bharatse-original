"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "./waitlist-form";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-24"
      style={{
        height: "100vh",
        backgroundImage: "url('./bg-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark blurry overlay */}
      <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-sm"></div>

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)",
        }}
      ></div>

      {/* Main Content */}
      <div className="container relative z-40 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/20 text-white">
            Hire LOCAL, Sell LOCAL 🚀
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            <span className="flex justify-center items-center mt-5 -mb-6">
              <img src="./BharatSe-White.png" alt="Logo" width="500" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Get the Job Done!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-600 hover:bg-orange-100 rounded-full px-8"
              onClick={openWaitlist}
            >
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Waitlist Form Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </section>
  );
}
