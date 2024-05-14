import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">

      <Link href="/">
        <span className="text-orange-600 font-bold text-lg cursor-pointer">EVENRITE</span>
      </Link>

      {/* Search Bar */}
      <div className="flex items-center">
        <div className="flex items-center rounded-full border bg-gray-100">
          <input
            type="text"
            placeholder="Browse Event"
            className="px-4 py-2 rounded-l-full outline-none bg-transparent w-64" 
          />
          <button className="bg-orange-500 text-white rounded-r-full p-3">
            <img src="/search.png" alt="Search" className="h-5 w-5" />
          </button>
        </div>
      </div>

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
