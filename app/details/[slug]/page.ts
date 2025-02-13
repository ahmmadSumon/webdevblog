// import React from "react";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { data } from "@/data/data";

// // Define the props type for Next.js page params
// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Get static paths dynamically
// export async function generateStaticParams() {
//   return data.map((post) => ({ slug: post.slug }));
// }

// const DetailsBlog: React.FC<PageProps> = ({ params }) => {
//   const { slug } = params;

//   // Find the corresponding blog post
//   const story = data.find((item) => item.slug === slug);

//   if (!story) return notFound(); // Show 404 page if not found

//   return (
//     <div className="max-w-7xl mx-auto px-6">
//       <h1 className="text-5xl font-extrabold mb-4 text-center">{story.title}</h1>
//       <h2 className="text-2xl font-semibold mb-6 text-gray-400 text-center">{story.Name}</h2>
//       <div className="flex flex-col md:flex-row items-center md:items-start">
//         <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
//           <p className="text-xl leading-relaxed text-gray-300 mb-6">{story.description}</p>
//           <p className="text-lg leading-relaxed text-gray-400">{story.story}</p>
//         </div>
//         <div className="relative w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
//           <Image
//             src={story.image}
//             alt={story.title}
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsBlog;
