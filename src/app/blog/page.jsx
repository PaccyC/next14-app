import styles from './blog.module.css'
import BlogPost from '@/components/blogPost/blogPost'

import { getPosts} from '@/lib/data';
const getData= async ()=>{
   const response = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}})
   if(!response.ok){
      throw new Error("Something went wrong")
   }
   const data= await response.json()
   return data;
}

const BlogPage = async() => {
  //  const posts= await getPosts();
  const posts=await getData();
  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        {posts.map((post,index)=>{
          return <BlogPost key={index} post={post}/>
        })}
      </div>
    </div>
  )


  
}

export default BlogPage
