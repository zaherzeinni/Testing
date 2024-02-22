import React, { useState } from "react";
import { Data } from "./data";

const Profiles = () => {
  const [details, setDetails] = useState(Data[1]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (item) => {
    setDetails(item);
    setActiveIndex(item.id);
  };

  return (
    <div className=" !text-5xl text-red-700 my-5 text-center">
      <div>Name: {details.name}</div>
      <div>ID: {activeIndex}</div>
      <div>{details.text}</div>

      <div className="flex  justify-center items-center !mx-3">
        {Data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            onClick={() => handleClick(item)}
            className={` ${
              activeIndex === item.id
                ? "  opacity-100 !rounded-full ring-blue-500 ring-2 hover:scale-110 duration-500"
                : ""
            }  cursor-pointer text-xl opacity-50 rounded-2xl mx-4 my-4`}
          />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
