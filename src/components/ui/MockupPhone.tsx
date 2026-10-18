'use client'

import { motion } from 'framer-motion'

interface MockupPhoneProps {
    children: React.ReactNode
    className?: string
    floating?: boolean
}

export function MockupPhone({ children, className = '', floating = true }: MockupPhoneProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`${floating ? 'float' : ''} ${className}`}
        >
            <div className="device-frame w-[280px] sm:w-[320px]">
                {/* Phone notch */}
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-20 h-6 bg-[#0F172A] rounded-full z-10" />
                </div>

                {/* Phone screen */}
                <div className="device-screen aspect-[9/19] relative">
                    {children}
                </div>

                {/* Home indicator */}
                <div className="flex justify-center py-2">
                    <div className="w-24 h-1 bg-gray-600 rounded-full" />
                </div>
            </div>
        </motion.div>
    )
}

interface MockupDashboardProps {
    children: React.ReactNode
    className?: string
}

export function MockupDashboard({ children, className = '' }: MockupDashboardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={className}
        >
            <div className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-1 shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] rounded-t-xl">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="bg-[#1E293B] rounded-md px-4 py-1.5 text-xs text-gray-400 max-w-xs">
                            trabz.ph/employer/dashboard
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-[#0F172A] rounded-b-xl overflow-hidden">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

interface MockupJobCardProps {
    title: string
    company: string
    location: string
    salary: string
    tags?: string[]
    verified?: boolean
    matchPercent?: number
}

export function MockupJobCard({
    title,
    company,
    location,
    salary,
    tags = [],
    verified = true,
    matchPercent
}: MockupJobCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-[#1E293B] rounded-xl p-4 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer"
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-white">{title}</h4>
                        {verified && (
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{company}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location}
                        </span>
                        <span className="font-semibold text-yellow-400">{salary}</span>
                    </div>
                </div>
                {matchPercent && (
                    <div className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-2 py-1 rounded-full">
                        {matchPercent}% Match
                    </div>
                )}
            </div>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-[#0F172A] text-gray-400 text-xs px-2 py-0.5 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    )
}

interface MockupGigCardProps {
    title: string
    time: string
    pay: string
    distance: string
    urgency?: 'high' | 'medium' | 'low'
}

export function MockupGigCard({ title, time, pay, distance, urgency = 'medium' }: MockupGigCardProps) {
    const urgencyColors = {
        high: 'bg-red-500/20 text-red-400 border-red-500/30',
        medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        low: 'bg-green-500/20 text-green-400 border-green-500/30'
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#1E293B] rounded-xl p-4 border border-white/5 hover:border-yellow-500/30 transition-all cursor-pointer"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{time}</p>
                </div>
                <div className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${urgencyColors[urgency]}`}>
                    {urgency === 'high' ? 'URGENT' : urgency === 'medium' ? 'TODAY' : 'FLEXIBLE'}
                </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                <span className="text-yellow-400 font-bold">{pay}</span>
                <span className="text-gray-500 text-sm">{distance}</span>
            </div>
        </motion.div>
    )
}

interface StatCardProps {
    label: string
    value: string
    trend?: string
    trendUp?: boolean
    icon?: React.ReactNode
}

export function StatCard({ label, value, trend, trendUp, icon }: StatCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-xl p-5 border border-white/5"
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-gray-400 text-sm">{label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{value}</p>
                    {trend && (
                        <div className={`flex items-center gap-1 mt-2 text-xs ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
                            {trendUp ? (
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                            {trend}
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                        {icon}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export function AnimatedValue({ value, suffix = '' }: { value: string; suffix?: string }) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-bold text-gradient-blue-yellow"
        >
            {value}{suffix}
        </motion.span>
    )
}
