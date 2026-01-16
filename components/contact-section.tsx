"use client"

import { Building2, ChevronDown, Loader2, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import GoogleMapEmbed from "./GoogleMapEmbed";

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEET_DB || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
              timestamp: new Date().toLocaleString(),
            },
          ],    
          sheet: "sheet1",
        }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you when Arevei Cloud launches.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className=" bg-gray-50 py-3.5 sm:py-7">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center gap-x-20 gap-y-10 items-start ">
          <div className="space-y-12 my-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Our greatest value emerges through enduring partnerships, where we contribute meaningfully to our clients’ long-term success.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[rgba(44,160,160,1)] font-bold cursor-pointer">
                <ChevronDown className="w-5 h-5" />
                <span>Visit us :</span>
              </div>
              <div className="pl-8 space-y-4">
                <div className="flex  items-start gap-4">
                  <Building2 className="w-4 h-4 text-primary shrink-0 my-auto " />
                  <p className="text-gray-600 hover:text-primary transition-colors">
                  Cesource Technical Private Limited
                  </p>
                </div>
                <div className="flex  items-start gap-4">
                  <MapPin className="w-4 h-4 text-primary shrink-0 my-auto " />
                  <Link href="https://maps.google.com/maps?ll=25.606253,85.18691&z=14&t=m&hl=en&gl=US&mapclient=embed&q=Sandalpur%20Rd%20Patna%2C%20Bihar%20800006" className="text-gray-600 hover:text-primary transition-colors">
                  Sandalpur Road, Near Kumhrar, Patna - 800006, Bihar, India
                  </Link>
                </div>
                
                <div className="space-y-4 ">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
               <Link
                  href="mailto:info@csetepl.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  info@csetepl.com
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
               <Link
                  href="tel:+919608535740"
                className="text-gray-600 hover:text-primary transition-colors"
                >
                  +91 96085 35740
                </Link>
              </div>
            </div>
                {/* <div className="rounded-xl overflow-hidden grayscale opacity-80 h-64 shadow-inner border border-gray-200">
                  <img src="/city-map-pinpoint.jpg" alt="Location" className="w-full h-full object-cover" />
                </div> */}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-12 rounded-2xl relative w-full sm:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 w-full">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-50 mt-2 border px-4 py-4 rounded-lg focus:ring-2 focus:ring-[rgba(44,160,160,1)] transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full bg-gray-50 border mt-2 px-4 py-4 rounded-lg focus:ring-2 focus:ring-[rgba(44,160,160,1)] transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Say Something..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={loading}
                name="message"
                className="w-full bg-gray-50 border mt-2 px-4 py-4 rounded-lg focus:ring-2 focus:ring-[rgba(44,160,160,1)] transition-all resize-none"
              />
            </div>

            <button className="bg-[rgba(44,160,160,1)] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-[rgba(44,160,160,0.4)]">
            {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send us a message"
                  )}
            </button>
          </form>
        </div>
        <GoogleMapEmbed />
        
      </div>
    </section>
  )
}
