import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import { services } from "@/constants/services";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
          <Link href="/" className="text-2xl  font-bold text-white tracking-tighter">
            <Image src="/CeSource.png" alt="Logo" className="h-12 w-36 mb-8" width={200} height={200}/>
          </Link>
            <p className="text-background/50 leading-relaxed max-w-xs">
              Engineering excellence and consultancy services for a sustainable
              and innovative world.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
             <Link
                href="https://www.facebook.com/Cesource-Technical-Private-Limited-107280114486580"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>

             <Link
                href="https://twitter.com/WECESOURCE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>

             <Link
                href="https://www.linkedin.com/company/cesource-technical-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>

             <Link
                href="https://www.instagram.com/wecesource"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-background/40 mb-8">
              Sectors
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                Building and Infrastructure                                                              
              </li>
              <li>
                  Transportation and E-Mobility                 
              </li>
              <li>
                  Construction and Utility                                                         
              </li>
              <li>
                  Smart City                             
              </li>
              <li>
                  Green Energy
              </li>
              <li>
                  Social and Economic
              </li>
              <li>
                  Net Zero Emissions and Climate Change                         
              </li>
              <li>
                  Innovation                        
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-background/40 mb-8">
              Services
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Talk */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-background/40 mb-8">
            Contact Us
            </h3>




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

            {/* Newsletter */}
            {/* <div className="mt-8">
              <p className="text-sm text-background/50 mb-4">
                Stay updated with our latest insights and project updates.
              </p>
              <form className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-background/5 border-b border-background/20 py-3 pr-8 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                 <LinkrrowRight className="w-4 h-4 text-background/40 hover:text-background" />
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Cesource Technical Private Limited. All
            rights reserved.
          </p>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-background/30">
            <Link
              href="/privacy-policy"
              className="hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
