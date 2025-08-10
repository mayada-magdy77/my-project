import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import { BrandsContext } from "../../context/brand.context";
import Loading from "../../components/Loading/Loading";
import Brandsimage from "../../assets/images/Brandsimage.png"

export default function Brands() {

  const {brands,isLoading}=useContext(BrandsContext);


  if(isLoading){
      return<Loading/>
  }
  
  return (
    <>
      <main>
        <div className="container py-10">
          <div className="text-center space-y-3 max-w-3xl m-auto">
            <h1 className="text-2xl font-bold"> Our Brand Partener</h1>
            <p  className="text-gray-500">
              Discover quality products from our trusted brand partners.
              We've partnered with leading brands to bring you the best selection of fresh and organic products.
            </p>
          </div>
         <div className="featured-brands">
               <h2 className="text-2xl" > Featured Brands</h2>
             <div className=" grid lg:grid-cols-3 p-6 gap-4">
             <div className=" bg-white shadow-md rounded-md overflow-hidden">
               <div>
                <div className="relative"><img src="https://www.clementsmarket.com/wp-content/uploads/2017/05/Website-017-min.jpg" alt="" />
                 <div className="absolute left-4 bottom-4 text-white  ">
                  <h3 className="text-2xl font-semibold">Nature's Harvest</h3>
                  <span className="text-sm">Premium Organic Produce</span>
                </div>
                
                </div>
               
              </div>
             <div className="p-4">
               <p className="text-md">Bringing the frestest organic frutes and vegtables from farm to table</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500"> 124 products</span>
                <Link  className="flex items-center gap-2 text-primary-600 underline"><span>view Products </span><FontAwesomeIcon icon={faArrowRight}/></Link>
              </div>
             </div>
             </div>
              <div className=" bg-white shadow-md rounded-md overflow-hidden">
               <div>
                <div className="relative"><img src="https://www.clementsmarket.com/wp-content/uploads/2017/05/Website-017-min.jpg" alt="" />
                 <div className="absolute left-4 bottom-4 text-white  ">
                  <h3 className="text-2xl font-semibold">Nature's Harvest</h3>
                  <span className="text-sm">Premium Organic Produce</span>
                </div>
                
                </div>
               
              </div>
             <div className="p-4">
               <p className="text-md">Bringing the frestest organic frutes and vegtables from farm to table</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500"> 124 products</span>
                <Link  className="flex items-center gap-2 text-primary-600 underline"><span>view Products </span><FontAwesomeIcon icon={faArrowRight}/></Link>
              </div>
             </div>
             </div>
              <div className=" bg-white shadow-md rounded-md overflow-hidden">
               <div>
                <div className="relative"><img src="https://www.clementsmarket.com/wp-content/uploads/2017/05/Website-017-min.jpg" alt="" />
                 <div className="absolute left-4 bottom-4 text-white  ">
                  <h3 className="text-2xl font-semibold">Nature's Harvest</h3>
                  <span className="text-sm">Premium Organic Produce</span>
                </div>
                
                </div>
               
              </div>
             <div className="p-4">
               <p className="text-md">Bringing the frestest organic frutes and vegtables from farm to table</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500"> 124 products</span>
                <Link  className="flex items-center gap-2 text-primary-600 underline"><span>view Products </span><FontAwesomeIcon icon={faArrowRight}/></Link>
              </div>
             </div>
             </div>
             </div>
         </div>
           
           <div className="brands">
              <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4">
                  {brands.slice(0,12).map((brand)=>(  <Link to={`/brand/${brand._id}`} key={brand._id}>

                    <div className="bg-white rounded-md shadow md">
                <div>
                            <img alt="" src={brand.image}/>
                           </div>
                           <div className="p-4">
                             <h3 className="text-xl font-medium">{brand.name}</h3>
                  <span className="text-sm text-gry-600"> {brand.slug}</span>
                              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500"> 124 products</span>
                <Link  className="flex items-center gap-2 text-primary-600 underline"><span>view Products </span><FontAwesomeIcon icon={faArrowRight}/></Link>
              </div>
                           </div>
               </div>
</Link>
                          
         ))}
              </div>
           </div>

                   <section className="my-10">
                     <div className="container  grid lg:grid-cols-2 bg-white shadow-md rounded-md max-w-4xl m-auto">
                       <div className="space-y-3  px-2 py-20 ">
                        
                         <h3 className="text-2xl font-bold"> Want to become a brand partner?</h3>
                         <p className="text-gray-500 text-sm"> Join our growing family of quality brands.
Showcase your products to our engaged customer
base and grow your business with FreshCart..</p>
                         <ul className="*:flex *:items-center *:gap-1 space-y-2">
                           <li> <FontAwesomeIcon icon={faCheck} className="text-primary-600"/> <span>Access to over 1 million active customers</span></li>
                           <li> <FontAwesomeIcon icon={faCheck} className="text-primary-600"/><span>Dedicated account manager for your brand</span></li>
                           <li> <FontAwesomeIcon icon={faCheck} className="text-primary-600"/><san>Marketing and promotional opportunities</san></li>
                           <li> <FontAwesomeIcon icon={faCheck} className="text-primary-600"/><san>Streamlined logistics and fulfillment</san></li>
                         </ul>
             
                         <button className="btn bg-primary-600 text-white mt-2">
                          
                          Apply to Become a Partner
                          
                         </button>
                       </div>
                       <div>
                         <img alt="" src={Brandsimage} className="" />
                       </div>
                     </div>
                   </section>
          
        </div>
      </main>

    </>
  )
}
