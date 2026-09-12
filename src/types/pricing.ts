export interface PricingPlan {
  name: string
  description: string
  price: number
  features: string[]
  buttonText: string
  popular?: boolean
}

export interface PricingSectionProps {
  pricingPlans: PricingPlan[]
}