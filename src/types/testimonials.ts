export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  message: string;
}

export interface TestimonialSectionProps {
  testimonials?: Testimonial[];
}