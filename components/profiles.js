import React, { useState } from 'react';
import { Data } from './data';





const Profiles = () => {


const [details,setDetails]=useState(Data[0])
const [activeIndex,setActiveIndex]=useState(0)

const handleClick=(id)=>  {
    setActiveIndex(id)
    console.log("active index id",activeIndex)
   
}

const handleOnChange=(e)=> {
    const id = Number(e.target.value)
    console.log("ID",id)
    
    const subDetails = details.find((item)=>item.id===id)
    console.log("subDetails",subDetails)
    setActiveIndex(subDetails)
}


    return (
        <div>
       
 <div className='flex items-center  text-center justify-center'>
         
        <div >
        
        <h2>
            {details.length}
        </h2>

        </div>
        
        <div className='flex  justify-center items-center !mx-2'>
        {Data.map((item,index)=>(
            <img key={index} src={item.image} onClick={() => handleClick(index)} />
            
            ))}
        </div>
        
        </div>
    
   </div>
    );
}

export default Profiles;
