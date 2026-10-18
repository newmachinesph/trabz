'use client'

import { useTranslations } from 'next-intl'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'

const statKeys = [
  { labelKey: 'stat1Label', valueKey: 'stat1Value' },
  { labelKey: 'stat2Label', valueKey: 'stat2Value' },
  { labelKey: 'stat3Label', valueKey: 'stat3Value' },
  { labelKey: 'stat4Label', valueKey: 'stat4Value' },
] as const

export default function StatsSection() {
  const t = useTranslations('home.stats')

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionSection className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base/7 font-semibold text-primary">{t('subtitle')}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {t('title')}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {t('description')}
          </p>
        </MotionSection>
        <MotionStagger>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {statKeys.map((stat) => (
              <MotionItem key={stat.labelKey}>
                <div className="flex flex-col gap-y-3 border-l border-primary/30 pl-6">
                  <dt className="text-sm/6 text-gray-600">{t(stat.labelKey)}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{t(stat.valueKey)}</dd>
                </div>
              </MotionItem>
            ))}
          </dl>
        </MotionStagger>
      </div>
    </div>
  )
}
