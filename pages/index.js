import axios from "axios";
//axios. get to fetch data from api


import { useEffect, useState } from "react";

function Home({products}) {

  // const [products,setProducts] = useState([])
  
  // client side 

  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data } = await axios('/api/products');
  //     console.log("dataaaa",data)
  //     setProducts(data?.data);

  //   };
  //   fetch();
  // }, []);

  



  return (
    
   
    
    <div>
    {products?.map((data)=>(
      <div>
      {data.Heading}
      <div>
      {data.bookNow}
      </div>
      </div>
    ))}
       
    </div>

   
  );
}

export default Home;

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.BaseUrl}/api/products`)
    const data = await res.json()
    console.log("Daqta-->" ,data?.data)
    return ({
      props: {
        products: data?.data
      }
    })
  } catch (error) {
    return ({
      props: {
        products: []
      }
    })
  }
}