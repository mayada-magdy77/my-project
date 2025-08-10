import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../../components/Rating/Rating";
import { faArrowRotateBackward, faCartPlus, faMinus, faPlus, faShare, faShareNodes, faTruck, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { calcDiscount } from "../../utils/discount-utils";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router";
import { WishlistContext } from "../../context/Wishlist.context";

export default function ProductInfo({ ProductDetails }) {
  const { id, title,
    imageCover, description,
    category, price, priceAfterDiscount,
    images,
    ratingsAverage
    ,
    ratingsQuantity,
    quantity

  } = ProductDetails
const{handleAddProductToWishlist,products ,deleteItemFromWishlist}=useContext(WishlistContext )
const isExist=products.some(item=> item.id === id);
 const{handleAddingProductToCart,products:cartProduct,handleDeletinggProductFromCart}=useContext(CartContext);
const Exist=cartProduct.some(item=> item.id === id);

  return (
    <>
      <section>
        <div className="container px-4 bg-white rounded-lg shadow-md py-6">
          <div className="flex flex-col lg:flex-row gap-10">
        
            <div className="images lg:w-96">
              <ReactImageGallery showNav={false} showPlayButton={false} showFullscreenButton={false} items={images.map((image)=>{
                return{
                     original: image,
                     thumbnail: image,

                }
              })}/>
            </div>
         
        

            <div className="text space-y-4 lg:w-3/5">
              <div className="flex items-center justify-between">
                <div> <span className={`${quantity > 0 ? "bg-primary-100 text-primary-700" : "bg-red-100 text-red-700"} p-2 rounded text-sm`}>{quantity > 0 ? "In Stock" : "Out of Stock"}</span></div>
                <div className="space-x-1 text-gray-600">
                  <FontAwesomeIcon icon={faShareNodes} />
                 <button  onClick={()=>{isExist? deleteItemFromWishlist({id}) :handleAddProductToWishlist({id})}}>  {isExist?  <FontAwesomeIcon icon={solidHeart} className="text-red-600"/> : <FontAwesomeIcon icon={faHeart}/>}</button>
                </div>
              </div>
         
             <h1 className="text-lg text-bold">{title} </h1>
           
              <div className="flex items-center gap-2">
                <Rating rating={
                  ratingsAverage
                } />
                <span>{
                  ratingsAverage
                }</span>
                <span>({ratingsQuantity})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg text-bold"> {priceAfterDiscount || price} EGP</span>
               {priceAfterDiscount? 
               <>
               <del className="text-gray-500">{price} EGP</del>
                <span className="bg-red-300 py-1 px-2 rounded text-sm"> save {calcDiscount({price,priceAfterDiscount})}%</span>
               </>:""
              }
              </div>
              <p className="pt-8 pb-4 text-gray-500">{description}</p>
     
              <div className="text-gray-500 gap-8 text-md flex items-center">
                <span>Quantity:</span>
                <div className=" space-x-6 py-2 px-4 border border-gray-200 rounded-md ">
                  <button> <FontAwesomeIcon icon={faMinus} /></button>
                  <span>0</span>
                  <button> <FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <span>only {quantity} items leftin stock</span>
              </div>
              <div className="pt-6 flex items-center gap-2">

                {Exist?  <button className="btn w-96 bg-red-600 text-white space-x-2 " onClick={()=>{handleDeletinggProductFromCart({id})}}>
                  <FontAwesomeIcon icon={faCartPlus} />
                  <span>Remove from Cart</span>
                </button> : <button className="btn w-96 bg-primary-600 text-white space-x-2 " onClick={()=>{handleAddingProductToCart({id})}}>
                  <FontAwesomeIcon icon={faCartPlus} />
                  <span>Add to Cart</span>
                </button>} 

                
                <button className="btn w-96 bg-transparent border border-gray-200">
                  Buy Now
                </button>
              </div>
              <div className="flex items-center justify-between pt-2 text-md">
                <div className="flex items-center gap-2 bg-white shadow-sm rounded-sm py-6 pl-4 pr-16 ">
                  <div className="bg-primary-200 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faTruck} className="text-primary-700 text-lg" /></div>
                  <div>
                    <h3 className="font-meduim"> Free Delivery</h3>
                    <p className="text-gray-500 text-sm ">orders $50 or more</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white shadow-sm rounded-sm py-6 pl-4 pr-16 ">
                  <div className="bg-primary-200 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faArrowRotateBackward} className="text-primary-700 text-lg" /></div>
                  <div>
                    <h3 className="font-meduim"> 30 Dayes Return</h3>
                    <p className="text-gray-500 text-sm ">satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
