import styles from './postUser.module.css'
import { getUser } from '@/lib/data'
// const getData= async (userId)=>{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"})
//     if(!response.ok){
//        throw new Error("Something went wrong")
//     }
//     const data= await response.json()
//     return data;
//   }
const PostUser = async({userId}) => {
    const user = await getUser(userId);
  return (
    <div className={styles.detailText}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user?.username}</span>
        </div>
  )
}

export default PostUser
