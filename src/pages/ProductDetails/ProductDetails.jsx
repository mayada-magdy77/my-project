
import { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { getProductById } from "../../services/products-services";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import ProductDetailsTab from "../../components/ProductDetailsTab/ProductDetailsTab";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";


export default function FetchProductDetails () {
 const[ProductDetails,setProductDetails]=useState(null);
 const[isLoading , setIsLoading]=useState(true);
 const {id}=useParams();

 async function FetchProductDetails() {
try {
   setIsLoading(true)
    const response= await getProductById({id})
    if (response.success){
        setIsLoading(false)
        setProductDetails(response.data.data);
       
    }
   } catch (error) {
    setIsLoading(false)
}
}

useEffect(()=>{
    FetchProductDetails();
},[]);



if(isLoading){
    return <Loading/>
}


  return (
    <div className="py-8 bg-gray-100">
      <ProductInfo ProductDetails={ProductDetails}/>
      <ProductDetailsTab  ProductDetails={ProductDetails}/>
      <RelatedProducts ProductDetails={ProductDetails}/>
    </div>
  )
}
