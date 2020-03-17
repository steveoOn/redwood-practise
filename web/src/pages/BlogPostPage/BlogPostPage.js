import BlogPostCell from 'src/components/BlogPostCell'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const BlogPostPage = (props) => {
  return (
    <BlogLayout>
      <BlogPostCell id={props.id} rand={Math.random()} />
    </BlogLayout>
  )
}

export default BlogPostPage
