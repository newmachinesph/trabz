'use client'

import { type ComponentType, type SVGProps } from 'react'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'

interface Feature {
  name: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

interface FeatureGridProps {
  subtitle: string
  title: string
  description: string
  features: Feature[]
}

export default function FeatureGrid({ subtitle, title, description, features }: FeatureGridProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionSection className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary">{subtitle}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {title}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
        </MotionSection>
        <MotionStagger className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <MotionItem key={feature.name}>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </MotionItem>
            ))}
          </dl>
        </MotionStagger>
      </div>
    </div>
  )
}
