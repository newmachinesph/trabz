import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'

describe('Sitemap generation', () => {
  it('returns an array of sitemap entries', () => {
    const result = sitemap()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('includes entries for both locales', () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)

    const hasFilEntries = urls.some((url) => url.includes('/fil'))
    const hasEnEntries = urls.some((url) => url.includes('/en'))

    expect(hasFilEntries).toBe(true)
    expect(hasEnEntries).toBe(true)
  })

  it('includes root routes for each locale', () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)

    // Check for key routes
    expect(urls.some((u) => u.includes('/fil'))).toBe(true)
    expect(urls.some((u) => u.includes('/en'))).toBe(true)
    expect(urls.some((u) => u.includes('/contact'))).toBe(true)
    expect(urls.some((u) => u.includes('/about'))).toBe(true)
    expect(urls.some((u) => u.includes('/blog'))).toBe(true)
    expect(urls.some((u) => u.includes('/pricing'))).toBe(true)
  })

  it('has correct priority for homepage entries', () => {
    const result = sitemap()
    const baseUrl = 'https://trabz.ph'

    const homepageEntries = result.filter(
      (entry) => entry.url === `${baseUrl}/fil` || entry.url === `${baseUrl}/en`
    )

    expect(homepageEntries.length).toBe(2)
    homepageEntries.forEach((entry) => {
      expect(entry.priority).toBe(1.0)
    })
  })

  it('has lower priority for legal pages', () => {
    const result = sitemap()
    const legalEntries = result.filter((entry) => entry.url.includes('/legal/'))

    expect(legalEntries.length).toBeGreaterThan(0)
    legalEntries.forEach((entry) => {
      expect(entry.priority).toBe(0.3)
    })
  })

  it('includes blog post URLs', () => {
    const result = sitemap()
    const blogPostEntries = result.filter(
      (entry) => entry.url.includes('/blog/') && !entry.url.endsWith('/blog')
    )

    // Blog posts exist in content/blog/ so there should be entries
    expect(blogPostEntries.length).toBeGreaterThan(0)
  })

  it('blog post entries have monthly change frequency', () => {
    const result = sitemap()
    const blogPostEntries = result.filter(
      (entry) => entry.url.includes('/blog/') && !entry.url.endsWith('/blog')
    )

    blogPostEntries.forEach((entry) => {
      expect(entry.changeFrequency).toBe('monthly')
      expect(entry.priority).toBe(0.6)
    })
  })

  it('every entry has a url', () => {
    const result = sitemap()
    result.forEach((entry) => {
      expect(entry.url).toBeDefined()
      expect(typeof entry.url).toBe('string')
      expect(entry.url.startsWith('https://')).toBe(true)
    })
  })

  it('homepage and blog index have daily change frequency', () => {
    const result = sitemap()
    const baseUrl = 'https://trabz.ph'

    const dailyEntries = result.filter(
      (entry) =>
        entry.url === `${baseUrl}/fil` ||
        entry.url === `${baseUrl}/en` ||
        entry.url === `${baseUrl}/fil/blog` ||
        entry.url === `${baseUrl}/en/blog`
    )

    expect(dailyEntries.length).toBe(4)
    dailyEntries.forEach((entry) => {
      expect(entry.changeFrequency).toBe('daily')
    })
  })
})
