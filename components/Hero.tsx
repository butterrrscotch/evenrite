import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-cover bg-center" style={{ backgroundImage: "url('/WFL_Collateral_01.jpg')" }}>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 xl:max-w-[600px] mt-0 mb-5">One Flavorful Moment at a Time</h1>
        <p className="regular-20 mt-2 mb-5 text-gray-30 xl:max-w-[420px]">
        Where culinary delights meet sensory bliss, we craft spaces that elevate conversations and prolong moments of joy.
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row mt-5">
          <Button 
            type="button" 
            title="Visit Us" 
            variant="btn_amber_outline" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
