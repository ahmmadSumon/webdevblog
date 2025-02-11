"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import {data} from "../data/data"; 
export function TabsDemo() {
  const [activeTab, setActiveTab] = useState("Design"); 
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
      title: "Services",
      value: "services",
      content: (
        <MenuTabContent
        title="Design"
        items={data.filter((item) => item.category === "Design")}
      />
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <MenuTabContent
        title="Design"
        items={data.filter((item) => item.category === "Design")}
      />
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <MenuTabContent
        title="Design"
        items={data.filter((item) => item.category === "Design")}
      />
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <MenuTabContent
        title="Design"
        items={data.filter((item) => item.category === "Design")}
      />
      ),
    },
  ];

  return (
    <div className="h-full   relative  flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs}  />
    </div>
  );
}
const MenuTabContent = ({ title, items }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white 
      backdrop-filter backdrop-blur-lg bg-transparent shadow-2xl border border-white/20">
      <h2 className="text-center text-3xl mb-5">{title}</h2>
      <MenuCarousel items={items} />
    </div>
  );
};
// const DummyContent = () => {
//   return (
//     <Image
//       src="/linear.webp"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[10%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };

const Blogs = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <BlogCard key={item.slug} {...item} />
      ))}
    </div>
  );
}