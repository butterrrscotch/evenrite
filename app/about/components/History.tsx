const History = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-5 mb-20">

      <div className="flex justify-center items-center flex-col md:flex-row md:gap-10">
        <div className="w-40 h-50 rounded-2xl overflow-hidden shadow-lg">
          <img src="/about-01.png" className="w-full h-full object-cover" />
        </div>
        <div className="md:max-w-md">
          <h1 className="bold-32 lg:bold-32 mb-4">Once Upon a Time</h1>
          <p className="text-lg regular-16 text-gray-30">In the heart of the city, For Life Group was born from a passion for blending culinary artistry with sensory delights. Founded by Pandu, our vision was to create a space where every bite tells a story. </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row md:gap-10 mt-10">
        <div className="md:max-w-md">
          <h1 className="bold-32 lg:bold-32 mb-4">With Heart and Passion</h1>
          <p className="text-lg regular-16 text-gray-30">We curated our menu, our cozy lounge to invite you to join us in crafting unforgettable memories</p>
        </div>
        <div className="w-40 h-50 rounded-2xl overflow-hidden shadow-lg">
          <img src="/about-02.png" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row md:gap-10 mt-10">
        <div className="w-40 h-50 rounded-2xl overflow-hidden shadow-lg">
          <img src="/about-03.png" className="w-full h-full object-cover" />
        </div>
        <div className="md:max-w-md">
          <h1 className="bold-32 lg:bold-32 mb-4">Welcome to Our Home</h1>
          <p className="text-lg regular-16 text-gray-30">Where connections are made, and life is celebrated. We are driven by our passion for hospitality and our dedication to exceeding expectations. </p>
        </div>
      </div>

    </div>
  );
};


export default History;
