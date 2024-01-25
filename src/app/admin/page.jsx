import { Suspense } from 'react'
import styles from './admin.module.css'
import AdminPosts from '@/components/adminPosts/adminPosts'
import AdminPostsForm from '@/components/adminPostsForm/adminPostsForm'
import AdminUser from '@/components/adminUsers/adminUserForm'
import AdminUserForm from '@/components/adminUserForm/adminUserForm'
import { auth } from '@/lib/auth'

const AdminPage = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostsForm userId = {session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser/>
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;