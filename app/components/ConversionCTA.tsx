import { ArrowRight, Check } from "lucide-react";

/**
 * Conversion CTA section
 * Final call-to-action before footer
 */
export default function ConversionCTA() {
  const highlights = [
    "No learning curve required",
    "Works immediately out of the box",
    "Get clear text in minutes",
  ];

  return (
    <section
      id="cta"
      className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24"
    >
      <div className="card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--primary), var(--primary-2))",
          }}
        ></div>

        <div className="relative z-10">
          <h2 className="section-title mb-4">
            Ready to transform your voice into text?
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Start using AI-powered voice-to-text conversion today. No setup, no
            complexity—just results.
          </p>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <Check className="w-4 h-4 text-[var(--primary)]" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" className="btn-primary inline-flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="btn-secondary">
              Try AI Voice Transcription
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

