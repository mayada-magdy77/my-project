import { useContext } from "react"
import Loading from "../Loading/Loading"
import { CatogeriesContext } from "../../context/categories.context"
import { Link } from "react-router";


export default function SubCategory() {


       const {subCategories,isLoading}=useContext(CatogeriesContext);
     console.log(subCategories);
      
      if(isLoading){
          return<Loading/>

      }
  return (
 <>
<section>
    <div className="container grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-10">
   {subCategories.map((subcategory)=>(  
            <Link to={`/subcategory/${subcategory._id}`} className=" rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer ">
               
                 <div className="p-4 flex flex-col items-center">
            <div><img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/store-circle-green-512.png" className="size-16 object-cover"/></div>
            <h3 className="text-center text-sm w-50 mt-2 font-medium"> {subcategory.name}</h3>
        </div>
               
            </Link >))}
        
    </div>



   
</section>
 
 </>
  )
}
