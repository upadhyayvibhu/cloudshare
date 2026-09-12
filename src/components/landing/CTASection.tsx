import Button from "../common/Button"

interface CTASectionProps {
  openSignUp?: () => void
}

const CTASection = ({ openSignUp }: CTASectionProps) => {
  return (
    <section className="bg-purple-600">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          
          {/* CTA Content */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block">Create your account today.</span>
            </h2>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <Button
              onClick={() => openSignUp?.()}
              variant="secondary"
              size="md"
              className="px-7 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Sign up for free
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTASection