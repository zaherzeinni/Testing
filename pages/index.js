import axios from "axios";
//axios. get to fetch data from api

import CategoryDropDown from "@/components/categoryDropDown";
import { useEffect, useState } from "react";

function Home() {

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
      {/* <div>
      {products.length}
      </div>
    {products?.map((data)=>(
      <div>
      {data.Heading}
      <div>
      {data.bookNow}
      </div>
      </div>
    ))} */}
       
<CategoryDropDown />

    </div>

   
  );
}

export default Home;

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch(`${process.env.BaseUrl}/api/products`)
//     const data = await res.json()
//     console.log("Daata-->" ,data?.data)
//     return ({
//       props: {
//         products: data?.data
//       }
//     })
//   } catch (error) {
//     return ({
//       props: {
//         products: []
//       }
//     })
//   }
// }