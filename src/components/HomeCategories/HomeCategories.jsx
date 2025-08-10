import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import { CatogeriesContext } from "../../context/categories.context";


export default function HomeCategories() {
const {categories,isLoading,isError,error}=useContext(CatogeriesContext)

if(isLoading){
    return<Loading/>
}


  return (
    <>
    <section className="mt-8">
        <div className="container">
           <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link to="/Catogries" className="text-primary-600 hover:text-primary-700 transition-colors duration-200 flex gap-2 items-center">
            <span> View all Categories</span>
            <FontAwesomeIcon icon={faArrowRight} />
            </Link>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-8"> 
          {categories.map((category)=>(  
            <Link to={`/category/${category._id}`} key={category._id} className="flex flex-col gap-2 items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 bg-white cursor-pointer">
                <img src={category.image} alt="" className="size-16 rounded-full object-cover"/>
                <h3>{category.name}</h3>
            </Link >))}
           </div>
        </div>
    </section>
    </>
  )
}
