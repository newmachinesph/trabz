import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trabz.ph'
  const locales = ['fil', 'en']

  const routes = [
    '',
    '/for-workers',
    '/for-business',
    '/for-business/assessment',
    '/ofw',
    '/pricing',
    '/about',
    '/contact',
    '/download',
    '/blog',
    '/press',
    '/legal/terms',
    '/legal/privacy',
    '/legal/data-protection',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add all routes for all locales
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.startsWith('/legal') ? 0.3 : 0.8,
      })
    })
  })

  // Add blog post URLs
  const posts = getAllPosts()
  locales.forEach((locale) => {
    posts.forEach((post) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  })

  return sitemap
}
