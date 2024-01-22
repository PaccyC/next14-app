import styles from './blog.module.css'
import BlogPost from '@/components/blogPost/blogPost'
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
          <BlogPost/>
       </div>
       <div className={styles.posts}>
          <BlogPost/>
       </div>
       <div className={styles.posts}>
          <BlogPost/>
       </div>
       <div className={styles.posts}>
          <BlogPost/>
       </div>

    </div>
  )
}

export default BlogPage
