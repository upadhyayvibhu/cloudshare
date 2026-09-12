import type { Feature } from "../types/festure";
import type { PricingPlan } from "../types/pricing";
import type { Testimonial } from "../types/testimonials";

export const features: Feature[] = [
  {
    title: "Easy File Upload",
    description:
      "Quickly upload your files with our intuitive drag-and-drop interface.",
    iconName: "ArrowUpCircle",
    iconColor: "#8b5cf6",
  },
  {
    title: "Secure Storage",
    description:
      "Your files are encrypted and stored securely in our cloud infrastructure.",
    iconName: "Shield",
    iconColor: "#10b981",
  },
  {
    title: "Simple Sharing",
    description:
      "Share files with anyone using secure links that you control.",
    iconName: "Share2",
    iconColor: "#3b82f6",
  },
  {
    title: "Flexible Credits",
    description:
      "Pay only for what you use with our credit-based system.",
    iconName: "CreditCard",
    iconColor: "#f59e0b",
  },
  {
    title: "File Management",
    description:
      "Organize, preview, and manage your files from any device.",
    iconName: "FileText",
    iconColor: "#ec4899",
  },
  {
    title: "Transaction History",
    description:
      "Keep track of all your credit purchases and usage.",
    iconName: "Clock",
    iconColor: "#6366f1",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: 0,
    features: [
      "5 file uploads",
      "Basic file sharing",
      "7-day file retention",
      "Email support",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Premium",
    description: "For individuals with larger needs",
    price: 500,
    features: [
      "500 file uploads",
      "Advanced file sharing",
      "30-day file retention",
      "Priority email support",
      "File analytics",
    ],
    buttonText: "Go Premium",
    popular: true,
  },
  {
    name: "Ultimate",
    description: "For teams and businesses",
    price: 2500,
    features: [
      "5000 file uploads",
      "Team sharing capabilities",
      "Unlimited file retention",
      "24/7 priority support",
      "Advanced analytics",
      "API access",
    ],
    buttonText: "Go Ultimate",
  },
];


export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "CreativeMinds Inc.",
    rating: 5,
    message:
      "CloudShare has transformed how our team collaborates on creative assets. The secure sharing and intuitive interface have made file management a breeze.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    company: "Self-employed",
    rating: 5,
    message:
      "As a freelancer, I need to share large design files with clients securely. CloudShare's simple interface and reasonable pricing make it my go-to solution.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Project Manager",
    company: "TechSolutions Ltd.",
    rating: 4,
    message:
      "Managing project files across multiple teams used to be a nightmare until we found CloudShare. Now everything is organized and accessible exactly when we need it.",
  },
]
