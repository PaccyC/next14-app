"use server"

import Image from 'next/image';
import styles from './adminPosts.module.module.css'
import { getPosts} from '@/lib/data';
import { deletePost } from '@/lib/action';
const AdminPosts= async() => {
  const posts= await getPosts()
  const deletePostWithId= async(id)=>{ 
   
   deletePost.bind(null,id)
  }
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
    {posts.map((post)=>(
      <div className={styles.post} key={post.id}>
    <div className={styles.detail}>
      <Image src={post.img || '/noavatar.png'} alt='' height={50} width={50}/>
      <span className={post.postTitle}>{post.title}</span>
    </div>
    <form action={deletePost}>
      <input type="hidden" value={post.id} name='id'/>
      <button className={styles.postButton}>delete</button>
      </form>

      </div>
    ))}
    </div>
  )
}

export default AdminPosts