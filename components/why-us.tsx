"use client"

export function WhyUs() {
  return (
    <section className=" bg-white overflow-hidden py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 relative h-40">
                <img
                  src="/why1.jpg"
                  alt="Engineering Project"
                  className="w-full aspect-[3/4] h-86 object-cover"
                />
                <div className="absolute -top-2 -right-20 w-40 h-40 bg-white p-4 hidden md:block">
                  <img src="/why2.jpg" alt="Plan" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-4 mt-20">
                <img
                  src="/engineers-team.jpg"
                  alt="Team"
                  className="w-full aspect-[3/4] object-cover shadow-2xl"
                />
              </div>
            </div>
            {/* Dot pattern deco */}
            <div className="absolute -bottom-10 -left-10 grid grid-cols-6 gap-2 opacity-20 hidden md:grid">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[rgba(44,160,160,1)]" />
              ))}
            </div>

            <div className="absolute -top-10 -right-10 grid grid-cols-6 gap-2 opacity-20 hidden md:grid">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[rgba(44,160,160,1)]" />
              ))}
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <span className="text-[rgba(44,160,160,1)] font-bold tracking-[0.3em] uppercase block">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Engineering Capabilities and Journey to Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Through a client-centric approach, ethical practices, and timely project delivery, we have steadily strengthened our reputation as a dependable engineering and consultancy partner. Our pursuit of excellence is ongoing, as we strive to innovate, expand our capabilities, and contribute meaningfully to sustainable development and overall growth.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
