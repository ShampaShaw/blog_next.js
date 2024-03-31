"use server"

import { connectToDB } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from '@/lib/auth';
import bcrypt from "bcryptjs";

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

export const register = async (formData) => {
    const { username, email, password,img, confirmPassword} = Object.fromEntries(formData);
    
    if(password !== confirmPassword) return { 
        error: "Passwords do not match!" 
    };

    try {
        connectToDB();

        let user = await User.findOne({ username });

        if(user) return {
            error: "User already exists!"
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User({
            username,
            email,
            password:hashedPassword,
            img,
        });

        await newUser.save();
        console.log("User registered successfully");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const login = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", {username, password});
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}
