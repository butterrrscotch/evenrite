"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <span className="text-orange-600 font-bold text-lg cursor-pointer">EVENRITE</span>
      </Link>

      {/* Search Bar */}
      <form className="flex items-center" onSubmit={handleSearch}>
        <div className="flex items-center rounded-full border bg-gray-100">
          <input
            type="text"
            placeholder="Browse Event"
            className="px-4 py-2 rounded-l-full outline-none bg-transparent w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="bg-orange-500 text-white rounded-r-full p-3">
            <img src="/search.png" alt="Search" className="h-5 w-5" />
          </button>
        </div>
      </form>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href="/login">
          <button className="px-4 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-600 transition-colors duration-300">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
