import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
            <Image  alt="sds" width={200} height={10} src="/logo.png"/>
          
         
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-indigo-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-indigo-400 transition">
              <Facebook size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-indigo-400 transition">
              <Twitter size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-indigo-400 transition">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-indigo-400 transition">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Blog. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
