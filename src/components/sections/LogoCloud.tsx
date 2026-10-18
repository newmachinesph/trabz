'use client'

import { useTranslations } from 'next-intl'
import { MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import { Building2, ShoppingBag, Utensils, Truck, Home, Factory } from 'lucide-react'

const industries = [
  { key: 'construction', icon: Building2 },
  { key: 'retail', icon: ShoppingBag },
  { key: 'foodBeverage', icon: Utensils },
  { key: 'logistics', icon: Truck },
  { key: 'domestic', icon: Home },
  { key: 'manufacturing', icon: Factory },
] as const

export default function LogoCloud() {
  const t = useTranslations('home.logoCloud')

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          {t('heading')}
        </h2>
        <MotionStagger className="mx-auto mt-10 grid max-w-4xl grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ key, icon: Icon }) => (
            <MotionItem
              key={key}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Icon className="h-10 w-10 text-blue-600" strokeWidth={1.5} />
              <span className="text-sm font-medium text-gray-700 text-center">
                {t(`industries.${key}`)}
              </span>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </div>
  )
}
