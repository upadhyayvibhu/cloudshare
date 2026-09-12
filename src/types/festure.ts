export type FeatureIcon =
  | "ArrowUpCircle"
  | "Shield"
  | "Share2"
  | "CreditCard"
  | "FileText"
  | "Clock"

export interface Feature {
  title: string
  description: string
  iconName: FeatureIcon
  iconColor: string
}