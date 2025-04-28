"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
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

  const openWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-orange-50 px-4 sm:px-6 py-24 pt-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-orange-100 blur-[120px] opacity-60 animate-blob"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-green-100 blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[120px] opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(255,126,0,0.1), transparent 40%)",
        }}
      ></div>

      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-orange-100 text-orange-700">
            Hire LOCAL, Sell LOCAL 🚀
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            <span className="flex justify-center items-center mt-5 -mb-6">
              <img src="./logo-w.png" alt="" width="500" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Get the Job Done!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
              HIRE Local <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8"
            >
              SELL Local <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8"
              onClick={openWaitlist}
            >
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
    
  
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="relative mt-16 mx-auto max-w-2xl"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-green-600/20 mix-blend-multiply"></div>
            <img
              src="/banner.jpeg?height=300&width=1000"
              alt="BharatSe Platform"
              className="w-full h-auto"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-3 px-6 shadow-lg flex items-center gap-3 max-w h-auto">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
            <span className="font-medium text-left">
              Best Hyperlocal Services!
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 transform -translate-x-1/2 animate-bounce flex justify-center items-start">
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-gray-400 rounded-full "
          />
        </div>
      </div>

      {/* Waitlist Form Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </section>
  );
}
