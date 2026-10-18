import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  lang: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          author: data.author,
          category: data.category,
          image: data.image,
          lang: data.lang || 'en',
          content,
        }
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Sanitize slug to prevent path traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    return null
  }
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
      image: data.image,
      lang: data.lang || 'en',
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByLocale(locale: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.lang === locale)
}
