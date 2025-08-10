import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router";



export default function CartItem({prouctInfo}) {
  const {handleDeletinggProductFromCart,handleUpdataQuantity}=useContext(CartContext);


    const{
count,
price,
product,

}=prouctInfo;

const{id,imageCover,title,ratingsAverage,category}=product
const{name}=category

const[isUpdating,setIsUpdating]=useState(false)

async function handleUpdate({id,count}){
    setIsUpdating(true)
    await handleUpdataQuantity({id,count})
    setIsUpdating(false)
}
  return (
    <>
    <div className={`py-6 flex items-center gap-6 ${isUpdating && "opacity-70"}`}>
       <Link to= {`/product/${id}`}>
        <img

className="w-20 h-20 object-cover rounded-lg cursor-pointer"

src={imageCover}/>
       
       </Link>
         
        <div className="flex-1">

           <Link to= {`/product/${id}`}>
            <h3 className="font-medium text-lg cursor-pointer">

{title}

</h3>
           
           </Link>
           
<p className="text-sm text-gray-500">
  {name}
</p>

<div className="flex items-center mt-2">
    <div className="flex text-amber-400 text-sm">

<Rating rating={ratingsAverage} />

</div>
<span className="text-xs text-gray-500 ml-2">{ratingsAverage}</span>
</div>
        </div>
    <div className="flex items-center space-x-3">
        <div className="flex items-center border border-gray-300 rounded-lg">
            <button className="p-2 hover:bg-gray-100" onClick={()=>{
            handleUpdate({id, count:count - 1})
        }}>
                <FontAwesomeIcon icon ={faMinus} className="text-sm"/>
            </button>
        <span className="px-4 py-2 border-x border-gray-300">{count}</span>
        <button className="p-2 hover:bg-gray-100" onClick={()=>{
        handleUpdate({id, count:count+1})
        }}>



<FontAwesomeIcon icon={faPlus} className="text-sm"/>

</button>

        </div>



       
    </div>
     <div className="w-28 text-center text-nowrap flex items-center gap-4">

<div className="text-lg font-bold">{price*count} EGP</div>
<button className="text-red-500 hover:text-red-700 p-2" 
onClick={()=>{handleDeletinggProductFromCart( {id})}} >


<FontAwesomeIcon icon={faTrash} />

</button>

</div>
    </div>



    </>
  )
}
