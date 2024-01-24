import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css"
import { auth } from '@/lib/auth'
const Navbar =async () => {
  const session = await auth() ;
  console.log(session);
  return (
    <div className={styles.container}>
            <div className={styles.logo}>
            Paccy
            </div>
         

          <Links session={session}/>
            
    </div>
  )
}

export default Navbar
