"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import NavigationMenuDemo from "./NavigationMenuDemo";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

interface MenuItem {
  name: string;
  href: string;
}

interface Product {
  id: number;
  name: string;
  href: string;
}

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    { name: "Smartphones", href: "/products" },
    { name: "Laptops", href: "/products" },
    { name: "Gaming Consoles", href: "/products" },
    { name: "Wearables", href: "/products" },
    { name: "Accessories", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Support", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

 

  return (
    <nav
      className={`md:bg-transparent/30 bg-black shadow-md py-2 text-white md:py-5 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Gadget Shop"
                width={160}
                height={60}
                className="overflow-hidden rounded-2xl"
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavigationMenuDemo />
          </div>

          {/* Desktop Search */}
          <div className="flex items-center space-x-4">
            <div className="flex py-5">
              <Link href="/products">
                <button className="bg-[#F85606] text-white py-2 px-4 rounded-lg">
                  Buy Best
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`sm:hidden text-white text-2xl transition-transform duration-300 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for gadgets..."
                  className="w-full p-2 border border-gray-300 text-black rounded-md outline-none"
                />
                <button
                 
                  className="p-2 bg-black rounded-full text-white ml-2"
                >
                  Search
                </button>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="bg-black rounded-full p-3 text-white"
              >
                Close
              </button>
              {/* Display Results */}
              <div className="space-y-2">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    className="block text-black bg-gray-100 p-2 rounded-md hover:bg-gray-200"
                  >
                    {result.name}
                  </Link>
                ))}
                {searchResults.length === 0 && searchQuery && (
                  <p className="text-gray-500">No results found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black-400 rounded-b-lg shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block pl-3 pr-4 py-2 text-white border-l-4 border-transparent hover:bg-[#F85606]  text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
