// import { handleSignInWithGithub } from "@/lib/action"
import LoginForm from "@/components/loginForm/loginForm"
import styles from './login.module.css'
import { signIn } from "@/lib/auth"
const LoginPage =async () => {
   const handleSignInWithGithub=async()=>{
  "use server"
    await signIn("github")
   }
 

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <form action={handleSignInWithGithub} >

<button className={styles.github} >Signin with Github </button>
</form>
<LoginForm/>
    </div>
    </div>
  )
}

export default LoginPage
