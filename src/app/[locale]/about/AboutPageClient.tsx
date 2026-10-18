'use client'

import { useTranslations } from 'next-intl'
import HeroInner from '@/components/sections/HeroInner'
import CTASection from '@/components/sections/CTASection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import {
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  IdentificationIcon,
  MagnifyingGlassIcon,
  ShieldExclamationIcon,
  ScaleIcon,
  ExclamationCircleIcon,
  CpuChipIcon,
  FingerPrintIcon,
  DocumentMagnifyingGlassIcon,
  ArrowPathIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  MapIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline'

export default function Tungkol() {
  const t = useTranslations('about')

  const timelineItems = [
    { year: t('timeline.item1Year'), title: t('timeline.item1Title'), description: t('timeline.item1Desc') },
    { year: t('timeline.item2Year'), title: t('timeline.item2Title'), description: t('timeline.item2Desc') },
    { year: t('timeline.item3Year'), title: t('timeline.item3Title'), description: t('timeline.item3Desc') },
    { year: t('timeline.item4Year'), title: t('timeline.item4Title'), description: t('timeline.item4Desc') },
    { year: t('timeline.item5Year'), title: t('timeline.item5Title'), description: t('timeline.item5Desc') },
  ]

  const valueItems = [
    { name: t('values.value1Name'), description: t('values.value1Desc'), icon: HeartIcon },
    { name: t('values.value2Name'), description: t('values.value2Desc'), icon: LightBulbIcon },
    { name: t('values.value3Name'), description: t('values.value3Desc'), icon: UserGroupIcon },
    { name: t('values.value4Name'), description: t('values.value4Desc'), icon: ShieldCheckIcon },
    { name: t('values.value5Name'), description: t('values.value5Desc'), icon: AcademicCapIcon },
  ]

  const teamMembers = [
    { name: t('team.member1Name'), role: t('team.member1Role'), initials: t('team.member1Initials') },
    { name: t('team.member2Name'), role: t('team.member2Role'), initials: t('team.member2Initials') },
    { name: t('team.member3Name'), role: t('team.member3Role'), initials: t('team.member3Initials') },
    { name: t('team.member4Name'), role: t('team.member4Role'), initials: t('team.member4Initials') },
    { name: t('team.member5Name'), role: t('team.member5Role'), initials: t('team.member5Initials') },
    { name: t('team.member6Name'), role: t('team.member6Role'), initials: t('team.member6Initials') },
  ]

  const statsItems = [
    { label: t('story.stat1Label'), value: t('story.stat1Value') },
    { label: t('story.stat2Label'), value: t('story.stat2Value') },
    { label: t('story.stat3Label'), value: t('story.stat3Value') },
    { label: t('story.stat4Label'), value: t('story.stat4Value') },
    { label: t('story.stat5Label'), value: t('story.stat5Value') },
    { label: t('story.stat6Label'), value: t('story.stat6Value') },
  ]

  const trustSafetyFeatures = [
    { name: t('trustSafety.feature1Name'), description: t('trustSafety.feature1Desc'), icon: IdentificationIcon },
    { name: t('trustSafety.feature2Name'), description: t('trustSafety.feature2Desc'), icon: MagnifyingGlassIcon },
    { name: t('trustSafety.feature3Name'), description: t('trustSafety.feature3Desc'), icon: ShieldExclamationIcon },
    { name: t('trustSafety.feature4Name'), description: t('trustSafety.feature4Desc'), icon: ScaleIcon },
    { name: t('trustSafety.feature5Name'), description: t('trustSafety.feature5Desc'), icon: ExclamationCircleIcon },
  ]

  const aiTechFeatures = [
    { name: t('aiTech.feature1Name'), description: t('aiTech.feature1Desc'), icon: CpuChipIcon },
    { name: t('aiTech.feature2Name'), description: t('aiTech.feature2Desc'), icon: ShieldCheckIcon },
    { name: t('aiTech.feature3Name'), description: t('aiTech.feature3Desc'), icon: FingerPrintIcon },
    { name: t('aiTech.feature4Name'), description: t('aiTech.feature4Desc'), icon: DocumentMagnifyingGlassIcon },
    { name: t('aiTech.feature5Name'), description: t('aiTech.feature5Desc'), icon: ArrowPathIcon },
  ]

  const platformFeatures = [
    { name: t('platform.feature1Name'), description: t('platform.feature1Desc'), icon: SignalIcon },
    { name: t('platform.feature2Name'), description: t('platform.feature2Desc'), icon: DevicePhoneMobileIcon },
    { name: t('platform.feature3Name'), description: t('platform.feature3Desc'), icon: MapIcon },
    { name: t('platform.feature4Name'), description: t('platform.feature4Desc'), icon: LanguageIcon },
  ]

  return (
    <>
      <HeroInner
        subtitle={t('hero.subtitle')}
        title={t('hero.title')}
        description={t('hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2600"
      />

      {/* Our Story */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <MotionSection>
              <div>
                <h2 className="text-base/7 font-semibold text-primary">{t('story.subtitle')}</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {t('story.title')}
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  {t('story.paragraph1')}
                </p>
                <p className="mt-4 text-lg/8 text-gray-600">
                  {t('story.paragraph2')}
                </p>
              </div>
            </MotionSection>
            <div className="rounded-2xl bg-gray-50 p-8">
              <MotionStagger>
                <dl className="grid grid-cols-2 gap-4">
                  {statsItems.map((stat) => (
                    <MotionItem key={stat.label}>
                      <div className="rounded-lg bg-white p-4 shadow-sm">
                        <dt className="text-xs text-gray-500">{stat.label}</dt>
                        <dd className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</dd>
                      </div>
                    </MotionItem>
                  ))}
                </dl>
              </MotionStagger>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gradient-to-br from-primary to-primary-hover py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MotionSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base/7 font-semibold text-secondary">{t('timeline.subtitle')}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {t('timeline.title')}
              </p>
            </div>
          </MotionSection>
          <div className="mx-auto mt-16 max-w-3xl">
            <MotionStagger>
              <div className="space-y-12">
                {timelineItems.map((item, i) => (
                  <MotionItem key={item.year}>
                    <div className="relative flex gap-x-6">
                      <div className="flex flex-col items-center">
                        <div className={`flex h-10 w-10 min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full ring-2 ${i === timelineItems.length - 1 ? 'bg-secondary ring-secondary/50' : 'bg-white/10 ring-secondary/40'}`}>
                          <span className={`text-sm leading-none font-bold ${i === timelineItems.length - 1 ? 'text-white' : 'text-secondary'}`}>{i + 1}</span>
                        </div>
                        {i < timelineItems.length - 1 && <div className="mt-2 h-full w-px bg-white/10" />}
                      </div>
                      <div className="pb-8">
                        <p className="text-sm font-semibold text-secondary">{item.year}</p>
                        <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm/6 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </MotionItem>
                ))}
              </div>
            </MotionStagger>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MotionSection>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-primary">{t('values.subtitle')}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {t('values.title')}
              </p>
            </div>
          </MotionSection>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <MotionStagger>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5">
                {valueItems.map((value) => (
                  <MotionItem key={value.name}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary">
                        <value.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      <dt className="text-base font-semibold text-gray-900">{value.name}</dt>
                      <dd className="mt-2 text-sm/6 text-gray-600">{value.description}</dd>
                    </div>
                  </MotionItem>
                ))}
              </dl>
            </MotionStagger>
          </div>
        </div>
      </div>

      {/* Team */}
      {/* Team Section (Temporarily Removed)
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MotionSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base/7 font-semibold text-primary">{t('team.subtitle')}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {t('team.title')}
              </p>
            </div>
          </MotionSection>
          <MotionStagger>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {teamMembers.map((person) => (
                <MotionItem key={person.name}>
                  <div className="flex items-center gap-x-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{person.initials}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{person.name}</h3>
                      <p className="text-sm text-gray-500">{person.role}</p>
                    </div>
                  </div>
                </MotionItem>
              ))}
            </div>
          </MotionStagger>
        </div>
      </div>
      */}

      <FeatureGrid
        subtitle={t('trustSafety.subtitle')}
        title={t('trustSafety.title')}
        description={t('trustSafety.description')}
        features={trustSafetyFeatures}
      />

      <FeatureGrid
        subtitle={t('aiTech.subtitle')}
        title={t('aiTech.title')}
        description={t('aiTech.description')}
        features={aiTechFeatures}
      />

      <FeatureGrid
        subtitle={t('platform.subtitle')}
        title={t('platform.title')}
        description={t('platform.description')}
        features={platformFeatures}
      />

      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryText={t('cta.primaryText')}
        primaryHref="https://portal.trabz.ph/register"
        secondaryText={t('cta.secondaryText')}
        secondaryHref="/contact"
        dark
      />
    </>
  )
}
