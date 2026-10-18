'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionHeaderProps {
    badge?: string
    badgeVariant?: 'primary' | 'secondary' | 'neutral'
    title: string | ReactNode
    description?: string
    alignment?: 'left' | 'center'
    className?: string
}

export function SectionHeader({
    badge,
    badgeVariant = 'primary',
    title,
    description,
    alignment = 'center',
    className = '',
}: SectionHeaderProps) {
    const badgeColors = {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        neutral: 'bg-gray-100 text-gray-700',
    }

    return (
        <div className={`${alignment === 'center' ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
            {badge && (
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${badgeColors[badgeVariant]}`}
                >
                    {badge}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-lg text-gray-600"
                >
                    {description}
                </motion.p>
            )}
        </div>
    )
}

export default SectionHeader
