'use client'

import { useTranslations } from 'next-intl'
import { UserPlusIcon, MagnifyingGlassIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'

const stepIcons = [UserPlusIcon, MagnifyingGlassIcon, BanknotesIcon]

const stepKeys = [
  { nameKey: 'step1Name', descKey: 'step1Desc' },
  { nameKey: 'step2Name', descKey: 'step2Desc' },
  { nameKey: 'step3Name', descKey: 'step3Desc' },
] as const

export default function HowItWorks() {
  const t = useTranslations('home.howItWorks')

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionSection className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-primary">{t('subtitle')}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {t('title')}
          </p>
        </MotionSection>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <MotionStagger>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {stepKeys.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <MotionItem key={step.nameKey}>
                    <div className="flex flex-col">
                      <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary">
                          <Icon aria-hidden="true" className="size-6 text-white" />
                        </div>
                        {t(step.nameKey)}
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                        <p className="flex-auto">{t(step.descKey)}</p>
                      </dd>
                    </div>
                  </MotionItem>
                )
              })}
            </dl>
          </MotionStagger>
        </div>
      </div>
    </div>
  )
}
