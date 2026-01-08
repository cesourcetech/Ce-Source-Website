"use client"

import { motion } from "framer-motion"
import type { Service } from "@/types"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DynamicIcon } from "./dynamic-icon" // Import DynamicIcon

interface ServiceLayoutProps {
  service: Service
}

export function ServiceLayout({ service }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="bg-[rgba(44,160,160,1)] text-white py-20 mb-16">
          <div className="container mx-auto px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <DynamicIcon name={service.iconName} className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-white/80 max-w-2xl">{service.desc}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200"
              >
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Comprehensive Solutions</h2>
                <div className="space-y-6">
                  {service.fullContent?.map((point, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="mt-1 p-1 rounded-full bg-teal-50 text-[rgba(44,160,160,1)] group-hover:bg-[rgba(44,160,160,1)] group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-slate-100">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    At Cesource Technical, we combine deep domain expertise with innovative technology to deliver
                    results that exceed expectations. Our approach to {service.title} is grounded in reliability,
                    quality, and a commitment to sustainable infrastructure.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar / CTA */}
            <div className="space-y-8">
              <div className="bg-[rgba(44,160,160,1)] p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Request a Consultation</h3>
                <p className="mb-8 text-white/80">
                  Speak with our experts about your next project and discover how our {service.title} services can help
                  you achieve your goals.
                </p>
                <Link
                  href="/#contact"
                  className="block w-full py-4 text-center bg-white text-[rgba(44,160,160,1)] font-bold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Contact Us Now
                </Link>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold mb-6 text-slate-900">Sectors We Serve</h3>
                <ul className="space-y-3 text-slate-600">
                  {[
                    "Transportation",
                    "Urban Development",
                    "Infrastructure",
                    "Climate Change",
                    "Social Development",
                  ].map((sector) => (
                    <li key={sector} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[rgba(44,160,160,1)]" />
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
