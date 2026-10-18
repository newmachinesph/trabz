'use client'

import { useTranslations } from 'next-intl'
import HeroInner from '@/components/sections/HeroInner'
import { MotionSection } from '@/components/ui/MotionSection'

export default function DataProtectionPageClient() {
  const t = useTranslations('dataProtection')

  const sections = [
    { title: t('framework.title'), content: t('framework.content') },
    { title: t('principles.title'), content: t('principles.content') },
    { title: t('lawfulBasis.title'), content: t('lawfulBasis.content') },
    { title: t('measures.title'), content: t('measures.content') },
    { title: t('breach.title'), content: t('breach.content') },
    { title: t('transfers.title'), content: t('transfers.content') },
    { title: t('dpo.title'), content: t('dpo.content') },
    { title: t('complaints.title'), content: t('complaints.content') },
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
