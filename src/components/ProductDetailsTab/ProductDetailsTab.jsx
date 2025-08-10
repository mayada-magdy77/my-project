import React, { useState } from 'react'
import ProductInfoTab from '../ProductInfoTab/ProductInfoTab'
import ReviewTab from '../ReviewTab/ReviewTab'
import ShippingTab from '../ShippingTab/ShippingTab'

export default function ProductDetailsTab({ProductDetails}) {

const [activeTab,setActiveTabe]=useState('details')

function getActiveTab(){
    switch(activeTab){
         case "details" :
            return<ProductInfoTab ProductDetails={ProductDetails}/>
        case "review" :
            return<ReviewTab/>
        case "shipping":
            return <ShippingTab/>
        default:
            return<ProductInfoTab/>
        
    }

}


    return (
        <>
            <section className="py-8 my-8   ">
                <div className="container px-4 rounded-lg bg-white shadow-md ">
                    <div className="bg-white rounded-lg overflow-hidden">
                        <div className="border-b border-gray-200">
                            <div className="flex">
                                <button className={`px-6 py-4 font-medium text-gray-600  ${activeTab==="details" && "text-primary-600  border-primary-600 border-b-2"}`}
                                onClick={()=>setActiveTabe("details")}
                                > Product Details</button>
                            
                           
                                <button className={`px-6 py-4 font-medium text-gray-600  ${activeTab==="review" && "text-primary-600  border-primary-600 border-b-2"}`}
                                  onClick={()=>setActiveTabe("review")}
                                > Reviews</button>
                           
                           
                                <button className={`px-6 py-4 font-medium text-gray-600  ${activeTab==="shipping" && "text-primary-600  border-primary-600 border-b-2"}`}
                                  onClick={()=>setActiveTabe("shipping")}
                                > Shipping &amp; Return</button>
                           
                         </div>
                        </div>
                        <div className='p-6'>
                            {getActiveTab()}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
