import React from 'react';
import { useState,useEffect } from 'react';
import { Select,MenuItem,FormControl,InputLabel,Container } from '@mui/material';

const CategoryDropDown = () => {


const [parentCategories,setParentCategories] = useState([]);
const [selectedParent,setSelectedParent] = useState(null);
const [subCategory,setSubCategory] = useState([]);


//client side 

useEffect(() => {
  const categorycat = async () => {
    const res  = await fetch('/api/cats');
    const data = await res.json()
    console.log("dataaaa",data?.data.categories)
    setParentCategories(data?.data.categories);

  };
  categorycat();
}, []);


const handleCategoryChange = (e)=> {
const id = Number(e.target.value)
console.log("ID",id)

const parentCategory = parentCategories.find((cat)=>cat.id === id)
setSelectedParent(id)
console.log("category", parentCategory)

setSubCategory(parentCategory.children || [])

}


  return (
    
    <Container>
    <FormControl fullWidth sx={{marginTop:'40px',marginBottom:'40px'}} variant='outlined'> 
      <InputLabel > Category </InputLabel>
      <Select label='categoryyy' onChange={handleCategoryChange}>
        {parentCategories.map((data)=>(
          <MenuItem  key={data.id} value={data.id}>
          {data.name}
          </MenuItem>
         ))}
      </Select>
      
    </FormControl>

    <FormControl fullWidth sx={{marginTop:'40px',marginBottom:'40px'}} variant='outlined'> 
      <InputLabel >parent Category </InputLabel>
      <Select label='parent categoryyy' >
        {subCategory.map((data)=>(
          <MenuItem  key={data.id} value={data.id}>
          {data.name}
          </MenuItem>
         ))}
      </Select>
      
    </FormControl>

    </Container>
  );
}

export default CategoryDropDown;
