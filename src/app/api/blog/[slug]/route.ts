//This file will be responsible for fetching a single post based on the slug provided in the URL.

import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request : any, {params}: {params: any}) => {
    const {slug} = params
    try{
        connectToDB();

        const post = await Post.findOne({slug})
        return NextResponse.json(post)
    }catch(err){
        throw new Error("Failed to fetch post!")
    }
}

export const DELETE = async (request : any, {params}: {params: any}) => {
    const {slug} = params
    try{
        connectToDB();

        await Post.findOneAndDelete({slug})
        return NextResponse.json("Post deleted successfully!")
    }catch(err){
        throw new Error("Failed to delete post!")
    }
}