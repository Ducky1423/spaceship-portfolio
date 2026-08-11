"use client";

import { motion } from "framer-motion";
import { FaSatelliteDish } from "react-icons/fa";

const contacts = [
  { x: "24%", y: "32%", delay: 0 },
  { x: "68%", y: "25%", delay: 0.8 },
  { x: "75%", y: "65%", delay: 1.5 },
  { x: "35%", y: "72%", delay: 2.2 },
];

export default function Radar() {
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
      <div className="relative z-20 flex items-center justify-between gap-4">
        <span className="px-1 text-xs tracking-[0.2em] text-gray-400 uppercase">
          System
        </span>

        <span className="flex shrink-0 items-center gap-2 text-xs text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(0,255,153,0.8)]" />
          ONLINE
        </span>
      </div>

      {/* Radar display */}
      <div className="relative flex flex-1 items-center justify-center">

        {/* Radar circle */}
        <div className="relative aspect-square w-44 max-w-full overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-400/[0.03]">

          {/* Outer ring */}
          <div className="absolute inset-2 rounded-full border border-cyan-400/20" />

          {/* Middle ring */}
          <div className="absolute inset-[24%] rounded-full border border-cyan-400/20" />

          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-400/20" />

          {/* Vertical line */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px bg-cyan-400/20" />

          {/* Diagonal line */}
          <div className="absolute left-1/2 top-1/2 h-[140%] w-px origin-top -translate-x-1/2 rotate-45 bg-cyan-400/10" />

          
          {/* Radar sweep */}
            <motion.div
            className="
                absolute
                inset-0
                origin-center
            "
            animate={{ rotate: 360 }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
            }}
            >
            {/* Glowing sweep wedge */}
            <div
                className="
                absolute
                inset-0
                bg-cyan-400/[0.06]
                blur-[2px]
                "
                style={{
                clipPath: "polygon(50% 50%, 63% 0%, 37% 0%)",
                }}
            />

            {/* Bright sweep line */}
            <div
                className="
                absolute
                bottom-1/2
                left-1/2
                h-1/2
                w-[2px]
                -translate-x-1/2
                bg-gradient-to-t
                from-cyan-400
                to-transparent
                shadow-[0_0_10px_rgba(0,229,255,0.9)]
                "
            />
            </motion.div>

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.9)]" />

          {/* Contacts */}
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(0,255,153,0.9)]"
              style={{
                left: contact.x,
                top: contact.y,
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: contact.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Radar icon */}
        <div className="absolute bottom-2 right-2 text-cyan-400/30">
          <FaSatelliteDish />
        </div>
      </div>

      {/* Telemetry */}
      <div className="relative z-10 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="font-mono text-xs tracking-wider text-gray-500">
              CONTACTS
            </p>

            <p className="mt-1 text-lg text-cyan-300">
              04
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-xs tracking-wider text-gray-500">
              RANGE
            </p>

            <p className="mt-1 text-sm text-green-400">
              42 AU
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}