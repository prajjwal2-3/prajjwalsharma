'use client'
import React, { useState, useEffect } from "react";
import forwardlogo from "../../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg";
import backwardlogo from "../../images/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48.svg";
import Image from "next/image";
import AOS from "aos";

const Carousel = ({ arrayOfImages}:{
    arrayOfImages:string[]
}) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  });

  return arrayOfImages.length === 0 ? null : (
    <div className="relative mb-6  	">
      <img
        alt="img"
        
        className="border rounded-xl w-full "
        src={arrayOfImages[position]}
      />

      {arrayOfImages.length > 1 && (
        <>

          
          <svg xmlns="http://www.w3.org/2000/svg"
            onClick={() =>
                {
                    if (arrayOfImages.length - 1 === position) {
                      setPosition(0);
                    } else {
                      setPosition((prev) => prev + 1);
                    }
                  }
            }
          className="absolute top-0 ml-5 lg:mt-32 md:mt-20 sm:mt-16 mt-20 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200 border" height="40" viewBox="0 96 960 960" width="40"><path d="M655 976 255 576l400-400 56 57-343 343 343 343-56 57Z"/></svg>

<svg xmlns="http://www.w3.org/2000/svg"

onClick={() =>
    {
        if (position === 0) {
          setPosition(arrayOfImages.length - 1);
        } else {
          setPosition((prev) => prev - 1);
        }
      }
}
className="absolute top-0 right-0 mr-5  lg:mt-32 md:mt-20 sm:mt-16 mt-20 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200 border"
height="40" viewBox="0 96 960 960" width="40"><path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/></svg>
        </>
      )}
    </div>
  );
};

export default Carousel;
