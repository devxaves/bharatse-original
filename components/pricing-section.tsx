"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    description: "For individuals looking to hire local professionals",
    price: { monthly: 0, yearly: 0 },
    features: [
      { name: "Browse all professionals", included: true },
      { name: "Read reviews and ratings", included: true },
      { name: "Basic search filters", included: true },
      { name: "Direct messaging", included: true },
      { name: "Verified professionals", included: true },
      { name: "Priority support", included: false },
      { name: "Advanced filters", included: false },
    ],
    cta: "Get Started",
    popular: false,
    color: "border-gray-200 hover:border-gray-300",
  },
  {
    name: "Premium",
    description: "For customers who want priority access to top professionals",
    price: { monthly: 299, yearly: 2999 },
    features: [
      { name: "Browse all professionals", included: true },
      { name: "Read reviews and ratings", included: true },
      { name: "Advanced search filters", included: true },
      { name: "Direct messaging", included: true },
      { name: "Verified professionals", included: true },
      { name: "Priority support", included: true },
      { name: "Exclusive discounts", included: true },
    ],
    cta: "Get Premium",
    popular: true,
    color: "border-orange-200 hover:border-orange-300",
  },
  {
    name: "Professional",
    description: "For freelancers who want to get listed and find clients",
    price: { monthly: 499, yearly: 4999 },
    features: [
      { name: "Professional profile", included: true },
      { name: "Receive client inquiries", included: true },
      { name: "Portfolio showcase", included: true },
      { name: "Client reviews", included: true },
      { name: "Direct messaging", included: true },
      { name: "Profile analytics", included: true },
      { name: "Profile boosts (2/month)", included: true },
    ],
    cta: "Join as Pro",
    popular: false,
    color: "border-green-200 hover:border-green-300",
  },
]

export default function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-orange-200 mix-blend-multiply blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] left-[10%] w-64 h-64 rounded-full bg-green-200 mix-blend-multiply blur-3xl opacity-20"></div>
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
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the <span className="text-orange-600">Right Plan</span> for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're looking to hire or get hired, we have a plan that fits your needs.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm font-medium ${!annual ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={annual} onCheckedChange={setAnnual} className="data-[state=checked]:bg-orange-600" />
            <span className={`text-sm font-medium ${annual ? "text-gray-900" : "text-gray-500"}`}>
              Annual <span className="text-green-600 font-semibold">(Save 15%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card
                className={`relative h-full border-2 transition-all ${plan.color} ${plan.popular ? "shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <span className="text-4xl font-bold">₹{annual ? plan.price.yearly : plan.price.monthly}</span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-500 ml-2">{annual ? "/year" : "/month"}</span>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-orange-600 hover:bg-orange-700" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

