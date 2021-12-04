import React from 'react'
import Link from 'next/link'

function BlogPost({ post }) {
  return (
    <div>
      <img src={post.hero_image} alt={post.title} />
      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    </div>
  )
}

export default BlogPost
