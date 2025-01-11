import Image from "next/image";
import React from "react";

const ThreeImage = () => {
  return (
    <div className="relative flex justify-center items-center my-20 w-full">
      <Image
        src={"/img-01.avif"}
        width={500}
        height={500}
        alt="Image-01"
        className="sm:w-1/4 lg:w-2/6 hidden lg:block rounded-xl shadow-xl my-24 z-10 relative"
      />
      <Image
        src={"/img-02.avif"}
        width={500}
        height={500}
        alt="Image-02"
        className="w-full lg:w-2/4 rounded-xl shadow-xl z-20 relative lg:-ml-36 mx-20 lg:mx-0"
      />
      <Image
        src={"/img-03.avif"}
        width={500}
        height={500}
        alt="Image-03"
        className="sm:w-1/4 lg:w-2/6 hidden lg:block rounded-xl shadow-xl my-24 z-10 lg:-ml-36 relative"
      />
    </div>
  );
};

export default ThreeImage;
