"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react";
interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  isInView: boolean;
}
function AnimatedCounter({ target, suffix = "", isInView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2000; // 2 seconds
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span>
      {count.toString().padStart(2, "0")}{suffix}
    </span>
  );
}

const stats = [
  { value: 8, suffix: "+", label: "years of experience" },
  { value: 50, suffix: "+", label: "projects completed" },
  { value: 20, suffix: "+", label: "satisfied clients" },
  { value: 50, suffix: "+", label: "active consultants" },
];



export function AboutStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="about" className=" bg-white overflow-hidden mt-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
            
            </div>
        <div className="flex flex-col lg:flex-row gap-16 mb-14">
          <div className="lg:w-1/3 mx-auto">
            <img src="/about.png" alt="" />
          </div>
          <div className="lg:w-2/3 space-y-8">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[rgba(44,160,160,1)] uppercase mb-6">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            We will provide you the best work you’ve always envisioned.
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Cesource Technical Private Limited is an Engineering and Consultancy company. We harness the power of technology to create innovative solutions that drive business success across multiple business and infrastructure sectors.
            </p>
           
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-12 text-center group hover:bg-teal-light transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                <AnimatedCounter 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  isInView={isInView} 
                />
              </div>
              <div className="text-sm uppercase tracking-widest font-semibold text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
