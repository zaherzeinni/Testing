import React, { useState } from "react";
import { Data } from "./data";

const Profiles = () => {
  const [details, setDetails] = useState(Data[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (id) => {
    setActiveIndex(id);
    console.log("active index id", activeIndex);
    const text = details.find((cat) => cat.id === Data.index);

    console.log("details with image", text);

    //setDetails(text);
  };

  return (
    <div className=" !text-5xl text-red-700">
        <div  >
    Name:    {details.name}
      </div>
      <div>
    ID:    {activeIndex}
    </div>

      <div className="flex  justify-center items-center !mx-2">
        {Data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
