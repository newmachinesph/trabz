'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { MotionSection } from '@/components/ui/MotionSection'

export default function CTADownload() {
  const t = useTranslations('home.ctaDownload')

  return (
    <div className="bg-gradient-to-br from-primary to-primary-hover">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-blue-100">
            {t('description')}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            {/* PWA - Primary CTA */}
            <a
              href="https://app.trabz.ph"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-gray-900 shadow-lg transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium uppercase text-gray-500">Open the</span>
                <span className="text-lg font-bold tracking-tight">Web App</span>
              </div>
            </a>

            {/* Native apps - Coming Soon */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 text-white/60 cursor-default">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M3 20.97V3.03a1 1 0 0 1 1.59-.82l15.11 8.94a1 1 0 0 1 0 1.7l-15.11 8.94A1 1 0 0 1 3 20.97z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium uppercase">Google Play</span>
                  <span className="text-sm font-semibold">Coming Soon</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 text-white/60 cursor-default">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium uppercase">App Store</span>
                  <span className="text-sm font-semibold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-blue-200">{t('availability')}</p>
        </MotionSection>
      </div>
    </div>
  )
}
