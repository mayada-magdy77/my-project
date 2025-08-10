import { useContext, useEffect, useState } from "react"
import { getAllProducts } from "../../services/products-services";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { productsContext } from "../../context/Products.context";


export default function FeaturedProducts() {
   const {products,isLoading,isError,error}=useContext(productsContext)

   
   if(isLoading){
       return<Loading/>
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
