'use client'

import { motion } from 'framer-motion'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

interface PricingTierProps {
    name: string
    price: string
    period?: string
    description: string
    features: string[]
    featured?: boolean
    featuredLabel?: string
    ctaText?: string
    ctaHref?: string
    onCtaClick?: () => void
    index?: number
}

export function PricingTier({
    name,
    price,
    period = '/assessment',
    description,
    features,
    featured = false,
    featuredLabel = 'Recommended',
    ctaText = 'Get Started',
    onCtaClick,
    index = 0,
}: PricingTierProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-2xl p-8 flex flex-col ${featured
                    ? 'bg-primary text-white ring-4 ring-primary/20'
                    : 'bg-white ring-1 ring-gray-200'
                }`}
        >
            {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-gray-900 text-xs font-semibold px-4 py-1 rounded-full">
                    {featuredLabel}
                </span>
            )}

            <div className="flex-1">
                <h3 className={`text-lg font-bold ${featured ? 'text-white' : 'text-gray-900'}`}>
                    {name}
                </h3>
                <div className="mt-4">
                    <span className={`text-3xl font-bold ${featured ? 'text-white' : 'text-gray-900'}`}>
                        {price}
                    </span>
                    {period && (
                        <span className={`text-sm ${featured ? 'text-blue-100' : 'text-gray-500'}`}>
                            {period}
                        </span>
                    )}
                </div>
                <p className={`mt-2 text-sm ${featured ? 'text-blue-100' : 'text-gray-500'}`}>
                    {description}
                </p>

                <ul className="mt-6 space-y-3">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className={`flex items-center gap-2 text-sm ${featured ? 'text-blue-100' : 'text-gray-600'
                                }`}
                        >
                            <CheckBadgeIcon
                                className={`w-4 h-4 flex-shrink-0 ${featured ? 'text-secondary' : 'text-primary'
                                    }`}
                            />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={onCtaClick}
                className={`mt-6 w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${featured
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-primary-hover'
                    }`}
            >
                {ctaText}
            </button>
        </motion.div>
    )
}

export default PricingTier
