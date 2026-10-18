'use client'

import { useTranslations } from 'next-intl'
import { MotionSection } from '@/components/ui/MotionSection'

export default function TestimonialSection() {
  const t = useTranslations('home.testimonials')

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-gray-700">
                <p>
                  &ldquo;{t('testimonial1Quote')}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{t('testimonial1Initials')}</span>
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{t('testimonial1Name')}</div>
                  <div className="mt-1 text-gray-500">{t('testimonial1Role')}</div>
                </div>
              </figcaption>
            </figure>
          </MotionSection>
          <MotionSection delay={0.15} className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-gray-700">
                <p>
                  &ldquo;{t('testimonial2Quote')}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="size-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary">{t('testimonial2Initials')}</span>
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{t('testimonial2Name')}</div>
                  <div className="mt-1 text-gray-500">{t('testimonial2Role')}</div>
                </div>
              </figcaption>
            </figure>
          </MotionSection>
        </div>
      </div>
    </div>
  )
}
