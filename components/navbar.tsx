"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "./waitlist-form"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  // { name: "Testimonials", href: "#testimonials" },
  // { name: "Pricing", href: "#pricing" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const openWaitlist = () => {
    setMobileMenuOpen(false)
    setIsWaitlistOpen(true)
  }

  const closeWaitlist = () => {
    setIsWaitlistOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-white/90 backdrop-blur-md shadow-md py-3"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-evenly">
          <div className="flex items-center gap-2">           
              <img src="./logo-w.png" alt="" width="30%" />
          </div>

          <nav className="hidden md:flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
              onClick={() => scrollToSection("#pricing")}
            >
              Sign In
            </Button> */}
            <Button className="bg-orange-600 hover:bg-orange-700 text-white" onClick={openWaitlist}>
              Get Started
            </Button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-white font-bold text-xl px-3 py-1 rounded">
                    <img src="./logo-w.png" alt="" width="50%" />
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2 border-b border-gray-100"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <div className="mt-auto p-4 flex flex-col gap-3">
                {/* <Button
                  variant="outline"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    scrollToSection("#pricing")
                  }}
                >
                  Sign In
                </Button> */}
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" onClick={openWaitlist}>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Waitlist Form Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </>
  )
}

