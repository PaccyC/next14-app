// import { handleSignInWithGithub } from "@/lib/action"
import { login } from "@/lib/action"
import { signIn } from "@/lib/auth"
const LoginPage =async () => {
   const handleSignInWithGithub=async()=>{
  "use server"
    await signIn("github")
   }
 

  return (
    <div>
      <form action={handleSignInWithGithub}>

<button>Signin with Github </button>
</form>
<form action={login}>
  <input type="email" name="email" placeholder="Email"/>
  <input type="password" name="password" placeholder="Password"/>
  <button>Login with Credentials</button>
</form>
    </div>
  )
}

export default LoginPage
