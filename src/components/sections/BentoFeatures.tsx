'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import {
  UsersIcon,
  TrophyIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline'

export default function BentoFeatures() {
  const t = useTranslations('home.bentoFeatures')

  const jobListings = [
    t('jobMarketplace.job1'),
    t('jobMarketplace.job2'),
    t('jobMarketplace.job3'),
    t('jobMarketplace.job4'),
  ]

  const days = [
    { key: 'mon' },
    { key: 'tue' },
    { key: 'wed' },
    { key: 'thu' },
    { key: 'fri' },
    { key: 'sat' },
  ]

  const courses = [
    { nameKey: 'upskilling.course1', progressKey: 'upskilling.course1Progress', color: 'bg-[#EAB308]' },
    { nameKey: 'upskilling.course2', progressKey: 'upskilling.course2Progress', color: 'bg-blue-500' },
    { nameKey: 'upskilling.course3', progressKey: 'upskilling.course3Progress', color: 'bg-[#EAB308]' },
    { nameKey: 'upskilling.course4', progressKey: 'upskilling.course4Progress', color: 'bg-green-500' },
  ]

  return (
    <div className="bg-gradient-to-br from-[#1A56DB] to-[#1E40AF] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <MotionSection>
          <h2 className="text-center text-base/7 font-semibold text-[#EAB308]">{t('subtitle')}</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {t('title')}
          </p>
        </MotionSection>
        <MotionStagger className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Left tall card - Job Marketplace */}
          <MotionItem className="relative lg:row-span-2">
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
              <div className="absolute inset-px rounded-lg bg-white/10 backdrop-blur-sm lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">{t('jobMarketplace.title')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t('jobMarketplace.description')}
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-xl bg-gradient-to-b from-[#EAB308]/20 to-[#1A56DB]/10 ring-1 ring-white/10">
                    <div className="flex flex-col gap-3 p-6">
                      {jobListings.map((job) => (
                        <div key={job} className="rounded-lg bg-white/10 px-4 py-3">
                          <p className="text-sm text-white">{job}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-white/20 lg:rounded-l-[2rem]" />
            </motion.div>
          </MotionItem>

          {/* Top center - Gig & Shift */}
          <MotionItem className="relative max-lg:row-start-1">
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
              <div className="absolute inset-px rounded-lg bg-white/10 backdrop-blur-sm max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">{t('gigShift.title')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t('gigShift.description')}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                    {days.map((day, i) => (
                      <div key={day.key} className={`rounded-lg p-3 text-center ${i === 1 || i === 4 ? 'bg-[#EAB308]/20 ring-1 ring-[#EAB308]/50' : 'bg-white/10'}`}>
                        <p className="text-xs text-gray-300">{t(`gigShift.${day.key}`)}</p>
                        <p className={`mt-1 text-sm font-medium ${i === 1 || i === 4 ? 'text-[#EAB308]' : 'text-gray-400'}`}>
                          {i === 1 || i === 4 ? t('gigShift.shifts') : t('gigShift.noShift')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-white/20 max-lg:rounded-t-[2rem]" />
            </motion.div>
          </MotionItem>

          {/* Bottom center - Financial Services */}
          <MotionItem className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
              <div className="absolute inset-px rounded-lg bg-white/10 backdrop-blur-sm" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">{t('financial.title')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t('financial.description')}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 lg:pb-2">
                  <div className="w-full max-w-xs space-y-3">
                    <div className="rounded-lg bg-[#EAB308]/10 p-4 text-center">
                      <p className="text-xs text-gray-300">{t('financial.availableBalance')}</p>
                      <p className="mt-1 text-2xl font-bold text-[#EAB308]">{t('financial.balanceAmount')}</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 rounded-lg bg-white/10 p-2 text-center">
                        <p className="text-xs text-gray-300">{t('financial.send')}</p>
                      </div>
                      <div className="flex-1 rounded-lg bg-white/10 p-2 text-center">
                        <p className="text-xs text-gray-300">{t('financial.cashOut')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-white/20" />
            </motion.div>
          </MotionItem>

          {/* Right tall card - Upskilling */}
          <MotionItem className="relative lg:row-span-2">
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
              <div className="absolute inset-px rounded-lg bg-white/10 backdrop-blur-sm max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">{t('upskilling.title')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t('upskilling.description')}
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-[#1A56DB]/40 ring-1 ring-white/10">
                    <div className="p-6 space-y-4">
                      {courses.map((course) => {
                        const progress = parseInt(t(course.progressKey), 10)
                        return (
                          <div key={course.nameKey}>
                            <div className="flex justify-between text-sm">
                              <span className="text-white">{t(course.nameKey)}</span>
                              <span className="text-gray-300">{t(course.progressKey)}%</span>
                            </div>
                            <div className="mt-2 h-2 rounded-full bg-white/10">
                              <div className={`h-2 rounded-full ${course.color}`} style={{ width: `${progress}%` }} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-white/20 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </motion.div>
          </MotionItem>
        </MotionStagger>

        {/* Additional feature categories */}
        <MotionStagger className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {[
            { titleKey: 'communityTitle', descKey: 'communityDesc', icon: UsersIcon, color: 'bg-[#1A56DB]' },
            { titleKey: 'missionsTitle', descKey: 'missionsDesc', icon: TrophyIcon, color: 'bg-[#EAB308]' },
            { titleKey: 'ofwHubTitle', descKey: 'ofwHubDesc', icon: GlobeAltIcon, color: 'bg-[#1A56DB]' },
            { titleKey: 'kayaScoreTitle', descKey: 'kayaScoreDesc', icon: ClipboardDocumentCheckIcon, color: 'bg-[#EAB308]' },
          ].map((card) => (
            <MotionItem key={card.titleKey}>
              <div className="flex flex-col h-full rounded-xl bg-white/10 backdrop-blur-sm p-6 ring-1 ring-white/20 hover:ring-white/40 transition-all">
                <div className={`inline-flex size-10 items-center justify-center rounded-lg ${card.color}`}>
                  <card.icon className="size-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">{t(card.titleKey)}</h3>
                <p className="mt-2 text-sm text-blue-100">{t(card.descKey)}</p>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </div>
  )
}
