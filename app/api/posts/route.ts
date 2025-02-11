import { NextResponse } from "next/server";
import connectDB from "../../../lib/ds";
import Post from "@/models/Post";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 }); // Get all posts, newest first
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
}
export async function POST(req: Request) {
    try {
      await connectDB();
      const { title, content, slug, author, category, coverImage } = await req.json();
  
      const newPost = new Post({ title, content, slug, author, category, coverImage });
      await newPost.save();
  
      return NextResponse.json({ message: "Post created successfully!" }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: "Error creating post" }, { status: 500 });
    }
  }