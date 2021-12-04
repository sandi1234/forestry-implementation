import matter from 'gray-matter'
// import Header from '../components/Header'
import BlogPost from '../components/Blog/BlogPost'

export default function Home(props) {
  const realData = props.data.map((post) => matter(post))
  let listItems = realData.map((listItem) => listItem.data)

  return (
    <section>
      {/* <Header /> */}
      <h1>Luke's Blog</h1>
      <div>
        <div>
          {listItems.map((post, i) => (
            <BlogPost key={i} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const fs = require('fs')

  const files = fs.readdirSync(`${process.cwd()}/src/posts`, 'utf-8')

  const posts = files.filter((fn) => fn.endsWith('.md'))

  const data = posts.map((post) => {
    const path = `${process.cwd()}/src/posts/${post}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8',
    })

    return rawContent
  })

  return {
    props: {
      data,
    },
  }
}
