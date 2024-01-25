"use client"

import {useFormState} from 'react-dom'
import { login } from '@/lib/action'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './loginForm.module.css'
const LoginForm = () => {
  const [state,formAction]= useFormState(login,undefined)
  const router= useRouter()
  useEffect(()=>{

 state?.success && router.push("/") 

  },[state?.success,router])
  return (
    <form className={styles.form} action={formAction}>
  
    <input type="email" placeholder='Email' name='email' />
    <input type="password" placeholder='Password' name='password' />

    <button>Login</button>
    {state?.error}
    <Link href="/register">{"Don't  have an account"} ? <b>Register</b>
     </Link>
  </form>

  
  )
}

export default LoginForm
