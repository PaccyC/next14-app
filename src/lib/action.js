"use server"
import { revalidatePath } from "next/cache";
import { Post,User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut} from "@/lib/auth";
import bcrypt from 'bcrypt'
export const addPost = async (formData) => {
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
  
  export const deletePost = async (formData) => {
    const { id} = Object.fromEntries(formData.entries());
  
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
  

export const handleSignInWithGithub=async()=>{
  
   await signIn("github")
  }

export const handleLogout=async()=>{
    
   await signOut()
  }

  export const addUser = async(formData)=>{
const {username,email,password,passwordRetype,img}= Object.fromEntries(formData.entries());
if (password != passwordRetype){
  throw new Error("Passwords do not match")
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
  console.log("User already exists");
  }

  await newUser.save()
  console.log("New user created");

} catch (error) {
  console.log(error);

}  
}

export const login = async(formData) =>{
  const {email,password}= Object.fromEntries(formData.entries());
  
  try {
    
    await signIn("credentials",{email,password})
  } catch (error) {
   console.log(error); 
  }
 
}