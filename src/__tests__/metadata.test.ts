import { describe, it, expect, vi } from 'vitest'

// Mock next-intl/server
vi.mock('next-intl/server', () => ({
  getTranslations: vi.fn().mockResolvedValue((key: string) => `mock-${key}`),
}))

import { generatePageMetadata } from '@/lib/metadata'

describe('Metadata generation', () => {
  it('returns a metadata object with required fields', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'home',
      locale: 'en',
    })

    expect(metadata).toBeDefined()
    expect(metadata.title).toBeDefined()
    expect(metadata.description).toBeDefined()
  })

  it('includes openGraph metadata', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'contact',
      locale: 'en',
      canonicalPath: '/contact',
    })

    expect(metadata.openGraph).toBeDefined()
    expect(metadata.openGraph!.title).toBeDefined()
    expect(metadata.openGraph!.description).toBeDefined()
    expect(metadata.openGraph!.type).toBe('website')
    expect(metadata.openGraph!.siteName).toBe('Trabz')
  })

  it('includes twitter metadata', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'about',
      locale: 'en',
    })

    expect(metadata.twitter).toBeDefined()
    expect(metadata.twitter!.card).toBe('summary_large_image')
  })

  it('sets correct locale for openGraph when locale is fil', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'home',
      locale: 'fil',
    })

    expect(metadata.openGraph!.locale).toBe('fil_PH')
  })

  it('sets correct locale for openGraph when locale is en', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'home',
      locale: 'en',
    })

    expect(metadata.openGraph!.locale).toBe('en_US')
  })

  it('includes canonical URL in alternates', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'pricing',
      locale: 'en',
      canonicalPath: '/pricing',
    })

    expect(metadata.alternates).toBeDefined()
    expect(metadata.alternates!.canonical).toBe('https://trabz.ph/pricing')
    expect(metadata.alternates!.languages).toBeDefined()
  })

  it('includes language alternates for en and x-default', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'about',
      locale: 'en',
      canonicalPath: '/about',
    })

    const languages = metadata.alternates!.languages as Record<string, string>
    expect(languages['en-US']).toBe('https://trabz.ph/en/about')
    expect(languages['x-default']).toBe('https://trabz.ph/fil/about')
  })

  it('sets robots to index and follow', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'home',
      locale: 'en',
    })

    expect(metadata.robots).toEqual({ index: true, follow: true })
  })

  it('uses default ogImagePath when not provided', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'home',
      locale: 'en',
    })

    const images = (metadata.openGraph as any)!.images
    expect(images).toBeDefined()
    expect(images[0].url).toBe('/images/og-default.jpg')
  })

  it('uses custom ogImagePath when provided', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'home',
      locale: 'en',
      ogImagePath: '/images/custom-og.jpg',
    })

    const images = (metadata.openGraph as any)!.images
    expect(images[0].url).toBe('/images/custom-og.jpg')
  })

  it('uses empty canonicalPath by default', async () => {
    const metadata = await generatePageMetadata({
      pageKey: 'home',
      locale: 'en',
    })

    expect(metadata.alternates!.canonical).toBe('https://trabz.ph')
  })
})
