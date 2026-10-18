'use client'

import { useTranslations } from 'next-intl'
import HeroInner from '@/components/sections/HeroInner'
import { MotionSection } from '@/components/ui/MotionSection'

export default function PrivacyPageClient() {
  const t = useTranslations('privacy')

  const sections = [
    { title: t('collection.title'), content: t('collection.content') },
    { title: t('usage.title'), content: t('usage.content') },
    { title: t('sharing.title'), content: t('sharing.content') },
    { title: t('storage.title'), content: t('storage.content') },
    { title: t('rights.title'), content: t('rights.content') },
    { title: t('cookies.title'), content: t('cookies.content') },
    { title: t('children.title'), content: t('children.content') },
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
