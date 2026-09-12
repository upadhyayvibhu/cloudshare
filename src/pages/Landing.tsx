import { useEffect } from "react"
import { useClerk, useUser } from "@clerk/react"
import { features, pricingPlans, testimonials } from "../assets/data"
import CTASection from "../components/landing/CTASection"
import FeaturesSection from "../components/landing/FeaturesSection"
import FooterSection from "../components/landing/FooterSection"
import HeroSection from "../components/landing/HeroSection"
import PricingSection from "../components/landing/PricingSection"
import TestimonialSection from "../components/landing/TestimonialSection"
import { useNavigate } from "react-router-dom"

const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">

      {/* Hero section */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />

      {/* featues */}
      <FeaturesSection features={features} />


      {/* pricing section */}
      <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp}/>

      {/* testimonials */}
      <TestimonialSection testimonials={testimonials} />

      {/* CTA sections */}
      <CTASection openSignUp={openSignUp} />

      {/* Footer Section */}
      <FooterSection />

    </div>
  )
}

export default Landing
