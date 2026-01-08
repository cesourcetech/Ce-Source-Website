"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

const reviews = [
  {
    name: "Damian Alex",
    role: "Project Director",
    image: "/professional-portrait-1.png",
    content:
      "Cesource Technical Private Limited delivered exceptional engineering solutions for our urban development project. Their attention to detail and commitment to quality are truly remarkable.",
  },
  {
    name: "R Saha",
    role: "Infrastructure Lead",
    image: "/professional-portrait-2.png",
    content:
      "The consultancy services provided were top-notch. They helped us navigate complex regulatory requirements and provided innovative infrastructure supports.",
  },
  {
    name: "Aashish Majumdar",
    role: "Site Manager",
    image: "/professional-portrait-3.png",
    content:
      "Working with their team was a stress-free experience. Their project management and risk management strategies are highly effective and reliable.",
  },
]

export function ReviewsCarousel() {
  return (
    <section className=" bg-gray-50 overflow-hidden py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-wider mb-4">Clients Reviews</h2>
          <div className="w-24 h-1 bg-[rgba(44,160,160,1)] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 relative mb-8">
                {/* Speech bubble arrow effect */}
                <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white rotate-45 border-r border-b border-gray-100 group-hover:border-transparent transition-colors" />
                <p className="text-gray-600 leading-relaxed italic">"{review.content}"</p>
              </div>

              <div className="flex items-center gap-4 px-4">
               
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
