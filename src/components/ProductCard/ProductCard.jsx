import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {  faCodeCompare, faPlus, faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { calcDiscount } from "../../utils/discount-utils";
import Rating from "../Rating/Rating";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {WishlistContext } from "../../context/Wishlist.context";
import { icon } from "@fortawesome/fontawesome-svg-core";
export default function ProductCard({productInfo}) {
  const{imageCover,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
    title,
    category,
    id}=productInfo;

const{handleAddProductToWishlist,products,deleteItemFromWishlist}=useContext(WishlistContext )
const isExist=products.some(item=> item.id === id);
 const {handleAddingProductToCart}=useContext(CartContext);
  return (
    <>
     <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
  <div>
    <Link to= {`/product/${id}`} className="block">  <img src={imageCover} alt="" className="h-60 mx-auto"/></Link>
   
  </div>
<div className="p-4 space-y-3">
      <div >
    <span className="text-sm text-gray-500">{category.name}</span>
       <h2 className="font-semibold"> <Link to= {`/product/${id}` } className="line-clamp-2">{title}</Link></h2>
   
  </div>
  <div className="flex items-center gap-2">
  <Rating rating={ratingsAverage}/>
    <span>{ratingsAverage}</span>
    <span>({ratingsQuantity})</span>
  </div>
<div className="flex items-center justify-between">
      <div className="space-x-3">
    <span className="text-lg text-primary-600 text-bold">{priceAfterDiscount? priceAfterDiscount:price} EGP</span>
    {priceAfterDiscount && <del className="text-500">{price} EGP</del>}
  </div>
  <div>
    <button className="btn bg-primary-600 p-0 size-8 rounded-full text-white hover:text-primary-700 transition-colors duration-200" onClick={()=>{handleAddingProductToCart({id})}}>
        <FontAwesomeIcon icon={faPlus}/>
    </button>
  </div>
</div>
</div>
<div className="text-gray-500 absolute top-4 right-4 flex flex-col gap-4 *:hover:text-primary-600 *:transition-colors *:duration-200">
    <button onClick={()=>{isExist? deleteItemFromWishlist({id}) :handleAddProductToWishlist({id})}} >
       
          
        {isExist?  <FontAwesomeIcon icon={solidHeart} className="text-red-600"/> : <FontAwesomeIcon icon={faHeart}/>}
       
    </button>
        <button>
        <FontAwesomeIcon icon={faCodeCompare}/>
    </button>
        <button>
        <Link to= {`/product/${id}`}>
        <FontAwesomeIcon icon={faEye}/>
        </Link>
    </button>
</div>

{priceAfterDiscount && <div  className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md ">
    <span>-{calcDiscount({price,priceAfterDiscount})}%</span>
</div>}
  </div>
    </>
  )
}
