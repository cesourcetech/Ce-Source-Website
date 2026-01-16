"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Phone, Mail } from "lucide-react";
import { services } from "@/constants/services";


export default function ServiceDetail() {
  const params = useParams();
  const { serviceId } = params;

  const currentService = services.find((s) => s.id === serviceId);
  const currentIndex = services.findIndex((s) => s.id === serviceId);

  if (!currentService) {
    notFound();
  }

  const prevService =
    currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1
      ? services[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-primary mb-8 hover:opacity-80"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentService.name}
            </h1>

            <p className="text-xl text-background/70">
              {currentService.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>



      {/* Content Section */}
      <section className="  bg-background">
        <div className="container mx-auto px-6">
        <div className=" mb-16 pt-8  flex justify-between">
            {prevService ? (
              <Link
                href={`/services/${prevService.id}`}
                className="flex gap-3 text-muted-foreground hover:text-[rgba(44,160,160,1)]"
              >
                <ArrowLeft className="w-5 h-5" />
                <div>
                  <p className="text-xs uppercase opacity-60">Previous</p>
                  <p className="font-semibold">{prevService.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextService && (
              <Link
                href={`/services/${nextService.id}`}
                className="flex gap-3 text-muted-foreground hover:text-[rgba(44,160,160,1)] text-right"
              >
                <div>
                  <p className="text-xs uppercase opacity-60">Next</p>
                  <p className="font-semibold">{nextService.name}</p>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground">
                  {currentService.fullDesc}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>

                <div className="space-y-4">
                  {currentService.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex gap-4 p-4 bg-secondary rounded-lg"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[rgba(44,160,160,1)] mt-1" />
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-[rgba(44,160,160,1)] p-8 rounded-lg text-primary-foreground"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Ready to get started?
                </h3>
                <p className="mb-6 opacity-90">
                  Contact us today to discuss how our{" "}
                  {currentService.name.toLowerCase()} can add value and ensure success for your project.
                </p>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-[rgba(44,160,160,1)] px-6 py-3 font-bold uppercase tracking-widest text-sm hover:opacity-90"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-secondary p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-6">All Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.id}`}
                        className={`block py-2 px-3 rounded ${
                          service.id === serviceId
                            ? "bg-[#2ca0a0] text-primary-foreground font-semibold"
                            : "hover:bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-foreground p-8 rounded-lg text-background"
              >
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-background/70 mb-6">
                  Our experts are ready to assist you.
                </p>
                <div className="space-y-4 text-sm text-background/60">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
               <Link
                  href="mailto:info@csetepl.com"
                  className="hover:text-primary transition-colors"
                >
                  info@csetepl.com
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
               <Link
                  href="tel:+919608535740"
                  className="hover:text-primary transition-colors"
                >
                  +91 96085 35740
                </Link>
              </div>
            </div>
              </motion.div>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="my-16 pt-8 border-t flex justify-between">
            {prevService ? (
              <Link
                href={`/services/${prevService.id}`}
                className="flex gap-3 text-muted-foreground hover:text-[rgba(44,160,160,1)]"
              >
                <ArrowLeft className="w-5 h-5" />
                <div>
                  <p className="text-xs uppercase opacity-60">Previous</p>
                  <p className="font-semibold">{prevService.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextService && (
              <Link
                href={`/services/${nextService.id}`}
                className="flex gap-3 text-muted-foreground hover:text-[rgba(44,160,160,1)] text-right"
              >
                <div>
                  <p className="text-xs uppercase opacity-60">Next</p>
                  <p className="font-semibold">{nextService.name}</p>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
