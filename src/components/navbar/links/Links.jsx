"use client"


import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'
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
const Links = () => {
    const [open,setOpen]=useState(false)

    const isAdmin =true
    const session=true
  return (
    <div className={styles.container}>

  
    <div className={styles.links}>

        {links.map((link)=>(
            <NavLink item={link} key={link.title}/>
        ))}{
            session ?(
             <>
             {isAdmin && (
                <NavLink item={{"title":"Admin", "path":"/admin"}}/>
                
             )}
             <button className={styles.logout}>Logout</button>
             </>
            ):(
                <>
     <NavLink  item={{"title":"login", "path":"/login"}}/>
     <NavLink item={{"title":"signup","path":"/register"}}/>
                </>

            )
        }
    </div>
    <button onClick={()=>setOpen((prev) =>!prev) } className={styles.menuButton}>Menu</button>
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
