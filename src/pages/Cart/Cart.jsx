import React, { useContext } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faShoppingCart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/cart.context'
import Loading from '../../components/Loading/Loading'

export default function Cart() {

 


  const{cartInfo,isLoading}=useContext(CartContext);
  if(isLoading){
    return <Loading/>
  }

const{numOfCartItems,
  data,
}=cartInfo
const{
products,
totalCartPrice
}=data
  return (
    <>
    <section className='py-6'>
      <div className="container p-6  ">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 border border-gray-100 shadow rounded-md bg-white p-6">
          <div className="border-b border-gray-100  pb-6">
          <h2 className='text-xl font-bold'> Shopping Cart</h2>
         

         
        </div>
          {products.length>0 ?  products.map((product)=> <CartItem  prouctInfo={product} />)
          :<div className="space-y-4 text-center py-4"><p className="text-red-500">Your Cart are empty <FontAwesomeIcon icon={faShoppingCart}/></p>
          <p>You can continue shopping from  <Link to="/" className='text-primary-600 underline'>here</Link></p>
          </div>}
          
      </div>

      <div className="lg:col-span-1">
           
<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    
<h3 className="font-bold text-xl mb-6">Order Summary</h3>
<div className="space-y-4 mb-3 pb-3 border-b border-gray-100">
  <div className="flex justify-between">

<span className="text-gray-600">

Subtotal {numOfCartItems} items

</span>

<span className="font-medium"> {totalCartPrice} EGP

</span>

</div>
<div className="flex justify-between">

<span className="text-gray-600">Shipping</span>

<span className="font-medium text-gray-600">
 {products.length>0? <span className="font-medium">70 EGP</span>:"0 EGP"}




</span>

</div>
<div className="flex justify-between">

<span className="text-gray-600">Tax</span>


<span className="font-medium">


{Math.trunc(totalCartPrice *0.14)} EGP

</span>

</div>
</div>

<div className="flex justify-between text-lg font-bold">

<span>Total</span>


<span>

{Math.trunc(totalCartPrice +(products.length>0? 70:0) + (totalCartPrice *0.14)) }

</span>

</div>
 
 <div className="space-y-2 py-6">

<Link

to="/checkout"
className="w-full btn text-center bg-primary-600 text-white py-3 ">


Proceed to Checkout
</Link>

<Link
to="/"

className="w-full btn text-center border border-gray-300  bg-transparent py-3">

Continue Shopping
</Link>
</div>
<div>
  <div className=" p-4 bg-gray-50 rounded-lg">

<div className="flex items-center mb-2">

<FontAwesomeIcon icon={faTruckFast}

className="text-primary-600 mr-2"/>

<span className="text-sm font-medium">Free Delivery</span>

</div>

<p className="text-xs text-gray-600">

Your order qualifies for free delivery. Estimated delivery:

2-3 business days

</p>

</div>
<div className="mt-6 p-4 bg-gray-50 rounded-lg">

<div className="flex items-center mb-2">

<FontAwesomeIcon icon={faShieldHalved}

className="text-primary-600 mr-2"/>

<span className="text-sm font-medium">Secure Checkout</span>

</div>

<p className="text-xs text-gray-600">

Your payment information is protected with 256-bit SSL

encryption

</p>
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
