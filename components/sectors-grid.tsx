"use client"

import { motion } from "framer-motion"
import { Building2, Train, Zap, Cloud, Home, Users, Hammer, Lightbulb } from "lucide-react"

const sectors = [
  { name: "Building and Infrastructure", icon: Building2 },
  { name: "Transportation and E-Mobility", icon: Train },
  { name: "Construction and Utility", icon: Zap },
  { name: "Smart City", icon: Cloud },
  { name: "Green Energy", icon: Home },
  { name: "Social and Economic", icon: Users },
  { name: "Net Zero Emissions and Climate Change", icon: Hammer },
  { name: "Innovation", icon: Lightbulb },
]

export function SectorsGrid() {
  return (
    <section id="sectors" className=" bg-white py-12">
      <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-5 mb-14">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[rgba(44,160,160,1)] uppercase mb-6">What We Do</h2>
            <h3 className=" max-w-2xl text-4xl md:text-5xl font-bold leading-tight">
              Driving sustainable growth across diverse industrial sectors.
            </h3>
          <p className="text-xl text-muted-foreground  mb-2">
          Cesource Technical is focused on contributing Engineering and Consulting services that shape tomorrow’s sustainable, resilient infrastructure and design with innovation and integrity.
          </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group aspect-square border border-gray-100 flex flex-col justify-between p-10 hover:bg-[rgba(44,160,160,1)] transition-colors duration-500"
            >
              <sector.icon className="w-10 h-10 text-[rgba(44,160,160,1)] group-hover:text-white transition-colors" />
              <div className="space-y-4">
                <h4 className="text-xl font-bold group-hover:text-white transition-colors leading-snug">
                  {sector.name}
                </h4>
                <div className="w-0 group-hover:w-full h-[2px] bg-white transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
