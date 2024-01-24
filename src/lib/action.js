"use server"
import { Post } from "./models";
import { connectToDb } from "./utils";

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
     
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  