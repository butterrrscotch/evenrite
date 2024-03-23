import React from 'react';
import Image from "next/image";


const OurBrands = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <h1 className="bold-32 lg:bold-32 mb-5">Elevating Every Moments</h1>
      <p className="regular-16 mb-5 text-center mr-20 ml-20 text-gray-30">At For Life Group, we take pride in our diverse range of brands, each offering a unique culinary experience tailored to satisfy every craving. Whatever your preference, our brands are here to elevate every moment, ensuring that every visit to For Life Group is a memorable one.</p>
      <section className="flexCenter flex-col">
      <div className="padding-container max-container w-800 bg-gray-90 rounded-2xl pb-10 pt-10 mt-5 mb-5">
        <div className="flex flex-wrap justify-between lg:gap-10">
        <Image src="/Marquee_WFL.png" alt="WFL" width={300} height={150} />
          <p className="flex regular-5 xl:max-w-[500px] text-white items-center justify-center">Indulge in the aromatic flavors of traditional Indonesian comfort food with Warmindo For Life. From hearty bowls of steaming noodles to savory rice dishes, each bite is a taste of home. 🍜</p>
        </div>
      </div>
    </section>
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-800 bg-gray-90 rounded-2xl pb-10 pt-10 mt-5 mb-5">
        <div className="flex flex-wrap justify-between lg:gap-10">
        <Image src="/Marquee_CFL.png" alt="CFL" width={300} height={150} />
          <p className="flex regular-5 xl:max-w-[500px] text-white items-center justify-center">Start your day on the right note with Coffee For Life. Sip on rich, freshly brewed coffee crafted from the finest beans, or indulge in specialty drinks that awaken your senses and elevate your coffee experience. ☕️</p>
        </div>
      </div>
    </section>
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-800 bg-gray-90 rounded-2xl pb-10 pt-10 mt-5 mb-5">
        <div className="flex flex-wrap justify-between lg:gap-10">
        <Image src="/Marquee_RFL.png" alt="RFL" width={300} height={150} />
          <p className="flex regular-5 xl:max-w-[500px] text-white items-center justify-center">Treat yourself to the irresistible simplicity of Roti Bakar For Life. Crispy toasted bread, generously slathered with creamy spreads and flavorful toppings, offer a delightful combination of crunch and comfort in every bite. 🍞</p>
        </div>
      </div>
    </section>
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-800 bg-gray-90 rounded-2xl pb-10 pt-10 mt-5 mb-5">
        <div className="flex flex-wrap justify-between lg:gap-10">
        <Image src="/Marquee_EFL.png" alt="EFL" width={300} height={150} />
          <p className="flex regular-5 xl:max-w-[500px] text-white items-center justify-center">Quench your thirst with the vibrant flavors of Es Buah & Jus For Life. From refreshing fruit cocktails to freshly squeezed juices, each sip is a burst of natural goodness, keeping you cool and hydrated throughout the day. 🥤</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default OurBrands;
