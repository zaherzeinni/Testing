import React, { useState } from 'react';
import { Data } from './data';
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Container,
  } from "@mui/material";





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
    

}


    return (
        <div>
  <Container>
  <FormControl
        fullWidth
        sx={{ marginTop: "40px", marginBottom: "40px" }}
        variant="outlined"
      >
        <InputLabel> Category </InputLabel>
        <Select label="categoryyy" onChange={handleOnChange}>
          {Data.map((data) => (
            <MenuItem key={data.id} value={data.id}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        
      </Container>
      <div className='flex  justify-center items-center !mx-2'>
        {Data.map((item,index)=>(
            <img key={index} src={item.image} onClick={() => handleClick(index)} />
            
            ))}
        </div>
        </div>
    
    );
}

export default Profiles;





