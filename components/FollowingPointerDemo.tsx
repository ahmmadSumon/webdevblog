import Image from "next/image";
import { FollowerPointerCard } from "../components/ui/following-pointer";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
}

export function FollowingPointerDemo({ blog }: { blog: BlogPost }) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={<TitleComponent title={blog.author} avatar={blog.authorAvatar} />}
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="relative w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10">
            <Image
              src={blog.coverImage}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">{blog.title}</h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {blog.content}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blog.date}</span>
              <Link href={`/details/${blog.slug}`} passHref>
                <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                  Read More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

// TitleComponent for author info
const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      alt={title}
      width={30}
      height={30}
      className="rounded-full"
    />
    <span className="text-sm font-semibold">{title}</span>
  </div>
);
