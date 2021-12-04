import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import React from 'react'

const Post = (props) => {
  const { data, content } = matter(props.content)

  return (
    <div>
      <h1>{data.title}</h1>

      {/* <ReactMarkdown children={content} /> */}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const fs = require('fs')

  const { slug } = ctx.params

  const content = fs.readFileSync(
    `${process.cwd()}/src/posts/${slug}.md`,
    'utf8'
  )

  return {
    props: {
      content,
    },
  }
}

export default Post
