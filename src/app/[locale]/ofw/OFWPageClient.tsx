'use client'

import { useTranslations } from 'next-intl'
import HeroInner from '@/components/sections/HeroInner'
import FeatureGrid from '@/components/sections/FeatureGrid'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import {
  GlobeAltIcon,
  DocumentTextIcon,
  PhoneIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

export default function OFWHub() {
  const t = useTranslations('ofw')

  const ofwFeatures = [
    { name: t('features.feature1Name'), description: t('features.feature1Desc'), icon: GlobeAltIcon },
    { name: t('features.feature2Name'), description: t('features.feature2Desc'), icon: DocumentTextIcon },
    { name: t('features.feature3Name'), description: t('features.feature3Desc'), icon: PhoneIcon },
    { name: t('features.feature4Name'), description: t('features.feature4Desc'), icon: BanknotesIcon },
    { name: t('features.feature5Name'), description: t('features.feature5Desc'), icon: ShieldCheckIcon },
    { name: t('features.feature6Name'), description: t('features.feature6Desc'), icon: AcademicCapIcon },
    { name: t('features.feature7Name'), description: t('features.feature7Desc'), icon: StarIcon },
  ]

  const ofwStats = [
    { label: t('familyDashboard.stat1Label'), value: t('familyDashboard.stat1Value') },
    { label: t('familyDashboard.stat2Label'), value: t('familyDashboard.stat2Value') },
    { label: t('familyDashboard.stat3Label'), value: t('familyDashboard.stat3Value') },
    { label: t('familyDashboard.stat4Label'), value: t('familyDashboard.stat4Value') },
  ]

  const transactions = [
    { to: t('familyDashboard.tx1To'), amount: t('familyDashboard.tx1Amount'), status: t('familyDashboard.tx1Status') },
    { to: t('familyDashboard.tx2To'), amount: t('familyDashboard.tx2Amount'), status: t('familyDashboard.tx2Status') },
    { to: t('familyDashboard.tx3To'), amount: t('familyDashboard.tx3Amount'), status: t('familyDashboard.tx3Status') },
  ]

  const ofwFaqs = [
    { question: t('faqs.faq1Question'), answer: t('faqs.faq1Answer') },
    { question: t('faqs.faq2Question'), answer: t('faqs.faq2Answer') },
    { question: t('faqs.faq3Question'), answer: t('faqs.faq3Answer') },
    { question: t('faqs.faq4Question'), answer: t('faqs.faq4Answer') },
    { question: t('faqs.faq5Question'), answer: t('faqs.faq5Answer') },
  ]

  return (
    <>
      <HeroInner
        subtitle={t('hero.subtitle')}
        title={t('hero.title')}
        description={t('hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2600"
      />
      <FeatureGrid
        subtitle={t('features.subtitle')}
        title={t('features.title')}
        description={t('features.description')}
        features={ofwFeatures}
      />
      <div className="bg-gradient-to-br from-primary to-primary-hover py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MotionSection>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className="text-base/7 font-semibold text-secondary">{t('familyDashboard.subtitle')}</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {t('familyDashboard.title')}
                </p>
                <p className="mt-6 text-lg/8 text-gray-300">
                  {t('familyDashboard.description')}
                </p>
                <MotionStagger>
                  <dl className="mt-10 grid grid-cols-2 gap-4">
                    {ofwStats.map((stat) => (
                      <MotionItem key={stat.label}>
                        <div className="rounded-lg bg-white/10 p-4">
                          <dt className="text-xs text-gray-400">{stat.label}</dt>
                          <dd className="mt-1 text-2xl font-bold text-secondary">{stat.value}</dd>
                        </div>
                      </MotionItem>
                    ))}
                  </dl>
                </MotionStagger>
              </div>
              <div className="flex items-center justify-center">
                <MotionItem>
                  <div className="w-full max-w-md rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                    <p className="text-sm font-medium text-white mb-4">{t('familyDashboard.remittanceTrackerTitle')}</p>
                    <div className="rounded-lg bg-secondary/10 p-4 text-center mb-4">
                      <p className="text-xs text-gray-400">{t('familyDashboard.totalSentLabel')}</p>
                      <p className="mt-1 text-3xl font-bold text-secondary">{t('familyDashboard.totalSentValue')}</p>
                    </div>
                    <div className="space-y-3">
                      {transactions.map((tx) => (
                        <div key={tx.to} className="flex items-center justify-between gap-4 rounded-lg bg-white/10 p-3">
                          <div className="min-w-0">
                            <p className="text-sm text-white truncate">{tx.to}</p>
                            <p className="text-xs text-gray-400">{tx.status}</p>
                          </div>
                          <p className="text-sm font-medium text-white whitespace-nowrap">{tx.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionItem>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
      <FAQSection
        subtitle={t('faqs.subtitle')}
        title={t('faqs.title')}
        faqs={ofwFaqs}
      />
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryText={t('cta.primaryText')}
        primaryHref="https://portal.trabz.ph/register"
        secondaryText={t('cta.secondaryText')}
        secondaryHref="/contact"
        dark
      />
    </>
  )
}
