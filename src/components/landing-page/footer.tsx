import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from 'next/link';

const footerLinks = {
    "Product": [
        { name: "Resume Builder", href: "/builder" },
        { name: "Resume Templates", href: "#" },
        { name: "Cover Letter Builder", href: "#" },
        { name: "Career Blog", href: "#" },
    ],
    "Support": [
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
    ],
    "Company": [
        { name: "About Us", href: "#" },
        { name: "Press", href: "#" },
        { name: "Careers", href: "#" },
    ],
    "Community": [
        { name: "Blog", href: "#" },
        { name: "Forum", href: "#" },
        { name: "Affiliates", href: "#" },
    ]
}


export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{title}</h3>
                    <ul className="mt-4 space-y-4">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-base text-gray-300 hover:text-white">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white"><Facebook /></Link>
                <Link href="#" className="text-gray-400 hover:text-white"><Twitter /></Link>
                <Link href="#" className="text-gray-400 hover:text-white"><Linkedin /></Link>
                <Link href="#" className="text-gray-400 hover:text-white"><Instagram /></Link>
            </div>
            <p className="mt-8 md:mt-0 text-base text-gray-400">&copy; 2024 Adify, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  