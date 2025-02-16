import React from "react";
import { motion } from "framer-motion";
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
      <Link href={`/details/${slug}`} passHref>
      <div className="relative shadow-2xl border border-gray-800 p-6 h-auto w-full rounded-2xl flex flex-col">
        <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
          <Image 
            src={coverImage} 
            alt={title} 
            width={300} 
            height={200} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Motion Title with Hover Underline */}
        <motion.h1 
  className="font-bold text-xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 relative inline-block"
  whileHover={{ y: -2 }} // Moves slightly up on hover
>
  {title}
  <motion.div
    className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-400"
    initial={{ scaleX: 0 }}
    whileHover={{ scaleX: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    style={{ originX: 0 }} // Ensures it expands from left to right
  />
</motion.h1>

        <p className="text-lg text-white mb-4">{content.substring(0, 100)}...</p>
        
          <button className="w-40 h-10 rounded-xl bg-black text-white text-sm">Read more</button>
        
        <Meteors className="z-50" number={10} />
      </div>
      </Link>
    </div>
  );
}
