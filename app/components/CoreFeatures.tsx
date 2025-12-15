import { Mic, FileText, Sparkles, CheckCircle } from "lucide-react";

/**
 * Core Features section
 * Displays the 4-step process: Voice Input → Transcription → AI Processing → Output
 */
export default function CoreFeatures() {
  const features = [
    {
      icon: Mic,
      title: "Voice Input",
      description: "Record or upload audio anytime, anywhere. Perfect for capturing ideas, meetings, thoughts, and drafts.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Automatic Transcription",
      description: "Quickly convert speech to text with high accuracy. Output readable base text automatically.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Sparkles,
      title: "AI Text Organization & Rewriting",
      description: "Remove verbal fillers and redundancy. Optimize sentence structure and logic for written expression.",
      gradient: "from-[var(--primary)] to-[var(--primary-2)]",
    },
    {
      icon: CheckCircle,
      title: "Ready-to-Use Output",
      description: "Get polished content you can copy, export, edit, or use directly as material for future content creation.",
      gradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <section
      id="features"
      className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2 className="section-title mb-4">How it works</h2>
        <p className="section-subtitle mx-auto">
          A streamlined process that transforms voice into polished text in four
          simple steps
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="card card-hover p-6 flex flex-col">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 flex-shrink-0`}
            >
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-slate-400">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Flow Visual */}
      <div className="mt-12 hidden md:flex items-center justify-center gap-4">
        {features.map((_, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
            {index < features.length - 1 && (
              <div className="w-16 h-0.5 bg-slate-200"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

