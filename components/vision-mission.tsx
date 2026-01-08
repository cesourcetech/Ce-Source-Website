"use client"

export function VisionMission() {
  return (
    <section className=" bg-gray-50 overflow-hidden py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-[rgba(44,160,160,1)] font-bold tracking-[0.3em] uppercase block mb-8">
                Our Foundation
              </span>
            </div>

            <div className="flex flex-col gap-6 text-lg">
              <div className="bg-white p-12 shadow-sm hover:shadow-xl transition-all border-l-4 border-[rgba(44,160,160,1)]">
                <h3 className="text-2xl font-bold mb-6">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                Emerge as one of the leading and most trusted engineering and consultancy solution providers across the nation by consistently delivering innovative, reliable, and high-quality services. We aim to set industry benchmarks through our commitment to excellence, ethical practices, and client-centric approach, supported by a highly skilled, experienced, and dedicated workforce.
                </p>
              </div>

              <div className="bg-white p-12 shadow-sm hover:shadow-xl transition-all border-l-4 border-[rgba(44,160,160,1)]">
                <h3 className="text-2xl font-bold mb-6">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                To meet and exceed clients’ requirements by delivering cost-effective, efficient, and dynamic solutions tailored to their specific needs. Our approach focuses on understanding client objectives in depth, optimizing resources, and applying innovative methodologies to ensure maximum value, long-term reliability, and complete client satisfaction across all engineering and consultancy services.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-[600px]">
            <img
              src="/modern-architectural-yellow-building-facade.jpg"
              alt="Architecture"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
