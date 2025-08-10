import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {  faCodeCompare, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products-services";
import Loading from "../Loading/Loading";
import { calcTimeLeft } from "../../utils/counterDown";
import { productsContext } from "../../context/Products.context";


export default function HomeDeals() {
const {products,isLoading,isError,error}=useContext(productsContext)

const[timeLEFT , setTimeLeft]=useState({hours:0,minutes:0,seconds:0});





useEffect(()=>{
   const timer= setInterval(() => {
      const NewTimeLeft= calcTimeLeft();
      setTimeLeft(NewTimeLeft);
    }, 1000);
    return function (){
      clearInterval(timer)
    }
},[]);

if(isLoading){
    return<Loading/>
}

const deals=products.filter((product)=> product.priceAfterDiscount).slice(0,5);


  return (
    <>
    <section className="mt-8">
        <div className="container">
 <div className="flex items-center justify-between">
    <div>
        <h2 className="text-2xl font-bold mb-3">Deals of the days</h2>
        <div className="flex items-center gap-6">
            <p>Offers Ends in:</p>
            <div className="flex items-center gap-2  "> 
                <div className="size-7 bg-gray-900 text-white text-sm rounded-md flex items-center justify-center">{String(timeLEFT.hours).padStart(2,0)}</div>
                <span>:</span>
                  <div className="size-7 bg-gray-900 text-white text-sm rounded-md flex items-center justify-center">{String(timeLEFT.minutes).padStart(2,0)}</div>
                <span>:</span>
                  <div className="size-7 bg-gray-900 text-white text-sm rounded-md flex items-center justify-center">{String(timeLEFT.seconds).padStart(2,0)}</div>
                
            </div>
        </div>
    </div>
   <div> <Link to={`/deals`} className="text-primary-600 hover:text-primary-700 transition-colors duration-200"> View All Deals</Link></div>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6">

  {deals.map((product)=>(   <ProductCard key={product._id} productInfo={product}></ProductCard>
          ))}
 </div>
   
        </div>
    </section>
    </>
  )
}
