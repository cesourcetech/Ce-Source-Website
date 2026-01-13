"use client"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
              Terms of Service
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
            className="max-w-3xl prose prose-lg"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services provided by Cesource Technical Private Limited ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cesource Technical Private Limited provides engineering consultancy, project management, risk management, and related professional services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Project Consultancy and Management</li>
                  <li>Technology and Infrastructure Support</li>
                  <li>System Integration Services</li>
                  <li>Cost Consultancy and Analysis</li>
                  <li>Quality and Safety Audits</li>
                  <li>Risk Assessment and Management</li>
                  <li>Advisory and Capacity Building</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Users of our services agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of any project-related information</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not misuse or misrepresent our services</li>
                  <li>Pay for services as agreed in the contract terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All intellectual property rights in our deliverables, methodologies, tools, and proprietary information remain the property of Cesource Technical Private Limited unless explicitly transferred in writing. Clients receive a license to use deliverables for the intended purpose as specified in the project agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality regarding all client information and project details. Both parties agree not to disclose confidential information to third parties without prior written consent, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Cesource Technical Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Cesource Technical Private Limited and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the service agreement as per the terms specified in the contract. Upon termination, all outstanding fees become immediately due, and both parties must return or destroy confidential information as appropriate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Continued use of our services after any changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-secondary rounded-lg">
                  <p className="font-semibold">Cesource Technical Private Limited</p>
                  <p className="text-muted-foreground">Sandalpur Road, Near Kumhrar</p>
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

export default TermsOfService;
