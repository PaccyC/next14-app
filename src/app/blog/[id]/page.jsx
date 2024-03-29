import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { Suspense } from 'react'
import { getPost} from '@/lib/data'
// const getData = async (id) => {
//   try {
//     const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
//       next: { revalidate: 3600 },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Something went wrong");
//   }
// };


export const generateMetadata= async({params})=>{
    const {id}= params;
  const post = await getPost(id)
  // const post = await getData(id)
  return{
    title:post.title,
    description:post.desc
  }

}

const SingleBlogPage = async({params}) => {
  const {id}= params;
  const post = await getData(id)
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
      <Image src="/contact.png" fill className={styles.img}/>
     </div>
     <div className={styles.textContainer}>

      <h1 className={styles.title}>{post?.title}</h1>
      <div className={styles.detail}>
        <Image src="/noavatar.png" className={styles.avatar} width={50} height={50}/>
    <Suspense fallback={<div>Loading ...</div>}>

      <PostUser userId={post?.userId}/>
    </Suspense>


        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>12.1.2024</span>
        </div>
      </div>
      <div className={styles.content}>
      {post?.desc}
      </div>
     </div>
    </div>
  )
}

export default SingleBlogPage
