import { Link, routes } from '@redwoodjs/router'

const BlogPost = (props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: props.post.id })}>
            {props.post.title}
          </Link>
        </h2>
      </header>
      <p>{props.post.body}</p>
    </article>
  )
}

export default BlogPost
