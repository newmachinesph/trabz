'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import HeroInner from '@/components/sections/HeroInner'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function Presyo() {
  const t = useTranslations('pricing')
  const tCommon = useTranslations('common')
  const [annual, setAnnual] = useState(false)

  const tiers = [
    {
      name: t('tiers.tier1Name'),
      id: 'tier-libre',
      priceMonthly: t('tiers.tier1PriceMonthly'),
      priceAnnual: t('tiers.tier1PriceAnnual'),
      description: t('tiers.tier1Description'),
      features: [
        t('tiers.tier1Feature1'),
        t('tiers.tier1Feature2'),
        t('tiers.tier1Feature3'),
        t('tiers.tier1Feature4'),
        t('tiers.tier1Feature5'),
        t('tiers.tier1Feature6'),
      ],
      cta: t('tiers.tier1Cta'),
      featured: false,
    },
    {
      name: t('tiers.tier2Name'),
      id: 'tier-negosyo',
      priceMonthly: t('tiers.tier2PriceMonthly'),
      priceAnnual: t('tiers.tier2PriceAnnual'),
      description: t('tiers.tier2Description'),
      features: [
        t('tiers.tier2Feature1'),
        t('tiers.tier2Feature2'),
        t('tiers.tier2Feature3'),
        t('tiers.tier2Feature4'),
        t('tiers.tier2Feature5'),
        t('tiers.tier2Feature6'),
        t('tiers.tier2Feature7'),
        t('tiers.tier2Feature8'),
      ],
      cta: t('tiers.tier2Cta'),
      featured: true,
    },
    {
      name: t('tiers.tier3Name'),
      id: 'tier-enterprise',
      priceMonthly: t('tiers.tier3PriceMonthly'),
      priceAnnual: t('tiers.tier3PriceAnnual'),
      description: t('tiers.tier3Description'),
      features: [
        t('tiers.tier3Feature1'),
        t('tiers.tier3Feature2'),
        t('tiers.tier3Feature3'),
        t('tiers.tier3Feature4'),
        t('tiers.tier3Feature5'),
        t('tiers.tier3Feature6'),
        t('tiers.tier3Feature7'),
        t('tiers.tier3Feature8'),
      ],
      cta: t('tiers.tier3Cta'),
      featured: false,
    },
  ]

  const pricingFaqs = [
    { question: t('faqs.faq1Question'), answer: t('faqs.faq1Answer') },
    { question: t('faqs.faq2Question'), answer: t('faqs.faq2Answer') },
    { question: t('faqs.faq3Question'), answer: t('faqs.faq3Answer') },
    { question: t('faqs.faq4Question'), answer: t('faqs.faq4Answer') },
    { question: t('faqs.faq5Question'), answer: t('faqs.faq5Answer') },
    { question: t('faqs.faq6Question'), answer: t('faqs.faq6Answer') },
  ]

  const kayaScoreTiers = [
    { name: t('kayaScore.tier1Name'), price: t('kayaScore.tier1Price'), desc: t('kayaScore.tier1Desc'), cta: t('kayaScore.tier1Cta'), features: [t('kayaScore.tier1Feature1'), t('kayaScore.tier1Feature2'), t('kayaScore.tier1Feature3')] },
    { name: t('kayaScore.tier2Name'), price: t('kayaScore.tier2Price'), desc: t('kayaScore.tier2Desc'), cta: t('kayaScore.tier2Cta'), features: [t('kayaScore.tier2Feature1'), t('kayaScore.tier2Feature2'), t('kayaScore.tier2Feature3'), t('kayaScore.tier2Feature4')], featured: true },
    { name: t('kayaScore.tier3Name'), price: t('kayaScore.tier3Price'), desc: t('kayaScore.tier3Desc'), cta: t('kayaScore.tier3Cta'), features: [t('kayaScore.tier3Feature1'), t('kayaScore.tier3Feature2'), t('kayaScore.tier3Feature3')] },
    { name: t('kayaScore.tier4Name'), price: t('kayaScore.tier4Price'), desc: t('kayaScore.tier4Desc'), cta: t('kayaScore.tier4Cta'), features: [t('kayaScore.tier4Feature1'), t('kayaScore.tier4Feature2'), t('kayaScore.tier4Feature3'), t('kayaScore.tier4Feature4')] },
    { name: t('kayaScore.tier5Name'), price: t('kayaScore.tier5Price'), desc: t('kayaScore.tier5Desc'), cta: t('kayaScore.tier5Cta'), features: [t('kayaScore.tier5Feature1'), t('kayaScore.tier5Feature2'), t('kayaScore.tier5Feature3')] },
    { name: t('kayaScore.tier6Name'), price: t('kayaScore.tier6Price'), desc: t('kayaScore.tier6Desc'), cta: t('kayaScore.tier6Cta'), features: [t('kayaScore.tier6Feature1'), t('kayaScore.tier6Feature2'), t('kayaScore.tier6Feature3')] },
  ]

  return (
    <>
      <HeroInner
        subtitle={t('hero.subtitle')}
        title={t('hero.title')}
        description={t('hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2600"
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center mb-16">
            <div className="relative flex rounded-full bg-gray-100 p-1">
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold ${!annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
                onClick={() => setAnnual(false)}
              >
                {tCommon('monthly')}
              </button>
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold ${annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
                onClick={() => setAnnual(true)}
              >
                {tCommon('annual')} <span className="text-secondary text-xs ml-1">{tCommon('save20')}</span>
              </button>
            </div>
          </div>
          <MotionStagger>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier) => (
                <MotionItem key={tier.id}>
                  <div
                    className={`h-full flex flex-col justify-between rounded-3xl p-8 ring-1 xl:p-10 ${tier.featured
                      ? 'bg-primary ring-primary shadow-2xl'
                      : 'bg-white ring-gray-200'
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-x-4">
                        <h3 className={`text-lg font-semibold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                          {tier.name}
                        </h3>
                        {tier.featured && (
                          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                            {tCommon('popular')}
                          </span>
                        )}
                      </div>
                      <p className={`mt-4 text-sm/6 ${tier.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                        {tier.description}
                      </p>
                      <p className="mt-6 flex items-baseline gap-x-1">
                        <span className={`text-4xl font-semibold tracking-tight ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                          {annual ? tier.priceAnnual : tier.priceMonthly}
                        </span>
                        {tier.priceMonthly !== 'Custom' && (
                          <span className={`text-sm/6 ${tier.featured ? 'text-gray-300' : 'text-gray-600'}`}>{tCommon('perMonth')}</span>
                        )}
                      </p>
                      <ul className={`mt-8 space-y-3 text-sm/6 ${tier.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <svg className={`size-5 flex-none ${tier.featured ? 'text-secondary' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="https://portal.trabz.ph/register"
                      className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured
                        ? 'bg-secondary text-white hover:bg-secondary-hover focus-visible:outline-secondary'
                        : 'bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary'
                        }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </MotionItem>
              ))}
            </div>
          </MotionStagger>
        </div>
      </div>
      <FAQSection
        subtitle={t('faqs.subtitle')}
        title={t('faqs.title')}
        faqs={pricingFaqs}
      />

      {/* KayaScore Assessment Pricing */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MotionSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base/7 font-semibold text-primary">{t('kayaScore.subtitle')}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {t('kayaScore.title')}
              </p>
            </div>
          </MotionSection>
          <MotionStagger className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {kayaScoreTiers.map((tier) => (
              <MotionItem key={tier.name}>
                <div className={`h-full flex flex-col rounded-2xl p-8 ring-1 ${tier.featured ? 'bg-primary ring-primary text-white' : 'bg-white ring-gray-200'}`}>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                    <p className={`mt-2 text-sm ${tier.featured ? 'text-blue-100' : 'text-gray-600'}`}>{tier.desc}</p>
                    <p className="mt-4">
                      <span className={`text-3xl font-bold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>{tier.price}</span>
                      {tier.name !== 'API Access' && <span className={`text-sm ${tier.featured ? 'text-blue-200' : 'text-gray-500'}`}>/candidate</span>}
                    </p>
                    <ul className={`mt-6 space-y-3 text-sm ${tier.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                      {tier.features.map((f) => (
                        <li key={f} className="flex gap-x-3">
                          <CheckIcon className={`h-5 w-5 flex-none ${tier.featured ? 'text-secondary' : 'text-primary'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`mt-8 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${tier.featured ? 'bg-white text-primary hover:bg-blue-50' : 'bg-primary text-white hover:bg-primary-hover'}`}>
                    {tier.cta}
                  </button>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>

      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryText={t('cta.primaryText')}
        primaryHref="https://portal.trabz.ph/register"
        secondaryText={t('cta.secondaryText')}
        secondaryHref="/contact"
      />
    </>
  )
}
