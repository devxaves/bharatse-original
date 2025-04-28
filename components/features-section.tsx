"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Shield, Zap, Users, Award, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Discover Local Talent",
    description:
      "Find skilled professionals in your neighborhood for any service you need.",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "group-hover:bg-orange-600 group-hover:text-white",
    shadowColor: "group-hover:shadow-orange-200",
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    description:
      "All service providers are verified with ratings and reviews you can trust.",
    color: "bg-blue-100 text-blue-600",
    hoverColor: "group-hover:bg-blue-600 group-hover:text-white",
    shadowColor: "group-hover:shadow-blue-200",
  },
  {
    icon: Zap,
    title: "Quick Booking",
    description:
      "Book services instantly with our streamlined booking process.",
    color: "bg-purple-100 text-purple-600",
    hoverColor: "group-hover:bg-purple-600 group-hover:text-white",
    shadowColor: "group-hover:shadow-purple-200",
  },
  {
    icon: Users,
    title: "Community Trust",
    description:
      "Build relationships with reliable local professionals you can count on.",
    color: "bg-green-100 text-green-600",
    hoverColor: "group-hover:bg-green-600 group-hover:text-white",
    shadowColor: "group-hover:shadow-green-200",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description:
      "We ensure high-quality service with our satisfaction guarantee.",
    color: "bg-yellow-100 text-yellow-600",
    hoverColor: "group-hover:bg-yellow-600 group-hover:text-white",
    shadowColor: "group-hover:shadow-yellow-200",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay securely through our platform with multiple payment options.",
    color: "bg-red-100 text-red-600",
    hoverColor: "group-hover:bg-red-600 group-hover:text-white",
    shadowColor: "group-hover:shadow-red-200",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-orange-200 mix-blend-multiply blur-3xl opacity-20"></div>
          <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-green-200 mix-blend-multiply blur-3xl opacity-20"></div>
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
            Why Choose BharatSe
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing{" "}
            <span className="text-orange-600">Local Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with skilled professionals for all your personal, creative,
            and business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-orange-50/30 group-hover:to-blue-50/30 transition-all duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${feature.color} ${feature.hoverColor} flex items-center justify-center mb-4 transition-all duration-300`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
