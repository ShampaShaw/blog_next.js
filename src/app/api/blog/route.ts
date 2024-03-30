// This file is responsible for fetching all the posts from the database and returning them as a response.in my blog

import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request : any) => {
    try{
        connectToDB();

        const posts = await Post.find()
        return NextResponse.json(posts)
    }catch(err){
        throw new Error("Failed to fetch posts!")
    }
}