import { createContext, useContext, useEffect, useState } from "react";
import { addProductToCart, deletCartItem, getCartItems, updateProductQuantity } from "../services/cart-services";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from "./Auth.context";
 const MySwal = withReactContent(Swal)
export const CartContext=createContext(null);
export default function CartProvider({children}){
    const [cartInfo,setCartInfo]=useState(null);
     const[isLoading , setIsLoading]=useState(true);
      const[isError , setIsError]=useState(false);
      const[error , setError]=useState(false);
    const{token}=useContext(AuthContext)
  const [products, setProducts] = useState([]);
async function handleAddingProductToCart({id}){
    try {
        setIsLoading(true)
        const response=await addProductToCart({id})
        if(response.success){
            toast.success(response.data.message);
             setProducts(response.data.data.products);
            setCartInfo(response.data);
            
            setIsLoading(false);
            await handleFetchCartItems()
        }
    } catch (error) {
        setIsLoading(false)
        setIsError(true)
        setError(error)
    }
}

async function handleFetchCartItems(){
    try {
        setIsLoading(true)
        const response=await getCartItems()
  
        if(response.success){
            toast.success(response.data.message);
                setProducts(response.data.data.products);
            setCartInfo(response.data);
        
            setIsLoading(false);
          
        }
    } catch (error) {
        setIsLoading(false)
        setIsError(true)
        setError(error)
    }
}

async function handleDeletinggProductFromCart({id}){
    try {

const result=await Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  iconColor:"#d33",
  showCancelButton: true,
  confirmButtonColor: "#d33",
  cancelButtonColor: "#333446",
  confirmButtonText: "Yes, delete it!"
})

if(result.isConfirmed){
    const toastId= toast.loading("we are deleting the cart item")
    const response= await deletCartItem({id})
    if(response.success){
        toast.dismiss(toastId)
          setProducts(response.data.data.products);
       setCartInfo(response.data);
      
 }

}
 
  
        
    } catch (error) {
       throw error
    }
}

async function handleUpdataQuantity({id, count}){
    try {
        const toastId=toast.loading("updating product quantity")
        const response=await updateProductQuantity({id,count})
        if (response.success){
   toast.dismiss(toastId)
            setCartInfo(response.data)
            
        }
    } catch (error) {
       
    }
}

useEffect(()=>{(
    handleFetchCartItems())
},[token])

return <CartContext.Provider value={{cartInfo,isLoading,isError,error,setCartInfo,
    handleAddingProductToCart,handleFetchCartItems ,
    handleDeletinggProductFromCart,handleUpdataQuantity ,
     refreshCart:handleFetchCartItems,products
}} >
{children}
</CartContext.Provider>
}

