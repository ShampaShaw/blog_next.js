"use server"

import { connectToDB } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from '@/lib/auth';
import bcrypt from "bcryptjs";

// ADD POST

export const addPost = async (previousState,formData) => {
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
        revalidatePath("/admin");
    }catch(err){
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

// DELETE POST

export const deletePost = async ( formData ) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB(); 

        await Post.findByIdAndDelete(id);
        console.log("Post deleted successfully");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

// ADD USER

export const addUser = async (previousState,formData) => {
    const { username,email,password,img } = Object.fromEntries(formData);
    
    try {
        connectToDB();
        const newUser = new User ({
            username,
            email,
            password,
            img,
        })

        // Save the post to the database
        await newUser.save();
        console.log("User saved successfully");
        revalidatePath("/admin");   // Revalidate is used to update the cache for the specified path after the post is added
    }catch(err){
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

//DELETE USER

export const deleteUser = async ( formData ) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB(); 

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("Post deleted successfully");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

// EDIT POST


//HANDLE GITHUB LOGIN

export  const handleGithubLogin = async () => {
    "use server";
    await signIn("github")
}

// HANDLE LOGOUT

export const handleLogout = async () => {
    "use server";
    await signOut();
}

// REGISTER

export const register = async (previousState,formData) => {
    const { username, email, password, img, confirmPassword} = Object.fromEntries(formData);
    
    if (password !== confirmPassword) {
        return { error: "Passwords do not match!"}
    }

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
        return { success: true }
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

// LOGIN

export const login = async (previousState,formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);
        if(err.message === "CredentialsSignin"){
            return {error: "Invalid Username or Password!"};
        }
        throw err;
      }
  };