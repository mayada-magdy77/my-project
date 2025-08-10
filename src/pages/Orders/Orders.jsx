import { faAngleLeft, faAngleRight, faArrowRotateRight, faBox, faBoxArchive, faCheck, faClock, faEye, faSearch, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { getUserOrders } from "../../services/orders-services";
import { AuthContext } from "../../context/Auth.context";
import Loading from "../../components/Loading/Loading";



export default function Orders() {
  const[orders,setOrders]=useState(null);
  const[isLoading,setIsLoading]=useState(true)
const{userInfo}=useContext(AuthContext);
async function fetchOrders(){
         
  try {
    setIsLoading(true);
    const response= await getUserOrders({userId:userInfo.id})
    console.log(response.data)
    if(response.success){
          setIsLoading(false);
       setOrders(response.data);
     
   
    }
    
  } catch (error) {
       setIsLoading(false);
  }
}





useEffect(()=>{
  fetchOrders()
},[])

if(isLoading){
  return<Loading/>
}

  return (
    <>
    <section  className=" w-full px-4 py-10">
      <div className="container  w-full py-8 bg-white rounded-lg shadow-md"> 

        <div className="flex items-center justify-between w-full ">
          <h1 className="text-2xl font-bold">My Orders</h1>
          <div className="relative">
          <input className="form-control " type='text' id="search" placeholder="Search Orders" />
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 "/>
          </div>
        </div>
       {orders.length===0 &&  <div className="no-order flex flex-col items-center justify-center gap-4">
        <FontAwesomeIcon icon={faBox} className="text-5xl text-gray-300" />
       <div className="text-center space-y-1">
         <p className=" text-gray-600">No orders found</p>
        <p className="text-md text-gray-400"> You haven't placed any orders yet </p>
       </div>
        <button className="btn bg-primary-600 text-white"><Link to="/">Start Shopping</Link></button>
       </div>}
      
      {orders.map((order)=>
        <div key={order.id} className="orders pb-4  bg-white rounded-lg shadow-md  border-1 border-gray-200 my-10">
        <header className="bg-gray-100  flex items-center justify-between p-4   border-1 border-gray-200">
              <div className="space-y-1"> 
                <div className="bg-gray-100  flex items-center gap-5"> 
                  <span>Order #{order.id}</span>
                  {order.ispaid?  <span className="text-sm text-primary-500 flex items-center gap-1"><FontAwesomeIcon icon={faCheck}/>
                    <span> Paid</span>
                    </span>: <span className="text-sm text-red-500 flex items-center gap-1"><FontAwesomeIcon icon={faClock}/>
                    <span> Unpaid</span>
                    </span>}
                   
                    

                </div>
                <p className="text-gray-500 text-md">Placed on</p>
              </div>
              <div className=" flex items-center gap-5">
                <div className="text-sm text-primary-500 flex items-center gap-1"><FontAwesomeIcon icon={faArrowRotateRight} />
                <span>Reorder</span>
                </div>
                <div className="text-sm text-gray-800 flex items-center gap-1"><FontAwesomeIcon icon={faEye} />
                <span>Veiw Details</span>
                </div>
                
              </div>
        </header>
         
        <div className=" flex  items-center justify-between p-4 ">
         
                     <div className=" flex  items-center gap-5">

                      
                      <div className="flex">
                        {order.cartItems.slice(0,3).map((item)=>
                         <div className="relative">
                        <img src={item.product.imageCover} alt="" className="size-24 object-cover"/>
                        <span className="absolute bg-gray-900 text-white size-5 rounded-sm flex items-center justify-center text-sm top-0 right-0">{item.count}</span>
                      </div>
                        
                        )}
                       
                      </div>
                      <div  className=" flex flex-col items-center gap-1 text-md border-s-2 border-gray-200 ps-4 justify-center">
                        <span className="text-gray-500">items</span>
                        <span className="min-w-15">{order.cartItems.length} items</span>
                      </div>
                     </div>
                      <div  className=" flex flex-col items-center gap-1 text-md">
                        <span className="text-gray-500 min-w-30">Total Amount</span>
                        <span>{order.totalOrderPrice}EGP</span>
                      </div>


                       <div className=" flex  items-center gap-5">
              <div className="flex flex-col items-center gap-1 border-e-2 border-gray-200 pr-2">
                <span className="text-gray-500 min-w-30">Delivered to</span>
                <span>{order.shippingAddress.city}</span>
                <span  className="text-sm text-primary-500" >on {new Date(order.createdAt).toDateString()}</span>
              </div>
              <div className="space-y-2 min-w-50">

                {order.isPaid ? <>
                <button className="btn bg-blue-500 text-white flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faTruck}/>
                  <span> Track Order</span>
                </button>
                <button className="btn text-sm bg-transparent border-1 border-gray-200">
                  
                  <span> Cancel Order</span>
                </button>
                
                </> :<>
                
                  <button className="btn bg-amber-700 text-white flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faBoxArchive}/>
                  <span> Complate Payment</span>
                </button>
                <button className="btn text-sm bg-primary-700 text-white">
                  
                  <span> Reorder Items</span>
                </button>
                </>}
                
              
              </div>
             </div>
               
            
        </div>
      </div>
      
      )}
             

      <div className="flex items-center justify-between">
        <p>Showing 10 Orders</p>
        <div  className=" flex items-center gap-1"> <button  className="btn size-9 flex items-center justify-center"> <FontAwesomeIcon icon={faAngleLeft} /></button>
        <div className="btn size-9 flex items-center justify-center bg-primary-600 text-white"> 1</div>
        <button  className="btn size-9 flex items-center justify-center"> <FontAwesomeIcon icon={faAngleRight} /></button>
      
        </div>
        </div> 
      </div>
      
    </section>
    
    </>
  )
}
