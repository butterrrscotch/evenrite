import Image from "next/image";
import Button from "./Button";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-cover bg-center" style={{ backgroundImage: "url('evenrite-hero.png')" }}>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 xl:max-w-[600px] mt-0 mb-5 text-orange-600">Navigating You Rite</h1>
        <div className="flex flex-col w-full gap-3 sm:flex-row mt-5">
      <Link href="/eventlist">
        <button className="px-4 py-2 rounded-full border border-orange-600 bg-white text-orange-600 hover:bg-orange-600  hover:text-white focus:outline-none transition-colors duration-300">
          Browse Events
        </button>
      </Link>
    </div>
      </div>
    </div>
  );
};

export default Hero;
