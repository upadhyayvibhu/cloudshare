import { Check } from "lucide-react"
import type { PricingPlan } from "../../types/pricing"
import Button from "../common/Button"

interface PricingSectionProps {
  pricingPlans: PricingPlan[]
  openSignUp?: () => void
}

const PricingSection = ({ pricingPlans, openSignUp }: PricingSectionProps) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Simple pricing for individuals, professionals, and teams.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex min-h-[580px] flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-purple-500"
                  : "border border-gray-200"
              }`}
            >
              {/* Top section */}
              <div className="relative px-6 py-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {plan.name}
                    </h3>

                    <p className="mt-4 text-base text-gray-500">
                      {plan.description}
                    </p>
                  </div>

                  {plan.popular && (
                    <span className="rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-600">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-8">
                  <span className="text-2xl font-semibold text-gray-900">
                    ₹{plan.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col bg-gray-50 px-6 py-8">
                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-purple-500" />

                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-auto pt-10">
                  <Button
                    onClick={() => openSignUp?.()}
                    variant={plan.popular ? "primary" : "outline"}
                    fullWidth
                    size="md"
                    className="transition-all duration-300"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection