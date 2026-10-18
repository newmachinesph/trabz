'use client'

import { motion } from 'framer-motion'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

interface TestimonialGridProps {
  testimonials: Testimonial[]
  subtitle: string
  title: string
}

export default function TestimonialGrid({ testimonials, subtitle, title }: TestimonialGridProps) {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-primary">{subtitle}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            {title}
          </p>
        </MotionSection>
        <MotionStagger className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <MotionItem key={testimonial.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
              >
                <blockquote className="text-base/7 text-gray-700">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </figcaption>
              </motion.div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </div>
  )
}
