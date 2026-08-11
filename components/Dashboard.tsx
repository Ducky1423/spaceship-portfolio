"use client";

import {
  FaTools,
  FaBroadcastTower,
} from "react-icons/fa";

import Reactor from "@/components/Reactor";
import Radar from "@/components/Radar";

interface SystemCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  status: string;
}

function SystemCard({
  icon,
  name,
  description,
  status,
}: SystemCardProps) {
  return (
    <div
      className="
        group
        panel
        relative
        flex
        min-w-0
        min-h-[240px]
        flex-col
        p-6
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]
      "
    >
      {/* Header */}
      <div className="flex min-w-0 items-center justify-between gap-6 px-1">
        <span className="min-w-0 truncate px-1 text-xs tracking-[0.2em] text-gray-400 uppercase">
          System
        </span>

        <span className="flex shrink-0 items-center gap-2 text-xs text-green-400">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_10px_rgba(0,255,153,0.8)]" />
          ONLINE
        </span>
      </div>

      {/* Icon container */}
      <div className="mt-6 flex h-16 w-16 shrink-0 items-center justify-center overflow-visible">
        <div
          className="
            text-5xl
            leading-none
            text-cyan-400
            transition-transform
            duration-300
            group-hover:scale-105
          "
        >
          {icon}
        </div>
      </div>

      {/* Name */}
      <h2 className="mt-4 truncate text-2xl text-white">
        {name}
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
        {description}
      </p>

      {/* Status */}
      <div className="mt-auto border-t border-white/10 pt-4">
        <span className="font-mono text-xs tracking-wider text-cyan-300">
          STATUS: {status}
        </span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="relative z-10 min-h-screen w-full overflow-x-hidden px-4 py-4 sm:px-6 sm:py-6">
      
      {/* Header */}
      <header
        className="
          panel
          mb-5
          flex
          min-w-0
          flex-col
          gap-3
          px-5
          py-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-6
        "
      >
        <div className="min-w-0">
          <p className="truncate text-xs tracking-[0.3em] text-cyan-400 uppercase">
            Space Command Interface
          </p>

          <h1 className="mt-1 truncate text-2xl text-white sm:text-3xl">
            USS EVAN BALWANI
          </h1>
        </div>

        <div className="shrink-0 sm:text-right">
          <p className="text-xs text-gray-500">
            SYSTEM STATUS
          </p>

          <p className="mt-1 whitespace-nowrap text-sm text-green-400">
            ALL SYSTEMS ONLINE
          </p>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2">

        {/* Navigation */}
        <Radar />

        {/* Reactor */}
        <Reactor />

        {/* Command Center */}
        <div
          className="
            panel
            flex
            min-w-0
            min-h-[250px]
            items-center
            justify-center
            overflow-hidden
            p-6
            md:col-span-2
          "
        >
          <div className="w-full min-w-0 text-center">

            <p className="text-xs tracking-[0.35em] text-cyan-400 uppercase sm:text-sm">
              Command Center
            </p>

            <h2
              className="
                mt-4
                truncate
                text-3xl
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              USS EVAN BALWANI
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-gray-400 sm:text-base">
            Personal command interface for research,
            engineering, and exploration.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded border border-cyan-400/30 px-3 py-1.5 text-xs text-cyan-300">
                MISSION: ACTIVE
              </span>

              <span className="rounded border border-green-400/30 px-3 py-1.5 text-xs text-green-300">
                HULL: 100%
              </span>

              <span className="rounded border border-purple-400/30 px-3 py-1.5 text-xs text-purple-300">
                SIGNAL: STRONG
              </span>
            </div>
          </div>
        </div>

        {/* Engineering */}
        <SystemCard
          icon={<FaTools />}
          name="Engineering"
          description="Projects, software, research, and technical systems."
          status="PROJECTS READY"
        />

        {/* Communications */}
        <SystemCard
          icon={<FaBroadcastTower />}
          name="Communications"
          description="Establish a communication channel with the captain."
          status="CHANNEL READY"
        />
      </main>

      {/* Telemetry */}
      <footer
        className="
          panel
          mt-5
          flex
          w-full
          flex-wrap
          justify-between
          gap-x-8
          gap-y-3
          px-5
          py-4
          font-mono
          text-xs
          sm:px-6
        "
      >
        <span className="text-gray-400">
          REACTOR: <span className="text-green-400">98%</span>
        </span>

        <span className="text-gray-400">
          HULL: <span className="text-green-400">100%</span>
        </span>

        <span className="text-gray-400">
          SIGNAL: <span className="text-cyan-400">STRONG</span>
        </span>

        <span className="text-gray-400">
          UPTIME: <span className="text-cyan-400">99.99%</span>
        </span>
      </footer>
    </div>
  );
}