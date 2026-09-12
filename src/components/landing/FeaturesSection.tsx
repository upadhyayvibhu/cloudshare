import {
  ArrowUpCircle,
  Clock,
  CreditCard,
  FileText,
  Share2,
  Shield,
} from "lucide-react"

// 1. Define which icon names are allowed
type FeatureIcon =
  | "ArrowUpCircle"
  | "Shield"
  | "Share2"
  | "CreditCard"
  | "FileText"
  | "Clock"

// 2. Define the structure of each feature
interface Feature {
  title: string
  description: string
  iconName: FeatureIcon
  iconColor: string
}

// 3. Props received by FeaturesSection
interface FeaturesSectionProps {
  features: Feature[]
}

// 4. Map icon names to Lucide components
const iconMap = {
  ArrowUpCircle,
  Shield,
  Share2,
  CreditCard,
  FileText,
  Clock,
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for file sharing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            CloudShare provides all the tools you need to manage your digital
            content
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              // Get the correct Lucide icon
              const Icon = iconMap[feature.iconName]

              return (
                <div key={feature.title} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                    <div className="-mt-6">
                      {/* Floating icon */}
                      <span className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                        <Icon
                          className="h-6 w-6"
                          color={feature.iconColor}
                          strokeWidth={2}
                        />
                      </span>

                      {/* Feature title */}
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {feature.title}
                      </h3>

                      {/* Feature description */}
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection