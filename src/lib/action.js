"use server"

import { connectToDB } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from '@/lib/auth';

export const addPost = async (formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    
    try {
        connectToDB();
        const newPost = new Post ({
            title,
            desc,
            slug,
            userId,
        })

        // Save the post to the database
        await newPost.save();
        console.log("Post saved successfully");
        revalidatePath("/blog");   // Revalidate is used to update the cache for the specified path after the post is added
    }catch(err){
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const deletePost = async ( formData ) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB(); 

        await Post.findByIdAndDelete(id);
        console.log("Post deleted successfully");
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export  const handleGithubLogin = async () => {
    "use server";
    await signIn("github")
}

export const handleLogout = async () => {
    "use server";
    await signOut();
}