'use client'

import { useTranslations } from 'next-intl'
import HeroInner from '@/components/sections/HeroInner'
import { MotionSection } from '@/components/ui/MotionSection'

export default function TermsPageClient() {
  const t = useTranslations('terms')

  const sections = [
    { title: t('acceptance.title'), content: t('acceptance.content') },
    { title: t('eligibility.title'), content: t('eligibility.content') },
    { title: t('accounts.title'), content: t('accounts.content') },
    { title: t('conduct.title'), content: t('conduct.content') },
    { title: t('content.title'), content: t('content.content') },
    { title: t('payments.title'), content: t('payments.content') },
    { title: t('termination.title'), content: t('termination.content') },
    { title: t('disclaimers.title'), content: t('disclaimers.content') },
    { title: t('liability.title'), content: t('liability.content') },
    { title: t('governing.title'), content: t('governing.content') },
    { title: t('changes.title'), content: t('changes.content') },
    { title: t('contactSection.title'), content: t('contactSection.content') },
  ]

  return (
    <main>
      <HeroInner
        subtitle={t('badge')}
        title={t('title')}
        description={t('description')}
      />

      <MotionSection className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-12">{t('lastUpdated')}</p>

          <div className="prose prose-gray max-w-none">
            {sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </main>
  )
}
