import { Clock, FileText, Zap } from "lucide-react";

/**
 * Product Value section
 * Shows pain points, solutions, and user benefits
 */
export default function ProductValue() {
  const painPoints = [
    {
      icon: Clock,
      title: "Ideas are clear, but typing is too slow",
      description: "Your thoughts flow faster than you can type them out",
    },
    {
      icon: FileText,
      title: "Recordings exist, but no time to review",
      description: "Audio files pile up without ever being transcribed or used",
    },
    {
      icon: Zap,
      title: "Raw transcripts are messy and unusable",
      description: "Voice-to-text output is full of filler words and disorganized",
    },
  ];

  const solutions = [
    {
      step: "01",
      title: "Just start speaking",
      description: "No typing required - capture ideas instantly",
    },
    {
      step: "02",
      title: "Automatic transcription and organization",
      description: "System converts speech to text automatically",
    },
    {
      step: "03",
      title: "AI outputs structured, readable text",
      description: "Get polished content ready to use or edit",
    },
  ];

  const benefits = [
    "Save time on recording and organizing",
    "Increase content production efficiency",
    "Preserve and reuse every expression",
  ];

  return (
    <section
      id="scenarios"
      className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24"
    >
      {/* Pain Points */}
      <div className="mb-16 md:mb-20 lg:mb-24">
        <h2 className="section-title text-center mb-4">
          We understand your challenges
        </h2>
        <p className="section-subtitle text-center mx-auto mb-12">
          Common problems that slow down your workflow
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <div key={index} className="card card-hover p-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="mb-16 md:mb-20 lg:mb-24">
        <h2 className="section-title text-center mb-4">Our solution</h2>
        <p className="section-subtitle text-center mx-auto mb-12">
          A simple three-step process that transforms your workflow
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="card p-6 relative">
              <div className="text-4xl font-bold text-[var(--primary)] opacity-20 mb-4">
                {solution.step}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-slate-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="section-title text-center mb-4">What you'll gain</h2>
        <p className="section-subtitle text-center mx-auto mb-12">
          Real benefits for knowledge workers and content creators
        </p>
        <div className="card p-8 md:p-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

