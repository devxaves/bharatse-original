"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, UserCheck, Calendar, Star } from "lucide-react"

const workflowSteps = [
  {
    icon: Search,
    title: "Discover",
    description: "Search for the service you need and browse through profiles of skilled professionals in your area.",
    color: "bg-orange-100 text-orange-600 border-orange-200",
  },
  {
    icon: UserCheck,
    title: "Compare",
    description:
      "Compare professionals based on ratings, reviews, pricing, and availability to find the perfect match.",
    color: "bg-blue-100 text-blue-600 border-blue-200",
  },
  {
    icon: Calendar,
    title: "Book",
    description: "Schedule an appointment with your chosen professional at a time that works for you.",
    color: "bg-green-100 text-green-600 border-green-200",
  },
  {
    icon: Star,
    title: "Review",
    description:
      "After the service is complete, leave a review to help others in the community find great professionals.",
    color: "bg-purple-100 text-purple-600 border-purple-200",
  },
]

export default function WorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-orange-100 text-orange-700">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple <span className="text-orange-600">4-Step</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding and hiring local professionals has never been easier.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gray-200">
            <motion.div className="absolute top-0 left-0 w-full bg-orange-500" style={{ height: progressHeight }} />
          </div>

          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex gap-8 mb-16 last:mb-0"
            >
              <motion.div
                className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full ${step.color} border-2 flex items-center justify-center`}
                whileInView={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <step.icon className="h-6 w-6" />
              </motion.div>

              <div className="pt-2">
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {step.description}
                </motion.p>

                {/* Dotted line connecting to next step */}
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    className="absolute left-[27px] top-[56px] bottom-[-40px] w-[2px]"
                    style={{
                      background:
                        "repeating-linear-gradient(to bottom, transparent, transparent 4px, #f97316 4px, #f97316 8px)",
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: "calc(100% - 16px)" }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] right-[5%] w-64 h-64 rounded-full bg-orange-200 mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-green-200 mix-blend-multiply blur-3xl opacity-20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full bg-orange-400/10"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[15%] w-12 h-12 rounded-full bg-green-400/10"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-[60%] right-[25%] w-8 h-8 rounded-full bg-blue-400/10"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
    </section>
  )
}

