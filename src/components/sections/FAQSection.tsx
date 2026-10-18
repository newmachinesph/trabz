'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { MotionSection } from '@/components/ui/MotionSection'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  subtitle: string
  title: string
  faqs: FAQ[]
}

export default function FAQSection({ subtitle, title, faqs }: FAQSectionProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <MotionSection className="text-center">
            <h2 className="text-base/7 font-semibold text-primary">{subtitle}</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</p>
          </MotionSection>
          <dl className="mt-10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 border-b border-gray-900/10">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-4 sm:pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
