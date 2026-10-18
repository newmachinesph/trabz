'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface IconFeatureCardProps {
    icon: ReactNode
    title: string
    description: string
    iconBgColor?: string
    iconTextColor?: string
    index?: number
    hover?: boolean
    className?: string
}

export function IconFeatureCard({
    icon,
    title,
    description,
    iconBgColor = 'bg-primary/10',
    iconTextColor = 'text-primary',
    index = 0,
    hover = true,
    className = '',
}: IconFeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`group bg-white rounded-xl p-6 ring-1 ring-gray-100 ${hover ? 'hover:ring-primary/30 hover:shadow-lg' : ''
                } transition-all duration-300 ${className}`}
        >
            <div
                className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center ${iconTextColor} ${hover ? 'group-hover:bg-primary group-hover:text-white' : ''
                    } transition-colors`}
            >
                {icon}
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
        </motion.div>
    )
}

interface IconFeatureCardCompactProps {
    icon: ReactNode
    title: string
    subtitle?: string
    iconBgColor?: string
    iconTextColor?: string
    index?: number
}

export function IconFeatureCardCompact({
    icon,
    title,
    subtitle,
    iconBgColor = 'bg-primary/10',
    iconTextColor = 'text-primary',
    index = 0,
}: IconFeatureCardCompactProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 ring-1 ring-gray-100 text-center"
        >
            <div
                className={`w-14 h-14 rounded-xl ${iconBgColor} flex items-center justify-center ${iconTextColor} mx-auto mb-4`}
            >
                {icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
            {subtitle && <p className="text-gray-500 text-xs mt-2">{subtitle}</p>}
        </motion.div>
    )
}

export default IconFeatureCard
