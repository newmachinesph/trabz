'use client'

import { useState, type ComponentType, type SVGProps } from 'react'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import { motion, AnimatePresence } from 'framer-motion'

interface Feature {
  name: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

interface FeatureCategory {
  id: string
  name: string
  features: Feature[]
}

interface TabbedFeatureSectionProps {
  subtitle: string
  title: string
  description: string
  categories: FeatureCategory[]
}

export default function TabbedFeatureSection({
  subtitle,
  title,
  description,
  categories,
}: TabbedFeatureSectionProps) {
  const [activeTab, setActiveTab] = useState(0)
  const active = categories[activeTab]

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

        {/* Tab bar */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-xl bg-gray-100 p-1.5">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(i)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activeTab === i
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg bg-primary"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature grid for active tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <MotionStagger className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {active.features.map((feature) => (
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
