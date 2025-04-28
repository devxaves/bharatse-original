"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, MapPin, Award, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Professionals",
    description: "Skilled freelancers ready to help",
    color: "bg-orange-100 text-orange-600",
  },
  // {
  //   icon: MapPin,
  //   value: "1",
  //   label: "City",
  //   description: "Currently serving Kolkata",
  //   color: "bg-blue-100 text-blue-600",
  // },
  {
    icon: Award,
    value: "50+",
    label: "Categories",
    description: "From home services to creative work",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: ThumbsUp,
    value: "100%",
    label: "Guarantee",
    description: "Avoiding scams and Trust issues",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-[20%] left-[20%] w-64 h-64 rounded-full bg-orange-200 mix-blend-multiply blur-3xl opacity-20"></div>
          <div className="absolute bottom-[30%] right-[20%] w-64 h-64 rounded-full bg-green-200 mix-blend-multiply blur-3xl opacity-20"></div>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-orange-100 text-orange-700">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-600">Numbers Speak</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're growing every day, connecting more professionals with
            customers who need their services.
          </p>
        </motion.div>

        <div className=" grid-cols-1 items-center justify-center flex md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div
                className={`w-16 h-16 rounded-full ${stat.color} mx-auto flex items-center justify-center mb-4`}
              >
                <stat.icon className="h-8 w-8" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg font-medium mb-1">{stat.label}</p>
                <p className="text-gray-500">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Supporting Sustainable Development Goals
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
              <div className="text-blue-600 font-bold text-lg mb-2">Goal 8</div>
              <p className="text-gray-700 text-center">
                Decent Work and Economic Growth
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 flex flex-col items-center">
              <div className="text-orange-600 font-bold text-lg mb-2">
                Goal 9
              </div>
              <p className="text-gray-700 text-center">
                Industry, Innovation & Infrastructure
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
