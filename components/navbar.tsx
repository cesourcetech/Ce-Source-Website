"use client"
// import GoogleTranslate from "next-google-translate-widget";
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Sectors", href: "/#sectors" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || (pathname !== "/" && pathname.startsWith("/services"))
          ? "bg-[rgba(44,160,160,1)] py-4 shadow-lg"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
            <Image src="/CeSource.png" alt="Logo" className="h-12 w-36" width={200} height={200} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-white/90">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="relative group py-2 scroll-smooth" scroll={true}>
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-6 text-white">
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-r border-white/20 pr-6">
            {/* <GoogleTranslate pageLanguage="en" includedLanguages="bn,en" /> */}
            {/* <Globe className="w-4 h-4" />
            GLOBAL | EN */}
          </div>

          <Link
            href="/#contact"
            className="hidden md:flex items-center gap-2 bg-white text-[rgba(44,160,160,1)] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
          >
            Let's Talk
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-[rgba(44,160,160,1)] shadow-xl transition-transform duration-300 ease-in-out lg:hidden z-40",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Image src="/CeSource.png" alt="Logo" className="h-10 w-28" width={200} height={200} />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex flex-col py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-6 py-3 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors border-l-4 border-transparent hover:border-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sidebar Footer CTA */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href="/#contact"
            className="block w-full bg-white text-[rgba(44,160,160,1)] px-6 py-3 text-xs font-bold uppercase tracking-widest text-center hover:bg-white/90 transition-all active:scale-95 rounded"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  )
}
