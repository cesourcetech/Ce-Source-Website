"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Engineering the Future of Building and Infrastructure",
    subtitle: "URBAN AND REGIONAL DEVELOPMENT",
    description: "Creating sustainable, technology-driven spaces that redefine modern living and work environments.",
    video: "/b1.jpg",
  },
  {
    id: 2,
    title: "Seamless Transportation and E-Mobility ",
    subtitle: "Digital Transformation and Disruptive Innovation",
    description: "Innovating transit systems to ensure smoother, faster, and more efficient movement across borders.",
    video: "/b2.jpg",
  },
  {
    id: 3,
    title: "Empowering Socio-Economic Development",
    subtitle: "People, Economy and Growth",
    description:
      "Empowering communities through inclusive initiatives and capacity building, strengthening local economies by creating sustainable livelihoods, and shaping a resilient future. ",
    video: "/b4.png",
  },
  {
    id: 4,
    title: "Adapting to Climate Change",
    subtitle: "Net Zero Emissions and Sustainability",
    description: "Designing resilient infrastructure that withstands environmental challenges for future generations.",
    video: "/b3.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 0.5
      })
    }, 50)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black">
      {/* Video Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src={slides[currentSlide].video}
          /> */}

        <img className="h-full w-full object-cover"
            src={slides[currentSlide].video} width={600} height={400}/>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="text-white/80 text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">{slides[currentSlide].description}</p>
          {/* <button className="flex items-center gap-3 text-white font-bold group">
            <span className="border-b-2 border-white pb-1 group-hover:border-[rgba(44,160,160,1)] transition-colors">
              READ MORE
            </span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button> */}
        </motion.div>
      </div>

      {/* Horizon Progress Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx)
                  setProgress(0)
                }}
                className="group relative flex flex-col gap-3 text-left"
              >
                <span
                  className={cn(
                    "text-[10px] font-bold tracking-widest uppercase transition-colors duration-300",
                    currentSlide === idx ? "text-white" : "text-white/40 group-hover:text-white/60",
                  )}
                >
                  {slide.subtitle.split(" ")[0]} {slide.subtitle.split(" ")[1]}
                </span>
                <div className="h-[2px] w-full bg-white/20 relative overflow-hidden">
                  {currentSlide === idx && (
                    <motion.div className="absolute top-0 left-0 h-full bg-white" style={{ width: `${progress}%` }} />
                  )}
                  {currentSlide > idx && <div className="absolute top-0 left-0 h-full w-full bg-white/60" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-30 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] [writing-mode:vertical-lr]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white animate-bounce" />
      </div>
    </section>
  )
}
