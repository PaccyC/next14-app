"use client"


import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'
import Image from 'next/image'
import { handleLogout } from '@/lib/action'
const links=[
    {
        "title":"Home",
        "path":"/"
    },
    {
        "title":"About",
        "path":"/about"
    },
    {
        "title":"Blog",
        "path":"/blog"
    },
    {
        "title":"Contact",
        "path":"/contact"
    }
]
const Links =({session}) => {
    const [open,setOpen]=useState(false)

    const isAdmin =true
    
  return (
    <div className={styles.container}>

  
    <div className={styles.links}>

        {links.map((link)=>(
            <NavLink item={link} key={link.title}/>
        ))}{
            session ?(
             <>
             {session.user.isAdmin && (
                <NavLink item={{"title":"Admin", "path":"/admin"}}/>
                
             )}
             <form action={handleLogout}>

             <button className={styles.logout}>Logout</button>
             </form>
             </>
            ):(
                <>
     <NavLink  item={{"title":"login", "path":"/login"}}/>
     <NavLink item={{"title":"signup","path":"/register"}}/>
                </>

            )
        }
    </div>

    <Image src="/menu.png" width={30} height={30} 
    onClick={()=>setOpen((prev) =>!prev) }
    className={styles.menuButton}
    />
    {open && (
        <div className={styles.mobileLinks}> 
          {links.map((link)=>(
            <NavLink item={link} key={link.title}/>
        ))}
        </div>
      
    )}
    </div>
  )
}

export default Links
