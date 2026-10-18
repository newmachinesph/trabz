import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { getPostsByLocale } from '@/lib/blog'
import BlogPageClient from './BlogPageClient'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    pageKey: 'blog',
    locale,
    canonicalPath: '/blog',
    ogImagePath: '/images/og-default.jpg',
  })
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const posts = getPostsByLocale(locale)

  return <BlogPageClient posts={posts} />
}
