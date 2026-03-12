import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.04),transparent_55%)]" />

    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Link>
        <div className="font-display text-xl font-bold">
          <span className="text-gradient-gold">Booked</span>
          <span className="text-foreground">.Dental</span>
        </div>
        <div className="w-24" />
      </div>
    </header>

    <main className="container relative z-10 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Privacy <span className="text-gradient-gold">Policy</span>
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">Last Updated: March 12, 2026</p>

        <div className="space-y-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p>
            Booked.Dental ("we", "our", or "us") operates the Booked.Dental website and provides marketing services designed to help dental clinics generate consultation calls and patient inquiries. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <p>By using our website, you consent to the practices described in this policy.</p>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide when interacting with our website, including when you fill out forms, schedule a call, or contact us.
            </p>
            <p className="mb-3">The types of information we may collect include:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>City or location information</li>
              <li>Practice information</li>
              <li>Any information you provide when scheduling a meeting or submitting a form</li>
            </ul>
            <p className="mt-4">We may also automatically collect certain technical information when you visit the site.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Automatically Collected Information</h2>
            <p className="mb-3">When you access the website, we may automatically collect information such as:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referring website or source</li>
            </ul>
            <p className="mt-4">This information helps us understand how visitors use our website and helps improve our services.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Respond to inquiries and requests</li>
              <li>Schedule and conduct strategy calls</li>
              <li>Provide information about our services</li>
              <li>Improve our website and marketing systems</li>
              <li>Analyze website usage and performance</li>
              <li>Communicate with you about services or updates</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">How We Share Information</h2>
            <p className="mb-3">
              We may share information with trusted third-party service providers that help us operate the website and provide services. These may include:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Scheduling software providers</li>
              <li>Website hosting platforms</li>
              <li>Analytics tools</li>
              <li>Advertising platforms</li>
            </ul>
            <p className="mt-4">
              These providers only receive the information necessary to perform their services and are expected to maintain appropriate confidentiality.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              Our website may use cookies and similar technologies to improve your browsing experience and analyze website performance.
            </p>
            <p className="mb-3">Cookies may be used to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Understand user behavior</li>
              <li>Measure marketing performance</li>
              <li>Improve site functionality</li>
            </ul>
            <p className="mt-4">
              You may disable cookies in your browser settings, although some parts of the site may not function properly without them.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external websites.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information and maintain appropriate technical and organizational safeguards. However, no method of internet transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Your Rights</h2>
            <p className="mb-3">
              Depending on your location, you may have rights regarding your personal information, including the right to request access to, correction of, or deletion of your personal data.
            </p>
            <p>If you would like to exercise these rights, you may contact us using the contact information below.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When changes are made, the updated version will be posted on this page with a revised "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Contact Information</h2>
            <p className="mb-3">
              If you have any questions about this Privacy Policy or how your information is handled, you may contact us at:
            </p>
            <address className="not-italic">
              <p className="font-semibold text-foreground">Booked.Dental</p>
              <p>131 Continental Dr, Suite 305</p>
              <p>Newark, DE 19713</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:David@Booked.Dental" className="text-primary hover:underline underline-offset-4">
                  David@Booked.Dental
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+972546790378" className="text-primary hover:underline underline-offset-4">
                  +972 54-679-0378
                </a>
              </p>
            </address>
          </section>
        </div>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
