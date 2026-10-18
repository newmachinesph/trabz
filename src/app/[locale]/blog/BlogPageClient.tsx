'use client'

import { useTranslations } from 'next-intl'
import HeroInner from '@/components/sections/HeroInner'
import BlogListingClient from './BlogListingClient'
import { BlogPost } from '@/lib/blog'

interface BlogPageClientProps {
  posts: BlogPost[]
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const t = useTranslations('blog')

  return (
    <div>
      <HeroInner
        subtitle={t('badge')}
        title={t('title')}
        description={t('description')}
      />
      <BlogListingClient posts={posts} />
    </div>
  )
}
