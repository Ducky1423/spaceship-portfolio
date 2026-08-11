"use client";

import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

export default function Reactor() {
  return (
    <div
      className="
        panel
        relative
        flex
        min-h-[240px]
        min-w-0
        flex-col
        overflow-hidden
        p-6
      "
    >
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className="px-1 text-xs tracking-[0.2em] text-gray-400 uppercase">
          System
        </span>

        <span className="flex shrink-0 items-center gap-2 text-xs text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(0,255,153,0.8)]" />
          ONLINE
        </span>
      </div>

      {/* Reactor */}
      <div className="relative flex flex-1 items-center justify-center">
        
        {/* Outer rotating ring */}
        <motion.div
          className="
            absolute
            h-32
            w-32
            rounded-full
            border
            border-cyan-400/30
            border-t-cyan-400
            border-r-purple-400
          "
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Second rotating ring */}
        <motion.div
          className="
            absolute
            h-24
            w-24
            rounded-full
            border
            border-cyan-400/20
            border-b-cyan-400
          "
          animate={{ rotate: -360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Reactor glow */}
        <motion.div
          className="
            absolute
            h-16
            w-16
            rounded-full
            bg-cyan-400/20
            blur-xl
          "
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Reactor core */}
        <motion.div
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-cyan-300/70
            bg-cyan-400/10
            shadow-[0_0_20px_rgba(0,229,255,0.6)]
          "
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaBolt className="text-2xl text-cyan-300" />
        </motion.div>
      </div>

      {/* Bottom information */}
      <div className="relative z-10 border-t border-white/10 pt-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-wider text-gray-500">
              POWER OUTPUT
            </p>

            <p className="mt-1 text-xl text-cyan-300">
              98.7%
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-xs tracking-wider text-gray-500">
              TEMPERATURE
            </p>

            <p className="mt-1 text-sm text-green-400">
              3,742 K
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}