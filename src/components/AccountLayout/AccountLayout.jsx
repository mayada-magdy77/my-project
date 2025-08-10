import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBox, faCreditCard, faGaugeHigh, faHeart, faLocationDot, faRightFromBracket, faStar, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import {  NavLink, Outlet } from "react-router";
import{AuthContext} from "../../context/Auth.context"
export default function AccountLayout() {

    const{userInfo}=useContext(AuthContext)
   
  return (
    <>
    <section>
        <div className="container py-10 flex flex-col gap-4 md:flex-row">
            <aside className="bg-white rounded-lg shadow-md p-8 md:w-1/4">
                <div className="flex items-center gap-3">
                <div className="bg-primary-100 rounded-full size-12 flex justify-center items-center" >
                    <FontAwesomeIcon icon={faUser}/></div>
                <div> 
                    <h3 className="font-medium ">{userInfo.name || "user name"}</h3>
                    <p className="text-gray-500 text-sm">{userInfo.email || "user@gmail.com"}</p>
                </div>
                </div>
                <div className="pt-10" >
                    <ul className="space-y-2">
                        <li className=" ">
                           <NavLink to={`/account/Dashboard`} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-50': ''} flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md `
                }} >
                            <FontAwesomeIcon icon={faGaugeHigh} className="text-gray-500 pl-4" />
                            <span> Dashboard</span>
                           </NavLink>
                        </li>

                         <li className=" ">
                           <NavLink to={`/account/orders`} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-50' : ''} flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md `
                }} >
                            <FontAwesomeIcon icon={faBox} className="text-gray-500 pl-4" />
                            <span> orders</span>
                           </NavLink>
                        </li>

                              <li className=" ">
                           <NavLink to={`/account/Wishlist`} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-50' : ''} flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md `
                }} >
                            <FontAwesomeIcon icon={faHeart} className="text-gray-500 pl-4" />
                            <span> WishList</span>
                           </NavLink>
                        </li>

                        
                              <li className=" ">
                           <NavLink to={`/account/Favourites`} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-50' : ''} flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md `
                }} >
                            <FontAwesomeIcon icon={faStar} className="text-gray-500 pl-4" />
                            <span> Favourites</span>
                           </NavLink>
                        </li>
                                        <li className=" ">
                           <NavLink to={`/account/Addresses`} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-50' : ''} flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md `
                }} >
                            <FontAwesomeIcon icon={faLocationDot} className="text-gray-500 pl-4" />
                            <span> Addresses</span>
                           </NavLink>
                        </li>

                           <li className=" ">
                           <NavLink to={`/account/PaymentMethods`} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-50' : ''} flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md `
                }} >
                            <FontAwesomeIcon icon={faCreditCard} className="text-gray-500 pl-4" />
                            <span> Payment Methods</span>
                           </NavLink>
                        </li>
                          <li className=" ">
                           <NavLink to={`/account/AcountDetails`} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-50' : ''} flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md `
                }} >
                            <FontAwesomeIcon icon={faUserPen} className="text-gray-500 pl-4" />
                            <span> Acount Details</span>
                           </NavLink>
                        </li>
                         <li className=" ">
                            <div className="flex items-center gap-2 hover:text-primary-600 hover:bg-gray-100 transation-color duration-200 py-3 rounded-md ">
                      <FontAwesomeIcon icon={faRightFromBracket} className="text-gray-500 pl-4" />
                            <span> Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className=" w-full">
                <Outlet/>
            </div>
        </div>
    </section>
    
    </>
  )
}
