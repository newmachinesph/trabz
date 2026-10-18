'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FeatureCardProps {
    title: string
    description: string
    icon: ReactNode
    index?: number
    variant?: 'default' | 'highlighted' | 'compact'
    theme?: 'light' | 'dark'
}

export function FeatureCard({
    title,
    description,
    icon,
    index = 0,
    variant = 'default',
    theme = 'dark'
}: FeatureCardProps) {
    const isLight = theme === 'light'

    const variants = {
        default: isLight
            ? 'bg-white border-gray-200 hover:border-blue-500/30 hover:shadow-lg'
            : 'bg-gradient-to-br from-[#1E293B]/80 to-[#0F172A]/80 border-white/5 hover:border-blue-500/30',
        highlighted: isLight
            ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
            : 'bg-gradient-to-br from-blue-600/20 to-blue-900/20 border-blue-500/30 hover:border-blue-400/50',
        compact: isLight
            ? 'bg-gray-50 border-gray-200 hover:border-yellow-500/30'
            : 'bg-[#1E293B]/60 border-white/5 hover:border-yellow-500/30'
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`group rounded-2xl p-6 border backdrop-blur-sm transition-all duration-300 ${variants[variant]}`}
        >
            <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isLight ? 'bg-blue-50' : 'bg-gradient-to-br from-blue-500/20 to-yellow-500/10'
                    }`}>
                    <div className={`${isLight ? 'text-blue-600' : 'text-blue-400'} group-hover:text-yellow-500 transition-colors duration-300`}>
                        {icon}
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold transition-colors duration-300 ${isLight ? 'text-gray-900 group-hover:text-blue-600' : 'text-white group-hover:text-yellow-400'}`}>
                        {title}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

interface FeaturePillProps {
    text: string
    icon?: ReactNode
    active?: boolean
    theme?: 'light' | 'dark'
}

export function FeaturePill({ text, icon, active = false, theme = 'dark' }: FeaturePillProps) {
    const isLight = theme === 'light'

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${active
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                : isLight
                    ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    : 'bg-[#1E293B] text-gray-300 hover:bg-[#2D3B4F] hover:text-white'
                }`}
        >
            {icon && <span className="w-4 h-4">{icon}</span>}
            {text}
        </motion.div>
    )
}

interface BentoCardProps {
    title: string
    description: string
    children?: ReactNode
    className?: string
    span?: 'sm' | 'md' | 'lg' | 'xl'
    accent?: 'blue' | 'yellow'
    theme?: 'light' | 'dark'
}

export function BentoCard({
    title,
    description,
    children,
    className = '',
    span = 'sm',
    accent = 'blue',
    theme = 'dark'
}: BentoCardProps) {
    const isLight = theme === 'light'

    const spanClasses = {
        sm: 'col-span-1',
        md: 'col-span-1 md:col-span-2',
        lg: 'col-span-1 md:col-span-2 lg:col-span-3',
        xl: 'col-span-1 md:col-span-2 lg:col-span-4'
    }

    const accentStyles = {
        blue: isLight
            ? 'hover:border-blue-500/40 group-hover:text-blue-600'
            : 'hover:border-blue-500/40 group-hover:text-blue-400',
        yellow: isLight
            ? 'hover:border-yellow-500/40 group-hover:text-yellow-600'
            : 'hover:border-yellow-500/40 group-hover:text-yellow-400'
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 ${spanClasses[span]} ${className} ${isLight
                    ? 'bg-white border border-gray-200 shadow-sm hover:shadow-xl'
                    : 'bg-gradient-to-br from-[#1E293B]/60 to-[#0F172A]/60 border border-white/5'
                } ${accentStyles[accent]}`}
        >
            {/* Gradient orb effect on hover */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${accent === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'}`} />

            <div className="relative z-10">
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${isLight ? 'text-gray-900' : 'text-white'} ${accentStyles[accent]}`}>
                    {title}
                </h3>
                <p className={`mt-2 text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                    {description}
                </p>
                {children && (
                    <div className="mt-4">
                        {children}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

interface GlowButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    onClick?: () => void
}

export function GlowButton({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}: GlowButtonProps) {
    const variants = {
        primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-600 hover:to-blue-700',
        secondary: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:from-yellow-500 hover:to-yellow-600',
        outline: 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700'
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </motion.button>
    )
}

interface SectionBadgeProps {
    text: string
    variant?: 'blue' | 'yellow'
    theme?: 'light' | 'dark'
}

export function SectionBadge({ text, variant = 'blue', theme = 'dark' }: SectionBadgeProps) {
    const isLight = theme === 'light'

    const variants = {
        blue: isLight
            ? 'bg-blue-50 text-blue-600 border-blue-200'
            : 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        yellow: isLight
            ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
            : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
    }

    return (
        <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border ${variants[variant]}`}
        >
            {text}
        </motion.span>
    )
}

export function SectionTitle({ children, className = '', theme = 'dark' }: { children: ReactNode; className?: string; theme?: 'light' | 'dark' }) {
    const isLight = theme === 'light'
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'} ${className}`}
        >
            {children}
        </motion.h2>
    )
}

export function SectionDescription({ children, className = '', theme = 'dark' }: { children: ReactNode; className?: string; theme?: 'light' | 'dark' }) {
    const isLight = theme === 'light'
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'} ${className}`}
        >
            {children}
        </motion.p>
    )
}

interface ProcessStepProps {
    step: number
    title: string
    description: string
    icon: ReactNode
    isLast?: boolean
    theme?: 'light' | 'dark'
}

export function ProcessStep({ step, title, description, icon, isLast = false, theme = 'dark' }: ProcessStepProps) {
    const isLight = theme === 'light'

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: step * 0.15 }}
            className="relative flex gap-6"
        >
            {/* Connector line */}
            {!isLast && (
                <div className={`absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b ${isLight ? 'from-blue-500/20 to-transparent' : 'from-blue-500 to-transparent'}`} />
            )}

            {/* Step number */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                {step}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isLight ? 'bg-yellow-100 text-yellow-600' : 'bg-yellow-500/10 text-yellow-400'}`}>
                        {icon}
                    </div>
                    <h3 className={`font-semibold text-lg ${isLight ? 'text-gray-900' : 'text-white'}`}>{title}</h3>
                </div>
                <p className={`text-sm leading-relaxed pl-11 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{description}</p>
            </div>
        </motion.div>
    )
}
