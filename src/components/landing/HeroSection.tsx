import { assets } from "../../assets/assets"
import Button from "../common/Button"

interface HeroSectionProps {
  openSignIn: () => void
  openSignUp: () => void
}

const HeroSection = ({ openSignIn, openSignUp }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-80"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">
                Share Files Securely with
              </span>

              <span className="block text-purple-500">
                CloudShare
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Upload, manage, and share your files securely. Access them
              anywhere, anytime.
            </p>

            {/* Actions */}
            <div className="mx-auto mt-10 max-w-sm sm:max-w-none">
              <div className="space-y-4 sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <Button
                  onClick={() => openSignUp()}
                  variant="primary"
                  size="lg"
                  className="w-full shadow-lg transition-shadow hover:shadow-xl"
                >
                  Get Started
                </Button>

                <Button
                  onClick={() => openSignIn()}
                  variant="secondary"
                  size="lg"
                  className="w-full shadow-lg transition-shadow hover:shadow-xl"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl">
            <img
              src={assets.dashboard}
              alt="CloudShare file management dashboard"
              className="block h-auto w-full object-contain"
            />

            {/* Subtle image overlay */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Security message */}
        <div className="pb-16 pt-8 text-center sm:pb-20">
          <p className="mx-auto max-w-3xl text-base text-gray-500">
            All your files are encrypted and stored securely with
            enterprise-grade security protocols.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection