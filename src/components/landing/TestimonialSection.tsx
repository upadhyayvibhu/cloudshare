import { Star, UserRound } from "lucide-react"
import type { TestimonialSectionProps } from "../../types/testimonials"

const TestimonialSection = ({ testimonials = [] }: TestimonialSectionProps) => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Professionals Worldwide
          </h2>

          <p className="mt-4 text-lg text-gray-500 sm:text-xl">
            See what our users have to say about CloudShare
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-lg border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* User */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100">
                  <UserRound
                    className="h-6 w-6 text-purple-600"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div
                className="mt-5 flex gap-1"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Message */}
              <blockquote className="mt-5">
                <p className="text-base italic leading-7 text-gray-600">
                  &ldquo;{testimonial.message}&rdquo;
                </p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection