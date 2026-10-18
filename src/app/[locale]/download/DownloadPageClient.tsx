'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import HeroInner from '@/components/sections/HeroInner'
import { MotionSection } from '@/components/ui/MotionSection'
import {
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export default function DownloadPageClient() {
  const t = useTranslations('download')

  const features = [
    { key: 'free', icon: BoltIcon },
    { key: 'offline', icon: GlobeAltIcon },
    { key: 'secure', icon: ShieldCheckIcon },
    { key: 'lightweight', icon: DevicePhoneMobileIcon },
  ]

  return (
    <div>
      <HeroInner
        subtitle={t('badge')}
        title={t('title')}
        description={t('description')}
      />

      {/* Download section */}
      <MotionSection className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('getApp')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('getAppDesc')}
            </p>
          </div>

          {/* PWA - Primary */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href="https://app.trabz.ph"
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105 hover:bg-primary-hover"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium uppercase text-blue-200">Open the</span>
                <span className="text-xl font-bold tracking-tight">Trabz Web App</span>
              </div>
            </a>

            <p className="text-sm text-gray-500">Works on any device with a browser. No download needed.</p>

            {/* Native apps - Coming Soon */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <div className="inline-flex items-center gap-3 rounded-xl bg-gray-100 px-6 py-3.5 text-gray-400 cursor-default">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M3 20.97V3.03a1 1 0 0 1 1.59-.82l15.11 8.94a1 1 0 0 1 0 1.7l-15.11 8.94A1 1 0 0 1 3 20.97z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium uppercase">Google Play</span>
                  <span className="text-lg font-bold tracking-tight">Coming Soon</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-xl bg-gray-100 px-6 py-3.5 text-gray-400 cursor-default">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium uppercase">App Store</span>
                  <span className="text-lg font-bold tracking-tight">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            {t('availability')}
          </p>
        </div>
      </MotionSection>

      {/* Features */}
      <MotionSection className="py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('whyTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.key} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {t(`features.${f.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t(`features.${f.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Requirements */}
      <MotionSection className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t('requirementsTitle')}
          </h2>
          <div className="rounded-2xl bg-gray-50 p-8">
            <dl className="space-y-4">
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <dt className="text-sm font-medium text-gray-500">{t('req.os')}</dt>
                <dd className="text-sm text-gray-900">Android 8.0+</dd>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <dt className="text-sm font-medium text-gray-500">{t('req.size')}</dt>
                <dd className="text-sm text-gray-900">~25 MB</dd>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <dt className="text-sm font-medium text-gray-500">{t('req.price')}</dt>
                <dd className="text-sm font-semibold text-green-600">{t('req.free')}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-gray-500">{t('req.languages')}</dt>
                <dd className="text-sm text-gray-900">Filipino, English</dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">{t('employerCta')}</p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              {t('employerCtaLink')} &rarr;
            </Link>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
