import Image from 'next/image';
import React from 'react';
import Button from "./Button";

const Overview = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-800 bg-amber-400 rounded-full pb-20 pt-20 mt-10 mb-10">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-55 xl:max-w-[385px] text-black">Where Food, Music, and Movies Unite  🎸🍜</h2>
          <p className="regular-5 xl:max-w-[500px] text-gray-90"><span className="font-bold">For Life Group</span> seamlessly integrates the realms of food, music, and cinema into a singular, unforgettable experience. Our mission is to cultivate an ambiance where people not only savor their favorite comfort foods but also immerse themselves in an environment designed for extended enjoyment. 👀</p>
        </div>
      </div>
      <div className="flex justify-center">
          <Button 
            type="button" 
            title="Visit Our Instagram" 
            icon="/instagram-logo.png"
            variant="btn_white_outline" 
          />
        </div>
      <div className="flex justify-center mt-10 mb-10">
        <Image src="/wfl-food-1.png" alt="food 1" width={300} height={300} className="mr-7" />
        <Image src="/wfl-food-2.png" alt="food 2" width={300} height={300} className="mr-7" />
        <Image src="/wfl-food-3.png" alt="food 3" width={300} height={300} className="mr-7" />
      </div>
    </section>
  );
}

export default Overview;
