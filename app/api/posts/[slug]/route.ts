import { NextResponse } from "next/server";
import connectDB from "../../../../lib/ds";
import Post from "@/models/Post";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    await connectDB();
    const post = await Post.findOne({ slug: params.slug });
    if (!post) return NextResponse.json({ message: "Post not found" }, { status: 404 });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching post" }, { status: 500 });
  }
}
