import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-[1000px] p-4 mx-auto">
        <div className=" max-h-[500px] relative">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[400px] bg-black/40 flex flex-col justify-center" >
            <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              The<span className="text-orange-500"> Best</span>
            </h1>
            <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-orange-500"> Delivered</span> Foods
            </h1>
          </div>
          <img
          className="w-full max-h-[400px] object-cover"
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
