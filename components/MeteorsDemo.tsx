import React from "react";
import { Meteors } from "../components/ui/meteors";
import Image from "next/image";
import Link from "next/link";

interface MeteorsDemoProps {
  title: string;
  content: string;
  coverImage: string;
  slug: string;
}

export function MeteorsDemo({ title, content, coverImage, slug }: MeteorsDemoProps) {
  return (
    <div className="relative max-w-sm w-full">
      <div className="relative shadow-2xl bg-gray-900 border border-gray-800 p-6 h-auto w-full rounded-2xl flex flex-col">
        <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
          <Image 
            src={coverImage} 
            alt={title} 
            width={300} 
            height={200} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h1 className="font-bold text-lg text-white mb-2">{title}</h1>
        <p className="text-sm text-gray-400 mb-4">{content.substring(0, 100)}...</p>
        <Link href={`/details/${slug}`}  key={slug}  passHref>
          <button className="w-40 h-10 rounded-xl bg-black text-white text-sm">Read more</button>
        </Link>
        <Meteors className="z-50" number={10} />
      </div>
    </div>
  );
}
