'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  const t = useTranslations('common')

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t('notFound.title') || 'Page not found'}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {t('notFound.description') || "Sorry, we couldn't find the page you're looking for."}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <HomeIcon className="h-5 w-5" />
            {t('notFound.goHome') || 'Go back home'}
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900 hover:text-primary">
            {t('notFound.contact') || 'Contact support'} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
