"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, MapPin, Briefcase, GraduationCap, Heart, ArrowRight, Loader2, Upload } from "lucide-react"
import { CldUploadWidget } from "next-cloudinary"
import toast from "react-hot-toast"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

const jobs: JobPosition[] = [
  {
    id: "1",
    title: "BIM Engineer",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    description: "Design and implement Building Information Modeling solutions for complex construction projects.",
  },
  {
    id: "2",
    title: "Civil Engineer (QS)",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    description: "Lead quantity surveying and cost management for infrastructure and construction projects.",
  },
  {
    id: "3",
    title: "Project Manager",
    department: "Project Management",
    location: "On-site",
    type: "Full-time",
    description: "Lead cross-functional teams in delivering quality projects on time and within budget.",
  },
  {
    id: "4",
    title: "Consultancy Analyst",
    department: "Consultancy",
    location: "Hybrid",
    type: "Full-time",
    description: "Provide strategic consulting services to clients across various sectors.",
  },
  {
    id: "5",
    title: "Quality Auditor",
    department: "Quality & Safety",
    location: "Hybrid",
    type: "Full-time",
    description: "Ensure project quality and safety standards across all deliverables.",
  },
  {
    id: "6",
    title: "Business Development Associate",
    department: "Business Development",
    location: "Remote",
    type: "Full-time",
    description: "Identify and pursue new business opportunities in key markets.",
  },
]

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage and wellness programs" },
  {
    icon: GraduationCap,
    title: "Professional Growth",
    description: "Continuous learning and career development opportunities",
  },
  {
    icon: Briefcase,
    title: "Competitive Salary",
    description: "Industry-leading compensation and performance bonuses",
  },
  { icon: MapPin, title: "Flexible Work", description: "Remote, hybrid, or on-site work options" },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [resumeUrl, setResumeUrl] = useState<string>("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    coverLetter: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!resumeUrl) {
        toast.error("Please upload your resume")
        setLoading(false)
        return
      }

      const response = await fetch(process.env.NEXT_PUBLIC_SHEET_DB || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              fullName: formData.fullName,
              email: formData.email,
              position: formData.position,
              coverLetter: formData.coverLetter,
              resume: resumeUrl,
              appliedDate: new Date().toLocaleString(),
            },
          ],
          sheet: "careers",
        }),
      })

      if (!response.ok) throw new Error("Failed to submit application")

      toast.success("Application Submitted! 🎉 We'll review your application and get back to you soon.")

      setFormData({ fullName: "", email: "", position: "", coverLetter: "" })
      setResumeUrl("")
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-10 lg:py-14">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-teal-400 font-semibold text-sm tracking-widest uppercase">Build Your Career</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6 leading-tight text-balance">
                Join Our Team of Experts
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're building a world-class team of engineers, consultants, and innovators. If you're passionate about
                solving complex challenges and making an impact, we want to hear from you.
              </p>
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
              >
                Explore Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-10 lg:py-14 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">Why Join Cesource</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-gray-900">We Invest in Our People</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-teal-200 transition-all hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-10 lg:py-14 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">Our Culture</span>
                <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-gray-900 mb-6">
                  Excellence in Everything We Do
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At Cesource, we believe in creating an environment where innovation thrives and talent flourishes. Our
                  team is united by a common mission: delivering stress-free and quality services that transform
                  industries.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We foster a culture of collaboration, continuous learning, and professional growth. Every team member
                  plays a vital role in our success.
                </p>
                <div className="space-y-4">
                  {[
                    "Cutting-edge infrastructure and technology",
                    "Mentorship from industry leaders",
                    "Flexible work arrangements",
                    "International exposure and opportunities",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-team-collaboration.jpg"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-10 lg:py-14 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
                Current Openings (Only two positions)
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-gray-900">Join Our Talented Team</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {jobs.slice(0, 2).map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:border-teal-200"
                >
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-teal-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-teal-500" />
                          {job.type}
                        </span>
                        <span className="text-teal-600 font-semibold">{job.department}</span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedJob === job.id ? "rotate-180" : ""
                      } flex-shrink-0 ml-4`}
                    />
                  </button>

                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                      <a
                        href="#apply-form"
                        className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-form" className="py-10 lg:py-14 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">Ready to apply?</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-gray-900 mb-8">Let's Get Started</h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Position Applied For</label>
                  <input
                    type="text"
                    placeholder="e.g., BIM Engineer, Civil Engineer"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Cover Letter</label>
                  <textarea
                    placeholder="Tell us why you're a great fit..."
                    rows={5}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none disabled:bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Upload Resume/CV</label>
                  <CldUploadWidget
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    onSuccess={(result: any) => {
                      setResumeUrl(result.info.secure_url)
                      toast.success("Resume uploaded successfully!")
                    }}
                    onError={() => {
                      toast.error("Failed to upload resume")
                    }}
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        onClick={() => open()}
                        disabled={loading}
                        className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-500 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        <Upload className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">
                          {resumeUrl ? "Resume uploaded ✓" : "Click to upload resume"}
                        </span>
                      </button>
                    )}
                  </CldUploadWidget>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
