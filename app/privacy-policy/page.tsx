"use client"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-background/70">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cesource Technical Private Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in various ways:
                </p>
                
                <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you engage our services or contact us, we may collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Company name and job title</li>
                  <li>Project-related information</li>
                  <li>Payment and billing information</li>
                  <li>Communication records and correspondence</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Technical Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral source and navigation patterns</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to inquiries and providing customer support</li>
                  <li>Sending newsletters and marketing communications (with consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                  <li>Detecting and preventing fraud or security issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in providing our services</li>
                  <li><strong>Business Partners:</strong> Trusted partners for joint projects (with your consent)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related data may be retained for extended periods as required by professional and regulatory standards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete data</li>
                  <li>Deletion of your personal data (subject to legal requirements)</li>
                  <li>Objection to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Note that disabling cookies may affect certain website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-6 bg-secondary rounded-lg">
                  <p className="font-semibold">Cesource Technical Private Limited</p>
                  <p className="text-muted-foreground">Data Protection Officer</p>
                  <p className="text-muted-foreground">Sandanpur Road, Near Kumhrar</p>
                  <p className="text-muted-foreground">Patna, Bihar, India - 800006</p>
                  <p className="text-muted-foreground mt-2">Emails: info@csetepl.com</p>
                  <p className="text-muted-foreground">Phone: +91 96085 35740</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
