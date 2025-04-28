"use client"

import { motion } from "framer-motion"

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top left */}
      <motion.div
        className="absolute top-[15%] left-[5%] w-24 h-24 rounded-full border-2 border-orange-200 opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          scale: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      />

      {/* Top right */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-32 h-32"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-green-200 opacity-20"
        >
          <path
            d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Middle left */}
      <motion.div
        className="absolute top-[40%] left-[7%] w-16 h-16"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-blue-200 opacity-20"
        >
          <rect x="10" y="10" width="80" height="80" rx="15" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Middle right */}
      <motion.div
        className="absolute top-[60%] right-[8%] w-20 h-20"
        animate={{
          rotate: 360,
          y: [0, 40, 0],
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          y: {
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-purple-200 opacity-20"
        >
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Bottom left */}
      <motion.div
        className="absolute bottom-[15%] left-[15%] w-28 h-28"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          scale: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-orange-200 opacity-20"
        >
          <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Bottom right */}
      <motion.div
        className="absolute bottom-[10%] right-[12%] w-24 h-24 rounded-full border-4 border-dashed border-yellow-200 opacity-20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Pulse rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 rounded-full border-2 border-orange-200 opacity-0 animate-pulse-ring"></div>
        <div
          className="w-96 h-96 rounded-full border-2 border-orange-200 opacity-0 animate-pulse-ring"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="w-96 h-96 rounded-full border-2 border-orange-200 opacity-0 animate-pulse-ring"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}

