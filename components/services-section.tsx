"use client"

import { services } from "@/constants/services"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section className=" bg-gray-50 overflow-hidden pb-6">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="/modern-engineering-office.jpg"
                alt="Engineering Consultancy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 bg-[rgba(44,160,160,1)] p-12 text-white hidden md:block">
              <span className="text-6xl font-bold block mb-2">08+</span>
              <span className="text-xs uppercase tracking-widest font-bold">Years of Excellence</span>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[rgba(44,160,160,1)] uppercase mb-6">
                Our Services
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Comprehensive Technical and Project Solutions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help you in many ways for stress-free and quality service of your project objectives. Our expertise
                ensures risk mitigation and technical superiority.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[rgba(44,160,160,1)] shrink-0 mt-1" />
                  <Link
                    href={`/services/${service.id}`}
                    className="font-semibold text-foreground hover:text-[rgba(44,160,160,1)] transition-colors"
                  >
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link href="/services/project-consultancy" className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[rgba(44,160,160,1)] transition-colors" >
              Explore Our Expertise
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
