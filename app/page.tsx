import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { AboutStats } from "@/components/about-stats"
import { WhyUs } from "@/components/why-us"
import { VisionMission } from "@/components/vision-mission"
import { SectorsGrid } from "@/components/sectors-grid"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ReviewsCarousel } from "@/components/reviews-carousel"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <div className=" container mx-auto space-y-12">
      <AboutStats />
      <WhyUs />
      <VisionMission />
      <SectorsGrid />
      <ServicesSection />
      <ReviewsCarousel/>
      <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
