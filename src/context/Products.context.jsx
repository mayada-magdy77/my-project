import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products-services";

export const productsContext=createContext(null)
export default function Productsprovider({children}){

     const[products,setProducts]=useState(null);
    
        const[isLoading , setIsLoading]=useState(true);
        const[isError , setIsError]=useState(false);
     const[error , setError]=useState(false);
        async function FetchProducts() {
        try {
           setIsLoading(true)
            const response= await getAllProducts()
            if (response.success){
                setIsLoading(false)
                setProducts(response.data.data);
            }
           } catch (error) {
            setIsLoading(false)
            setIsError(true)
            setError(error)
        }
        }


        
        
        useEffect(()=>{
            FetchProducts();
        },[]);
    

    return <productsContext.Provider value={{isLoading,products,isError,error}}>
         {children}
    </productsContext.Provider> 
}