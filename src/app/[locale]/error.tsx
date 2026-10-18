'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('common')

  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <ExclamationTriangleIcon className="h-8 w-8 text-red-600" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t('error.title') || 'Something went wrong'}
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          {t('error.description') || "We're sorry, but something unexpected happened. Please try again."}
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-gray-500">Error ID: {error.digest}</p>
        )}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={reset}
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t('error.tryAgain') || 'Try again'}
          </button>
          <a href="/" className="text-sm font-semibold text-gray-900 hover:text-primary">
            {t('error.goHome') || 'Go back home'} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
