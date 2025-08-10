import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { CatogeriesContext } from "../../context/categories.context";
import { useContext } from "react";
import Loading from "../../components/Loading/Loading";
import SubCategory from "../../components/SubCategory/SubCategory";
import categoryImage from "../../assets/images/CategoriesImage.png"

import NewsLetter from "../../components/NewLetter/NewsLetter";

export default function Catogries() {
  const { categories, isLoading, isError, error } = useContext(CatogeriesContext)


  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="">
            <h2 className="text-2xl font-bold">Shop by Category</h2>

          </div>
          <div className="grid lg:grid-cols-3 py-8 gap-8">
            {categories.map((category) => (
              <Link to={`/category/${category._id}`} key={category._id} className=" rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-fit">


                <div className="relative w-96 h-36 "> <img src={category.image} alt="" className=" w-96 h-36 object-cover " />
                  <div className="bg-black/50 z-10 absolute inset-0 ">
                    <h3 className=" absolute left-4 bottom-4 z-20 text-white">{category.name}</h3>


                  </div>

                </div>
              </Link >))}
          </div>
        </div>
      </section>
      <SubCategory></SubCategory>


      <section className="my-10">
        <div className="container  grid lg:grid-cols-2 bg-white shadow-md rounded-md ">
          <div className="space-y-3  px-2 py-20 ">
            <span className="text-sm text-primary-500">Featured Categories</span>
            <h3 className="text-2xl font-bold">Organic fruits and vegetables</h3>
            <p className="text-gray-500 text-sm">Discover our wide range of certified organic produce, sourced from
              local farms and delivered fresh to your doorstep.</p>
            <ul className="*:flex *:items-center *:gap-1 space-y-2">
              <li> <FontAwesomeIcon icon={faCheck} className="text-primary-600"/> <span>100% Certified Organic</span></li>
              <li> <FontAwesomeIcon icon={faCheck} className="text-primary-600"/><span>Locally Sourced When Available</span></li>
              <li> <FontAwesomeIcon icon={faCheck} className="text-primary-600"/><san>No Pesticides or Harmful Chemicals</san></li>
            </ul>

            <button className="btn bg-primary-600 text-white mt-2">
              <Link to="/catogries">
              Explore Category
              </Link>
            </button>
          </div>
          <div>
            <img alt="" src={categoryImage} className="" />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="container">
          <div className="">
            <h2 className="text-2xl font-bold">seasonal Categories</h2>

          </div>
          <div className="grid lg:grid-cols-3 py-8 gap-8">
            {categories.slice(0, 3).map((category) => (
              <Link to={`/category/${category._id}`} key={category._id} className=" rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-fit">


                <div className="relative w-96 h-36 "> <img src={category.image} alt="" className=" w-96 h-36 object-cover " />
                  <div className="bg-black/50 z-10 absolute inset-0 ">
                    <h3 className=" absolute left-4 bottom-4 z-20 text-white">{category.name}</h3>


                  </div>

                </div>
              </Link >))}
          </div>
        </div>
      </section>
 <NewsLetter></NewsLetter>

    </>
  )
}
