import { createContext, useContext, useEffect, useState } from "react";
import { addProductToWishlist, deleteProductFromWishlist, getWishlistItems } from "../services/wishlist-services";
import { toast} from "react-toastify";
import { AuthContext } from "./Auth.context";

export const WishlistContext = createContext(null);

export default function WishlistProvider({children}){
    const {token} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(null);
    const [products, setProducts] = useState([]);
  
    
    async function handleAddProductToWishlist({id}){
        try {
            setIsLoading(true)
            const response = await addProductToWishlist({id})
            if(response.success){
                setIsLoading(false);
                setProducts(response.data.data);
                toast.success(response.data.message);
                await fetchWishlistItems();         
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setError(error.message);
            setIsError(error);
            
        }
        
    }

    async function fetchWishlistItems() {
        try {
            setIsLoading(true);
            const response = await getWishlistItems();
            if (response.success) {
                setIsLoading(false);
                setProducts(response.data.data);
                               
            }
        } catch (error) {
            setError(error.message);
            setIsError(error);
            setIsLoading(false);
        }
    } 

    async function deleteItemFromWishlist({id}){
        try {
            setIsLoading(true);
            const response = await deleteProductFromWishlist({id});
            const toastId=toast.loading("We are deleting your item!");
            if(response.success){
                setIsLoading(false);
                setProducts(response.data.data);
                await fetchWishlistItems(); 
                toast.dismiss(toastId);
            }
            
        } catch (error) {
            setError(error.message);
            setIsError(true);
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        if(token){
            fetchWishlistItems();
        }
    }, []);

    return <WishlistContext.Provider value={{handleAddProductToWishlist,isLoading,isError,products,fetchWishlistItems,deleteItemFromWishlist}}>
        {children}
    </WishlistContext.Provider>

}

