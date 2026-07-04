import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  FileSearch,
  Globe,
  Link2,
  Mail,
  Menu,
  MessageSquareWarning,
  Newspaper,
  SearchCheck,
  ShieldCheck,
  ShieldEllipsis,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Negative Review Removal",
    description:
      "Professional support for disputing and addressing harmful reviews across major platforms.",
    icon: MessageSquareWarning,
  },
  {
    title: "Google Business Profile Support",
    description:
      "Issue handling, profile guidance, and review-related support for business visibility and credibility.",
    icon: Building2,
  },
  {
    title: "Article Removal Requests",
    description:
      "Structured outreach and evidence-backed requests for damaging or misleading article content.",
    icon: FileSearch,
  },
  {
    title: "Search Result Deindexing Support",
    description:
      "Assistance with reducing visibility of outdated or harmful search results through the proper channels.",
    icon: SearchCheck,
  },
  {
    title: "Trustpilot Review Support",
    description:
      "Case preparation and reporting support for reviews that violate platform standards.",
    icon: Star,
  },
  {
    title: "Reputation Monitoring",
    description:
      "Ongoing monitoring to catch emerging reputation issues before they escalate.",
    icon: ShieldEllipsis,
  },
  {
    title: "Positive Article Writing & Publishing",
    description:
      "We help businesses strengthen their online image through professional positive articles, brand stories, and reputation-building content.",
    icon: Newspaper,
  },
  {
    title: "Positive Content & Brand Protection",
    description:
      "Content strategy support designed to strengthen trust signals and protect brand perception.",
    icon: Sparkles,
  },
];

const steps = [
  "Submit the link or issue",
  "We review the case",
  "We create the best removal or reputation strategy",
  "You receive updates until completion",
];

const reasons = [
  "Confidential process",
  "Professional communication",
  "Clear progress updates",
  "Evidence-based requests",
  "Support for individuals and businesses",
  "Secure and discreet service",
];

