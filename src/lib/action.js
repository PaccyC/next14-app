"use server"
import { revalidatePath } from "next/cache";
import { Post,User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut} from "@/lib/auth";
import bcrypt from 'bcryptjs'
export const addPost = async (previousState,formData) => {
    const { title, desc, id, userId } = Object.fromEntries(formData.entries());
  
    try {
      connectToDb();
      const newPost = new Post({
        title,
        desc,
        id,
        userId,
      });
  
      await newPost.save();
      console.log("saved to db");
      revalidatePath("/blog")
     
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  export const addUser = async (formData) => {
    const { username,email,password,img,id } = Object.fromEntries(formData.entries());
  
    try {
      connectToDb();
      const newUser = new User({
       username,
       email,
       password,
       img,id
      });
  
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/blog")
      revalidatePath("/admin")
     
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  
  export const deletePost = async (id,formData) => {
    // const { id} = Object.fromEntries(formData.entries());
  
    try {
      connectToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("deleted from db");
      
      revalidatePath("/blog")
     
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  export const deleteUser = async (formData) => {
    const { id} = Object.fromEntries(formData.entries());
  
    try {
      connectToDb();
  
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      
      revalidatePath("/blog")
       
      revalidatePath("/admin")
     
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  

  

export const handleSignInWithGithub=async()=>{
  
   await signIn("github")
  }

export const handleLogout=async()=>{
    
   await signOut()
  }

  export const register = async(previousState,formData)=>{
const {username,email,password,passwordRetype,img}= Object.fromEntries(formData.entries());
if (password != passwordRetype){
  return{error:"Passwords do not match"}

}
try {
  
  connectToDb();
  const salt = await  bcrypt.genSalt(10);
  const hashedPassword= await bcrypt.hash(password,salt)
  const newUser= await User.create({
    username,
    email,
    password:hashedPassword,
    img
  })

  const user= await User.findOne({email:email})
  if(user){
  return {error:"User already exists"}
  }

  await newUser.save()
  console.log("New user created");
  return {success:true}

} catch (error) {
  console.log(error);

}  
}

export const login = async(previousState,formData) =>{
  const {email,password}= Object.fromEntries(formData);
  
  try {
    
    await signIn("credentials",{email,password})
    return {success:true}
  }
  catch (err) {
  console.log(err); 
  if(err.message.includes ("CredentialsSignIn")){
    return {error:"Invalid email or password"}
  }
  throw err

  }
 
}
