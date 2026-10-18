'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'

export default function MakipagUgnayan() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '', subject: 'general' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Validate required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Guard for missing API URL
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (!apiUrl) {
      console.error('Contact form error: NEXT_PUBLIC_API_URL is not configured')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setSubmitStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', subject: 'general' })
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    { q: t('faqs.faq1Question'), a: t('faqs.faq1Answer') },
    { q: t('faqs.faq2Question'), a: t('faqs.faq2Answer') },
    { q: t('faqs.faq3Question'), a: t('faqs.faq3Answer') },
    { q: t('faqs.faq4Question'), a: t('faqs.faq4Answer') },
    { q: t('faqs.faq5Question'), a: t('faqs.faq5Answer') },
  ]

  return (
    <>
      <div className="relative isolate bg-gradient-to-br from-primary to-primary-hover">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2600"
            alt="Contact us"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-16 pt-20 sm:pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2" aria-hidden="true">
                <div className="absolute -top-40 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-20 blur-3xl sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
              </div>
              <MotionSection>
                <h2 className="text-base/7 font-semibold text-secondary">{t('heading.subtitle')}</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{t('heading.title')}</p>
                <p className="mt-6 text-lg/8 text-gray-300">
                  {t('heading.description')}
                </p>
              </MotionSection>
              <MotionStagger>
                <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                  <MotionItem>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <BuildingOffice2Icon aria-hidden="true" className="size-6 text-gray-400" />
                      </dt>
                      <dd>{t('info.address')}</dd>
                    </div>
                  </MotionItem>

                  <MotionItem>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <EnvelopeIcon aria-hidden="true" className="size-6 text-gray-400" />
                      </dt>
                      <dd>
                        <a className="hover:text-white" href="mailto:hello@trabz.ph">{t('info.email')}</a>
                      </dd>
                    </div>
                  </MotionItem>
                </dl>
              </MotionStagger>
            </div>
          </div>
          <MotionSection>
            <form onSubmit={handleSubmit} className="px-6 pb-16 pt-12 sm:pb-32 sm:pt-20 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">{t('form.firstName')}</label>
                    <div className="mt-2.5">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        required
                        maxLength={100}
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">{t('form.lastName')}</label>
                    <div className="mt-2.5">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        required
                        maxLength={100}
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-white">{t('form.email')}</label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">{t('form.phoneNumber')}</label>
                    <div className="mt-2.5">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        maxLength={20}
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm/6 font-semibold text-white">{t('form.subject')}</label>
                    <div className="mt-2.5">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      >
                        <option value="general">{t('form.subjectOptions.general')}</option>
                        <option value="employer">{t('form.subjectOptions.employer')}</option>
                        <option value="worker">{t('form.subjectOptions.worker')}</option>
                        <option value="ofw">{t('form.subjectOptions.ofw')}</option>
                        <option value="media">{t('form.subjectOptions.media')}</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-white">{t('form.message')}</label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        maxLength={2000}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      />
                    </div>
                  </div>
                </div>
                {submitStatus === 'success' && (
                  <div className="mt-4 rounded-md bg-green-500/10 border border-green-500/20 p-4">
                    <p className="text-sm text-green-400">{t('form.successMessage') || 'Message sent successfully! We\'ll get back to you soon.'}</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 rounded-md bg-red-500/10 border border-red-500/20 p-4">
                    <p className="text-sm text-red-400">{t('form.errorMessage') || 'Failed to send message. Please try again or email us directly.'}</p>
                  </div>
                )}
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (t('form.sending') || 'Sending...') : t('form.submit')}
                  </button>
                </div>
              </div>
            </form>
          </MotionSection>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <MotionSection>
              <div className="text-center">
                <h2 className="text-base/7 font-semibold text-primary">{t('faqs.subtitle')}</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{t('faqs.title')}</p>
              </div>
            </MotionSection>
            <MotionStagger>
              <dl className="mt-10">
                {faqs.map((faq) => (
                  <MotionItem key={faq.q}>
                    <div className="py-6 border-b border-gray-900/10">
                      <dt className="text-base/7 font-semibold text-gray-900">{faq.q}</dt>
                      <dd className="mt-2 text-base/7 text-gray-600">{faq.a}</dd>
                    </div>
                  </MotionItem>
                ))}
              </dl>
            </MotionStagger>
          </div>
        </div>
      </div>
    </>
  )
}
