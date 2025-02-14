import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { data } from "@/data/data";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static paths dynamically
export async function generateStaticParams() {
  return data.map((post) => ({ slug: post.slug }));
}

const DetailsBlog: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  // Find the corresponding blog post
  const story = data.find((item) => item.slug === slug);

  if (!story) return notFound(); // Show 404 page if not found

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mt-20">
      {/* Blog Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {story.title}
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-300 mt-2 italic">
          By {story.author}
        </h2>
      </div>

      {/* Blog Content & Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Blog Content */}
        <div className="md:w-1/2 p-6 bg-white/10 backdrop-blur-md shadow-xl rounded-2xl border border-white/20">
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            {story.content}
          </p>
        </div>

        {/* Blog Image */}
        <div className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={story.coverImage}
            alt={story.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsBlog;
