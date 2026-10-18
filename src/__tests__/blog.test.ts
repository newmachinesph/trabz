import { describe, it, expect, vi, beforeEach } from 'vitest'
import fs from 'fs'
import path from 'path'

// We need to test the actual blog functions with real filesystem access
// since they read markdown files from content/blog/
import { getAllPosts, getPostBySlug, getPostsByLocale } from '@/lib/blog'

describe('Blog utilities', () => {
  describe('getAllPosts', () => {
    it('returns an array of posts', () => {
      const posts = getAllPosts()
      expect(Array.isArray(posts)).toBe(true)
    })

    it('returns posts with required fields', () => {
      const posts = getAllPosts()
      if (posts.length > 0) {
        const post = posts[0]
        expect(post).toHaveProperty('slug')
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('excerpt')
        expect(post).toHaveProperty('date')
        expect(post).toHaveProperty('author')
        expect(post).toHaveProperty('category')
        expect(post).toHaveProperty('image')
        expect(post).toHaveProperty('lang')
        expect(post).toHaveProperty('content')
      }
    })

    it('returns posts sorted by date descending', () => {
      const posts = getAllPosts()
      if (posts.length > 1) {
        for (let i = 0; i < posts.length - 1; i++) {
          expect(posts[i].date >= posts[i + 1].date).toBe(true)
        }
      }
    })

    it('returns posts that match actual markdown files in content/blog/', () => {
      const posts = getAllPosts()
      const contentDir = path.join(process.cwd(), 'content/blog')
      try {
        const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'))
        expect(posts.length).toBe(files.length)
      } catch {
        // If content directory doesn't exist, getAllPosts should return []
        expect(posts.length).toBe(0)
      }
    })
  })

  describe('getPostBySlug', () => {
    it('returns a post for a valid slug', () => {
      const posts = getAllPosts()
      if (posts.length > 0) {
        const post = getPostBySlug(posts[0].slug)
        expect(post).not.toBeNull()
        expect(post!.slug).toBe(posts[0].slug)
        expect(post!.title).toBe(posts[0].title)
      }
    })

    it('returns null for a non-existent slug', () => {
      const post = getPostBySlug('this-slug-does-not-exist-xyz')
      expect(post).toBeNull()
    })

    it('returns null for path traversal attempts', () => {
      const post = getPostBySlug('../../../etc/passwd')
      expect(post).toBeNull()
    })

    it('returns null for slugs with special characters', () => {
      expect(getPostBySlug('slug with spaces')).toBeNull()
      expect(getPostBySlug('slug/with/slashes')).toBeNull()
      expect(getPostBySlug('slug..dots')).toBeNull()
    })

    it('accepts slugs with hyphens and underscores', () => {
      // These are valid slug characters, so they should not be rejected by validation
      // They may still return null if no file exists, but they should pass validation
      const posts = getAllPosts()
      if (posts.length > 0) {
        // Real slugs contain hyphens - verify they work
        const slugWithHyphen = posts.find((p) => p.slug.includes('-'))
        if (slugWithHyphen) {
          const post = getPostBySlug(slugWithHyphen.slug)
          expect(post).not.toBeNull()
        }
      }
    })
  })

  describe('getPostsByLocale', () => {
    it('returns only posts matching the given locale', () => {
      const enPosts = getPostsByLocale('en')
      enPosts.forEach((post) => {
        expect(post.lang).toBe('en')
      })
    })

    it('returns an empty array for a locale with no posts', () => {
      const posts = getPostsByLocale('zz-nonexistent')
      expect(Array.isArray(posts)).toBe(true)
      expect(posts.length).toBe(0)
    })

    it('returns a subset of all posts', () => {
      const allPosts = getAllPosts()
      const enPosts = getPostsByLocale('en')
      expect(enPosts.length).toBeLessThanOrEqual(allPosts.length)
    })
  })
})
