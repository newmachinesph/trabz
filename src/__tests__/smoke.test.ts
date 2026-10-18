import { describe, it, expect } from 'vitest'

describe('Smoke tests', () => {
  it('can import blog utilities', async () => {
    const blog = await import('@/lib/blog')
    expect(blog.getAllPosts).toBeDefined()
    expect(blog.getPostBySlug).toBeDefined()
    expect(blog.getPostsByLocale).toBeDefined()
  })

  it('can import metadata utilities', async () => {
    const metadata = await import('@/lib/metadata')
    expect(metadata.generatePageMetadata).toBeDefined()
  })

  it('can import sitemap generator', async () => {
    const sitemap = await import('@/app/sitemap')
    expect(sitemap.default).toBeDefined()
  })

  it('verifies environment runs correctly', () => {
    expect(1 + 1).toBe(2)
    expect(typeof globalThis).toBe('object')
  })
})
