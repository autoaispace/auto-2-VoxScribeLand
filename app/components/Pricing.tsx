import { Check } from "lucide-react";

/**
 * Pricing section component
 * Displays pricing plans and features
 */
export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out VoxScribe",
      features: [
        "5 transcriptions per month",
        "Basic AI processing",
        "Standard accuracy",
        "Community support",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For professionals and content creators",
      features: [
        "Unlimited transcriptions",
        "Advanced AI processing",
        "High accuracy",
        "Multiple output styles",
        "Priority support",
        "Export & API access",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "On-premise options",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2 className="section-title mb-4">Simple, transparent pricing</h2>
        <p className="section-subtitle mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card card-hover p-6 md:p-8 ${
              plan.highlight
                ? "border-2 border-[var(--primary)] relative"
                : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-slate-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-slate-500">/{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-slate-600">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className={`block w-full text-center ${
                plan.highlight ? "btn-primary" : "btn-secondary"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

