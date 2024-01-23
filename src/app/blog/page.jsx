import styles from './blog.module.css'
import BlogPost from '@/components/blogPost/blogPost'

import { getPosts} from '@/lib/data';
// const getData= async ()=>{
//    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})
//    if(!response.ok){
//       throw new Error("Something went wrong")
//    }
//    const data= await response.json()
//    return data;
// }

const BlogPage = async() => {
   const posts= await getPosts();
   
  return (
    <div className={styles.container}>
{posts.map((post)=>(
    <div className={styles.posts}>
    <BlogPost post={post} key={post.id}/>
 </div>
))}
  
     

    </div>
  )
}

export default BlogPage
