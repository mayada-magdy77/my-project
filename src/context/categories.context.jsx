import { createContext, useEffect, useState } from "react";
import { getAllCatogeries, getAllSubCatogeries, getSpecificCatogeriey } from "../services/catogery-services";
import Category from "../pages/Category/Category";


export const CatogeriesContext=createContext(null);
export default function CatogeriesProvider({children}){
      const[subCategories,setSubCategories]=useState(null);
    const[categories,setCategories]=useState(null);
    const[category,setCategory]=useState(null);
    const[isLoading , setIsLoading]=useState(true);
      const[isError , setIsError]=useState(false);
      const[error , setError]=useState(false);


     async function fetchCategories(){
       try {
        setIsLoading(true)
         const response = await getAllCatogeries()
         
        if (response.success){
            setIsLoading(false)
            setCategories(response.data.data);
        }
       } catch (error) {
        setIsLoading(false)
         setIsError(true)
        setError(error)
       }
    }



    async function fetchSubCategories(){
       try {
                         setIsLoading(true)
       
                        const response= await getAllSubCatogeries();
                 
                          if(response.success){
                              setIsLoading(false)
                   setSubCategories(response.data.data);
                          }
       
                     } catch (error) {
                       setIsLoading(false)
                setIsError(true)
               setError(error)
                     }
    }



          
     async function fetchSpecificCatogeriey({id}){
       try {
        setIsLoading(true)
         const response = await getSpecificCatogeriey({id})
         console.log(response)
        // if (response.success){
        //     setIsLoading(false)
        //     setCategory(response.data.data);
        //     await fetchCategories();
        // }
       } catch (error) {
        setIsLoading(false)
         setIsError(true)
        setError(error)
       }
    }
   
    useEffect(()=>{
        fetchCategories()
        fetchSubCategories()
    },[]);
    
return<CatogeriesContext.Provider value={{isLoading,categories,isError,error,subCategories,fetchSpecificCatogeriey, Category}}>
{children}
</CatogeriesContext.Provider>
}