"use client";
import { useState } from "react";
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import { data } from "../data/data";
import { MeteorsDemo } from "./MeteorsDemo";

// Define the type for a blog post
interface BlogPost {
  slug: string;
  title: string;
  content: string;
  coverImage: string;
  category: string;
}

// Props type for MenuTabContent
interface MenuTabContentProps {
  title: string;
  items: BlogPost[];
}

// Props type for Blogs component
interface BlogsProps {
  items: BlogPost[];
}

export function TabsDemo() {
  const [activeTab, setActiveTab] = useState<string>("Design");

  const tabs = [
    {
      title: "Design",
      value: "Design",
      content: (
        <MenuTabContent
          title="Design"
          items={data.filter((item) => item.category === "Design")}
        />
      ),
    },
    {
      title: "Web Development",
      value: "Web Development",
      content: (
        <MenuTabContent
          title="Web Development"
          items={data.filter((item) => item.category === "Web Development")}
        />
      ),
    },
    {
      title: "Frontend",
      value: "Frontend",
      content: (
        <MenuTabContent
          title="Frontend"
          items={data.filter((item) => item.category === "Frontend")}
        />
      ),
    },
    {
      title: "Backend",
      value: "Backend",
      content: (
        <MenuTabContent
          title="Backend"
          items={data.filter((item) => item.category === "Backend")}
        />
      ),
    },
    {
      title: "AI with Web",
      value: "AI with Web",
      content: (
        <MenuTabContent
          title="AI with Web"
          items={data.filter((item) => item.category === "AI with Web")}
        />
      ),
    },
  ];

  return (
    <div className="h-full relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

// MenuTabContent component
const MenuTabContent: React.FC<MenuTabContentProps> = ({ title, items }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white 
      backdrop-filter backdrop-blur-lg bg-transparent shadow-2xl border border-white/20">
      <h2 className="text-center text-3xl mb-5">{title}</h2>
      <Blogs items={items} />
    </div>
  );
};

// Blogs component
const Blogs: React.FC<BlogsProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <MeteorsDemo

          key={item.slug}
          slug={item.slug}
          title={item.title}
          content={item.content}
          coverImage={item.coverImage}
        />
      ))}
    </div>
  );
};
