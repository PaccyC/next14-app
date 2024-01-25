import Image from 'next/image';
import styles from './adminUser.module.module.css'
import { getUsers } from '@/lib/data'
import { deleteUser } from '@/lib/action';
const AdminUser = async() => {
  const users= await getUsers();
  return (
    <div className={styles.container}>
     <h1>User</h1>
     {users.map((user)=>(
      <div className={styles.user} key={user.id}>
        <div className={styles.detail}>
          <Image
           src={user.img || "/noavatar.png"}   
           alt=''  
           height={50}
           width={50}  />
          <span>{user.username}</span>
        </div>
        <form action={deleteUser}>
          <input type="hidden" value={user.id} name='id' />
          <button className={styles.userButton}>Delete</button>
        </form>
      </div>
     ))}
    </div>
  )
}

export default AdminUser