const contactEmail = "rufusfavour@reputationguard.xyz";
const caseReviewHref =
  "mailto:rufusfavour@reputationguard.xyz?subject=Reputation%20Guard%20Case%20Review%20Request&body=Hello%20Reputation%20Guard%2C%0A%0AI%20would%20like%20to%20request%20a%20case%20review.%0A%0ALink%2FURL%3A%0AIssue%20description%3A%0A%0AThank%20you.";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(17,45,140,0.09),_transparent_34%),radial-gradient(circle_at_90%_12%,_rgba(255,77,77,0.08),_transparent_16%),linear-gradient(180deg,_#ffffff_0%,_#f7faff_42%,_#eef4ff_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(17,45,140,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,45,140,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(255,255,255,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/reputation-guard-logo.png"
              alt="Reputation Guard logo"
              className="h-10 w-10 rounded-xl border border-[var(--color-line)] object-cover shadow-[0_10px_26px_rgba(17,45,140,0.12)]"
            />
            <div>
              <p className="font-display text-[1.1rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-blue)]">
                Reputation Guard
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Confidential Reputation Support
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold tracking-[0.12em] text-[var(--color-muted)] transition hover:text-[var(--color-blue)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={caseReviewHref} className="primary-button">
              Request Consultation
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[var(--color-line)] bg-[rgba(255,255,255,0.96)] px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold tracking-[0.12em] text-[var(--color-muted)]"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={caseReviewHref}
                className="primary-button text-center"
                onClick={closeMenu}
              >
                Request Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-18 pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.75fr)] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-18">
          <div className="animate-fade-up max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-muted)] shadow-[0_10px_30px_rgba(17,45,140,0.08)]">
              <ShieldCheck size={16} className="text-[var(--color-red)]" />
              Trusted support for sensitive online reputation issues
            </div>

            <h1 className="max-w-2xl font-display text-[3rem] leading-[0.98] font-semibold text-[var(--color-blue)] sm:text-[3.7rem] lg:text-[4.4rem]">
              Protect Your Reputation. Restore Trust.
            </h1>

            <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-[var(--color-muted)] sm:text-[1.12rem]">
              Reputation Guard helps individuals and businesses manage harmful
              online content, negative reviews, outdated search results, and
              build stronger online credibility through strategic positive
              content.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={caseReviewHref} className="primary-button">
                Request a Consultation
                <ArrowRight size={18} />
              </a>
              <a href={caseReviewHref} className="secondary-button">
                Send Us a Link
                <Link2 size={18} />
              </a>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { value: "Confidential", label: "Case handling from first contact" },
                { value: "Professional", label: "Evidence-based communication" },
                { value: "Strategic", label: "Removal support and positive reputation-building" },
              ].map((item) => (
                <div key={item.value} className="glass-card p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up-delayed">
            <div className="relative mx-auto max-w-[24rem] overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,248,255,0.92))] p-5 shadow-[0_24px_60px_rgba(17,45,140,0.14)] sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(17,45,140,0.24)] to-transparent" />
              <div className="absolute -right-10 -top-8 h-32 w-32 rounded-full bg-[rgba(255,77,77,0.12)] blur-3xl" />
              <img
                src="/reputation-guard-logo.png"
                alt="Reputation Guard emblem"
                className="mx-auto w-full max-w-[15rem] rounded-[1.35rem] border border-[var(--color-line)] object-cover shadow-[0_18px_40px_rgba(17,45,140,0.12)]"
              />

              <div className="mt-6 space-y-3">
                {[
                  "Negative reviews and harmful listings",
                  "Outdated search visibility and article issues",
                  "Positive articles and credibility-building support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[1.15rem] border border-[var(--color-line)] bg-white/80 px-4 py-3"
                  >
                    <span className="text-sm text-[var(--color-muted)]">{item}</span>
                    <ChevronRight size={18} className="text-[var(--color-red)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-20">
          <div className="section-heading">
            <span>Services</span>
            <h2>Practical reputation support for high-stakes online issues.</h2>
            <p>
              Each case is reviewed individually to determine the strongest
              removal path, support request, or reputation-building strategy.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <article key={title} className="service-card">
                <div className="icon-shell">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-20">
          <div className="section-heading">
            <span>How It Works</span>
            <h2>A clear process from first review to final updates.</h2>
            <p>
              We keep the process structured, discreet, and easy to follow so
              you always know the current status of your removal or reputation
              support case.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="process-card">
                <div className="process-index">0{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-us" className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-20">
          <div className="rounded-[1.85rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,248,255,0.92))] px-6 py-8 shadow-[0_20px_50px_rgba(17,45,140,0.1)] lg:px-10 lg:py-9">
            <div className="section-heading !max-w-3xl">
              <span>Why Choose Reputation Guard</span>
              <h2>Built for trust, discretion, and professional execution.</h2>
              <p>
                Reputation-sensitive cases require careful communication,
                evidence, and consistency. The same discipline applies to
                removal efforts and positive reputation-building work.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason} className="reason-card">
                  <BadgeCheck size={20} className="text-[var(--color-red)]" />
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-20">
          <div className="cta-panel">
            <div>
              <span className="section-kicker">Case Review</span>
              <h2>Need harmful content reviewed?</h2>
              <p>
                Send us the link and a short explanation. Our team will review
                the case and respond with the best next step, whether that
                involves removal support or positive credibility-building.
              </p>
            </div>
            <a href={caseReviewHref} className="primary-button">
              Contact Reputation Guard
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-card p-7 lg:p-8">
              <span className="section-kicker">Contact</span>
              <h2 className="mt-4 font-display text-[2.2rem] leading-tight font-semibold text-[var(--color-blue)] lg:text-[2.6rem]">
                Start with a confidential review.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                Send us the affected link and a short explanation of the issue.
                Our team will review the case and respond with the most
                appropriate next step.
              </p>

              <a
                href={caseReviewHref}
                className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-blue)] transition hover:border-[var(--color-red)] hover:text-[var(--color-blue)]"
              >
                <Mail size={18} className="text-[var(--color-red)]" />
                {contactEmail}
              </a>

              <div className="mt-10 space-y-4">
                {[
                  "Secure and discreet communication",
                  "Support for individuals and businesses",
                  "Clear updates while your case progresses",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                    <Globe size={16} className="text-[var(--color-blue)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-cta-card">
              <div className="contact-cta-top">
                <span className="contact-chip">Confidential Email Review</span>
                <h3>Share the issue directly with Reputation Guard.</h3>
                <p>
                  Send the affected link and a concise explanation. We will
                  assess the issue, review the most credible path forward, and
                  respond with the next step for removal support or positive
                  reputation-building.
                </p>
              </div>

              <div className="contact-cta-points">
                {[
                  "Professional, discreet communication",
                  "Structured review of the link or issue",
                  "Clear response on the best next step",
                ].map((item) => (
                  <div key={item} className="contact-point">
                    <BadgeCheck size={18} className="text-[var(--color-red)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href={caseReviewHref} className="primary-button">
                Email Reputation Guard
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-line)] bg-[rgba(255,255,255,0.9)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src="/reputation-guard-logo.png"
              alt="Reputation Guard logo"
              className="h-14 w-14 rounded-2xl border border-[var(--color-line)] object-cover"
            />
            <div>
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.22em] text-[var(--color-blue)]">
                Reputation Guard
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Protecting Your Reputation. Securing Your Future.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${contactEmail}`}
            className="text-sm font-semibold tracking-[0.12em] text-[var(--color-muted)] transition hover:text-[var(--color-blue)]"
          >
            {contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
