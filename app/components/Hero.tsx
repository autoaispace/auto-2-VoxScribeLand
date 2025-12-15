import { Mic, ArrowRight } from "lucide-react";

/**
 * Hero section component
 * Main landing section with headline, subtitle, and primary CTA
 */
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
            Turn every word you speak into{" "}
            <span className="text-[var(--primary)]">clear, usable text</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Transform your voice into structured, readable, and reusable
            high-quality text content with AI-powered voice recognition and
            language models.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#cta" className="btn-primary inline-flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>

          {/* Helper Text */}
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-sm text-slate-500">
              ✓ No setup required
            </p>
            <p className="text-sm text-slate-500">
              ✓ Perfect for meetings, ideas, writing, and learning
            </p>
          </div>
        </div>

        {/* Right: Visual Element */}
        <div className="relative">
          <div className="glass rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-2)] flex items-center justify-center">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <div className="text-center space-y-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto animate-pulse"></div>
                <p className="text-sm font-medium text-slate-700">
                  Recording...
                </p>
              </div>
            </div>
          </div>

          {/* Decorative gradients */}
          <div
            className="absolute -z-10 top-0 left-0 w-full h-full rounded-2xl opacity-50"
            style={{
              background:
                "radial-gradient(circle at 10% 20%, rgba(22, 93, 255, 0.1), transparent 25%), radial-gradient(circle at 80% 0%, rgba(123, 97, 255, 0.12), transparent 20%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

