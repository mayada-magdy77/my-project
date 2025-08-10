import { faCcAmex, faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong, faChevronLeft, faCircleInfo, faLock, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, useFormik } from "formik";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import * as yup from "yup"
import { CartContext } from "../../context/cart.context";
import Loading from "../../components/Loading/Loading";
import { createOrder } from "../../services/paymentServices";
import { toast } from "react-toastify";

export default function CheckOut() {
  const phoneRegex=/^(\+2)?01[0125][0-9]{8}$/
const{cartInfo,isLoading,setCartInfo}=useContext(CartContext)
const navigate=useNavigate()
const validationSchema=yup.object({
  paymentMethod:yup.string().required("payment methode is required"),
  shippingAddress:yup.object(
    {
      details:yup.string().required("Address is required"),
      phone: yup.string().required("phone number is required").matches(phoneRegex,"phone number is invalid"),
      city: yup.string().required("city is required") 
    }
  )
})

 async function handleCreatingOrder(values){
   try {
    const response=await createOrder({cartId,shippingAddress:values.shippingAddress,paymentMethode:values.paymentMethod})
    console.log(response)
   if (response.success){
    if(response.data.session){
      toast.loading(" you be directed to strip to complete your payment procces")
    setTimeout(()=>{
      location.href=response.data.session.url;
    },3000)
    }
   toast.success("your order has been created succesfully")
  setCartInfo({
    numOfCartItems:0,
    data:{
        products:[],
      totalCartPrice:0
    },
    
  });
   setTimeout(()=>{
    navigate("/orders")
   },3000)
   }

   } catch (error) {
      console.log(error);
   }
  }

const formik=useFormik(
 {
  initialValues:{
    paymentMethod:"online",
     shippingAddress:{
        details: "",
        phone: "",
        city: ""
        }
  },
  validationSchema,
  onSubmit:handleCreatingOrder
 }
)

if(isLoading) return<Loading/>
  

const{
cartId,numOfCartItems,data}=cartInfo;
const{products,totalCartPrice}=data

 



  return (
    <>
      <section>
     <form onSubmit={formik.handleSubmit}>
         <div className=" container py-6 max-w-6xl">
        <h1 className="text-2xl font-semibold mb-6">Check out</h1>
        <div className="grid lg:grid-cols-12 gap-8">

          <div className="  lg:col-span-8 " >
            <div className="payment-methode bg-white shadow-sm p-6  rounded-lg mb-6 ">
              <h2 className="text-xl font-semibold mb-6">payment mathod</h2>
             <div className="space-y-3">
                <label htmlFor="cod" 
                className={`${formik.values.paymentMethod==="cod" && " bg-primary-50 border-primary-500 "} mt-3 flex  items-center border border-gray-200 p-4 rounded-lg gap-4 hover:border-primary-500 transition-colors duration-200`}>
                  <input
                   type="radio" 
                   name="payment-method"
                    value={`cod`} 
                    id="cod"
                    onChange={()=>{
                      formik.setFieldValue("paymentMethod","cod")
                    }}
                     className="size-4 "
                     checked={formik.values.paymentMethod==="cod"}
                     />

                  <div className="w-full">
               <div className="flex items-center justify-between w-full" >
                     <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-xl text-primary-600" />
                    <div>
                      <h3 className="font-semibold">Cash on Delivery</h3>
                      <p className="text-gray-600 text-sm">Pay when your order arrives</p>
                    </div>
                  </div>
                  <span className="text-primary-600">No extra charges</span>
               </div>
                   <div>
                      {formik.values.paymentMethod==="cod" &&(<div className="flex items-center gap-2 bg-primary-100 border border-primary-600/20 rounded-md text-primary-600 ml-10 mt-8 p-2">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p className="text-sm">Please keep exact change ready for hassle-free deliver</p>
                  </div>)}
                   </div>
                  
                  </div>
                  
                </label>


                <label htmlFor="online"    className={`${formik.values.paymentMethod==="online" && " bg-primary-50 border-primary-500 "} mt-3 flex  items-center border border-gray-200 p-4 rounded-lg gap-4 hover:border-primary-500 transition-colors duration-200`}>
                  <input 
                  type="radio" 
                  name="payment-method" 
                  value={`online`} 
                  id="online"
                   onChange={()=>{
                        formik.setFieldValue("paymentMethod","online")
                    }}
                   className="size-4 " 
                    checked={formik.values.paymentMethod==="online"}
                   />
                  
                  <div  className=" w-full" >
                   <div  className="flex items-center justify-between w-full" >
                     <div  className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCreditCard}  className="text-xl text-primary-600"/>
                    <div>
                      <h3 className="font-semibold">online payment</h3>
                     <p className="text-gray-600 text-sm">Pay securely with card or digital wallet</p>
                    </div>
                  </div>
                  <span className="text-primary-600"> Recommended</span>
                   </div>
                <div>
                    {formik.values.paymentMethod==="online" &&(  <div className="flex items-center gap-2 bg-blue-100 border border-blue-600/20 rounded-md text-blue-600 ml-10 mt-8 p-2">
                    <FontAwesomeIcon icon={faCircleInfo}/>
                     <p className="text-sm">you will be redirected to secure payment gatway to complete your transaction </p>
                  </div>)}
                </div>
                  
                  </div>
                
                </label>
              </div>
            </div>
          
             

              <div className="shipping-address bg-white shadow-sm p-6  rounded-lg ">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="flex flex-col gap-2">
                  <label className="text-sm" htmlFor="addressDetails"> Address Details *</label>
                  <textarea 
                  className="form-control min-h-20 max-h-40" 
                  id="addressDetails"
                   placeholder="Enter your full address details"
                   name="shippingAddress.details"
                   value={formik.values.shippingAddress.details}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   >
                   
                   </textarea>
                   {formik.errors.shippingAddress?.details && 
                   formik.touched.shippingAddress?.details && 
                   <p className="text-red-500 text-sm ">{formik.errors.shippingAddress?.details}</p>}
                </div>
              <div className="flex items-center gap-3 *:grow-1 mt-3" >
                  <div className="flex flex-col gap-2">
                 <label className="text-sm" htmlFor="phone">Phone Number *</label>
                 <input type="tel " 
                 placeholder="01095714862" 
                 className="form-control"
                  id="phone"
                  name="shippingAddress.phone"
                   value={formik.values.shippingAddress.phone}
                   onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                    {formik.errors.shippingAddress?.phone && 
                   formik.touched.shippingAddress?.phone && 
                   <p className="text-red-500 text-sm ">{formik.errors.shippingAddress?.phone}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm" htmlFor="city">City *</label>
                 <input type=" text" 
                 placeholder="sadat"
                  className="form-control"
                   id="city"
                   name="shippingAddress.city"
                   value={formik.values.shippingAddress.city}
                   onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                   />
                    {formik.errors.shippingAddress?.city && 
                   formik.touched.shippingAddress?.city && 
                   <p className="text-red-500 text-sm ">{formik.errors.shippingAddress?.city}</p>}
                </div>
              </div>
              </div>
           
          </div>

          <div className="order-summry lg:col-span-4  bg-white shadow-sm p-6 rounded-lg h-fit">
              <h2  className="text-xl font-semibold mb-6">Order Summry</h2>

             <div className="space-y-3 max-h-48 overflow-auto p-3">
               {products.map((product)=>(
                  <Link to={`/Product/${product.product.id}`} key={product._id} className="flex items-center gap-2  w-full  pb-3">
                <img 
                src={product.product.imageCover}
                 alt=""
                 className="size-12 object-cover rounded-lg"
                 />
                <div className="w-full">
                  <h3 className="text-sm">{product.product.title}</h3>
                  <div className="flex items-center justify-between w-full ">
                    <span className="text-gray-500 text-xs">Qty: {product.count}</span>
                  <span className="text-sm">{product.price} EGP</span>
                  </div>
                </div>
              </Link>
            
              ))}
             </div>
            


              <ul className="py-3 space-y-3 *:flex *:items-center *:justify-between border-t border-gray-200">
                <li>
                  <span> Subtotal</span>
                  <span>{totalCartPrice} EGP</span>
                </li>
                 <li>
                  <span> Delivery</span>
                  <span>70 EGP</span>
                </li>
                 <li>
                  <span> Tax</span>
                  <span>{Math.trunc(totalCartPrice*0.14)} EGP</span>
                </li>
                 <li className="font-semibold border-t border-gray-200 pt-3">
                  <span> Total</span>
                  <span>{Math.trunc(totalCartPrice+70+(totalCartPrice*0.14))} EGP</span>
                </li>
              </ul>
              <div className="space-y-2 pt-2 pb-4">
                <button type="submit" className="btn bg-primary-600 text-white w-full  hover:bg-primary-700 flex items-center gap-2 justify-center">
                 
                  <span> Proceed to payment</span>
                  <FontAwesomeIcon icon={faArrowRightLong}/>
                
                </button>
                 <button className="btn bg-transparent border border-gray-500 w-full  hover:border-gray-600 ">
                <Link to="/Cart" className="flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faChevronLeft}/>
                  <span> Previous step</span>
                </Link>
                  
                </button>
              </div>
              <div>
                <h3 >Secure Checkout</h3>
                <p  className=" flex items-center gap-2 mt-2 text-sm ">
                  <FontAwesomeIcon icon={faLock} className="text-primary-600"/>
                  <span className=" text-gray-500">your payment informatio is secure</span>
                </p>
                <div className="flex items-center mt-4 space-x-2">

<FontAwesomeIcon icon={faCcVisa} className="text-2xl text-blue-700"/>

<FontAwesomeIcon

icon={faCcMastercard} className="text-2xl text-red-500"/>

<FontAwesomeIcon

icon={faCcAmex}

className="text-2xl text-blue-500"/>

<FontAwesomeIcon

icon={faCcPaypal} className="text-2xl text-blue-800"/>

<FontAwesomeIcon

icon={faCcApplePay} className="text-2xl text-gray-800"/>


</div>
              </div>
          </div>
        </div>

        </div>
     </form>
      </section>


















    </>
  )
}
