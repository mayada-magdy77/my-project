import {  useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading";

import { useParams } from "react-router";
import { getAllProducts } from "../../services/products-services";
import ProductCard from "../../components/ProductCard/ProductCard";


export default function Category() {
  const[products,setProducts]=useState(null)
  const[isLoading , setIsLoading]=useState(true);
    const { id } = useParams(); 
     

 async function fetchCategoryProducts() {
try {
   setIsLoading(true)
    const response= await getAllProducts({Category:id})
    if (response.success){
        setIsLoading(false)
        setProducts(response.data.data);
       
    }
   } catch (error) {
    setIsLoading(false)
}
}

useEffect(()=>{
    fetchCategoryProducts();
},[]);


if(isLoading){
    return <Loading/>
}


  return (
 <>
 
 <section className="mt-8 pb-8">
         <div className="container">
             <h2 className="text-xl font-bold mb-4">Featured Products</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {products.map((product)=>(   <ProductCard key={product._id} productInfo={product}></ProductCard>
                        ))}
             </div>
  
         </div>
     </section>
 </>
  )
}
