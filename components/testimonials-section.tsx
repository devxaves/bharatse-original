"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "I found an amazing interior designer through BharatSe. The platform made it so easy to compare portfolios and prices. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Small Business Owner",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As a cafe owner, I needed a graphic designer for my menu and branding. BharatSe connected me with a talented local designer who understood my vision perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Freelance Photographer",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Being listed on BharatSe has transformed my photography business. I've gained so many new clients in my neighborhood that I never would have reached otherwise.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Event Planner",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "BharatSe helped me find local vendors for my events. The quality of service and reliability has been exceptional. My clients are always impressed!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextTestimonial();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative flex items-center py-24 overflow-hidden bg-gradient-to-b from-white to-orange-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-orange-200 mix-blend-multiply blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-green-200 mix-blend-multiply blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        ref={containerRef}
        className="container relative z-10 mx-auto px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-orange-100 text-orange-700">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-orange-600">Users</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from customers and professionals who have experienced the
            BharatSe difference.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute -top-12 -left-12 text-orange-200 opacity-30">
            <Quote size={120} />
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 opacity-50"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-center relative z-10"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Avatar className="h-24 w-24 border-4 border-orange-100 ring-2 ring-orange-300 ring-offset-2">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex mb-2"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      )
                    )}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 mb-4 italic"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <h4 className="text-lg font-bold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full h-10 w-10 border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full h-10 w-10 border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-orange-600" : "bg-orange-200"
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange-600"
              initial={{ width: "0%" }}
              animate={{
                width: isPaused
                  ? `${(currentIndex / (testimonials.length - 1)) * 100}%`
                  : "100%",
              }}
              transition={{
                duration: isPaused ? 0.3 : 5,
                ease: "linear",
                repeat: isPaused ? 0 : Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
