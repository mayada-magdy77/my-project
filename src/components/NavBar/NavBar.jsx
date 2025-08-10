import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBabyCarriage, faBars, faBolt, faCartShopping, faChevronDown, faEllipsis, faMagnifyingGlass, faPerson, faPersonDress, faPhone, faRightFromBracket, faSpinner, faSuitcaseMedical, faUserPlus, faWifi, faXmark } from "@fortawesome/free-solid-svg-icons";
import {faAddressCard, faEnvelope, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router";
import freshCartLogo from "../../assets/images/freshcart-logo.svg"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import { CartContext } from "../../context/cart.context";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

export default function NavBar() {

const isOnline=useOnlineStatus();
   

    const {logOut,token}=useContext(AuthContext);
    const{cartInfo,isLoading}=useContext(CartContext)
  
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }
  return <>
  <header>
    <div className="container ">
       <div className="lg:flex items-center justify-between border-b border-gray-300 py-2 text-sm hidden ">
        <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center">
            <li>
                <FontAwesomeIcon icon={faPhone} />
             <a href="tel:+1 (800) 123-4567 ">+1 (800) 123-4567 </a>
            </li>
             <li>
                <FontAwesomeIcon icon={faEnvelope} />
             <a href="mailto:support@freshcart.com">support@freshcart.com</a>
            </li>

           {isOnline &&(  <li className="text-primary-600">
                <FontAwesomeIcon icon={faWifi}/>
                <span >online</span>
            </li>)}
          

        </ul>
        <ul className="flex gap-5 items-center" >
            <li>
                <Link to={'track-order'}>Track Order</Link>
            </li>
             <li>
                <Link to={'about'}>About</Link>
            </li>
             <li>
                <Link to={'contact'}>Contact</Link>
            </li>
            <li>
                <select>
                    <option>EGP</option>
                    <option>SAR</option>
                    <option>AED</option>
                </select>
            </li>
            <li>
                 <select>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                   
                </select>
            </li>
        </ul>
       </div>
      <nav  className="flex items-center justify-between py-5">
        <h1><Link to={'/'}><img src={freshCartLogo} alt="fresh cart logo"/></Link></h1>
        <search className="relative hidden lg:block ">
            <input type="text" className="form-control min-w-96" placeholder="Search for products"/><FontAwesomeIcon icon={faMagnifyingGlass} className="absolute end-2 text-lg top-1/2 -translate-1/2" />
        </search>
        <ul className="lg:flex gap-8 items-center *:flex *:gap-2 *:items-center hidden">
            <li>
                <NavLink to={'WishList'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600' : ''} flex flex-col gap-2 hover:text-primary-600 transation-color duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faHeart} />
                  <span className="text-sm">Wish List</span>
                </NavLink>
            </li>
             <li>
                <NavLink to={'Cart'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600' : ''} flex flex-col gap-2 hover:text-primary-600 transation-color duration-200`
                }} >
                 <div className="relative">
                     <FontAwesomeIcon className="text-lg" icon={faCartShopping} />

                     {token ? <> <span className="absolute size-5 flex justify-center items-center rounded-full bg-primary-600 text-sm text-white right-0 top-0 -translate-y-1/2">
                     {isLoading? <FontAwesomeIcon icon={faSpinner} spin/>:cartInfo.numOfCartItems}
                     
                     </span></> :""}
                    
                 </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
            </li>
             <li>
                <NavLink to={'Account'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600' : ''} flex flex-col gap-2 hover:text-primary-600 transation-color duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faUser} />
                  <span className="text-sm">Account</span>
                </NavLink>
            </li>

            {!token ? <>  
             <li>
                <NavLink to={'SignUp'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600' : ''} flex flex-col gap-2 hover:text-primary-600 transation-color duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faUserPlus} />
                  <span className="text-sm">Sign Up</span>
                </NavLink>
            </li>
             <li>
                <NavLink to={'Login'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600' : ''} flex flex-col gap-2 hover:text-primary-600 transation-color duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faAddressCard} />
                  <span className="text-sm">Login</span>
                </NavLink>
            </li>
            
            </>  :<>
            
                <li className="flex flex-col gap-2 hover:text-primary-600 transation-color duration-200 cursor-pointer"
                 onClick={logOut}
                >
                  <FontAwesomeIcon className="text-lg" icon={faRightFromBracket} />
                  <span className="text-sm">Logout</span>
                
            </li>
            
            </>}
            
        </ul>
        <button className="btn bg-primary-600 text-white lg:hidden " onClick={toggleMenu}>
            {isMenuOpen?(<FontAwesomeIcon icon={faXmark} />):(<FontAwesomeIcon icon={faBars} />)}
        </button>
    </nav>
    </div>
   
    <nav className="bg-gray-200  hidden lg:block">
        <div className="container flex py-4 gap-8 items-center">
           <div className="relative group">
             <button className="btn bg-primary-600 flex items-center gap-3 text-white hover:bg-primary-700">
                <FontAwesomeIcon icon={faBars} />
                <span>All Catogries</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <menu className=" min-w-60 *:px-4 *:py-3 *:hover:bg-gray-100 rounded-lg bg-white shadow  divide-y-1 divide-gray-200/50 absolute top-10 hidden group-hover:block">
                <li>
                   <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon  className="text-primary-600 text-xl " fixedWidth icon={faPerson} />
                    <span>Man's Fashon</span>
                   </Link>
                </li>
                  <li>
                  <Link className="flex gap-2 items-center"> 
                   <FontAwesomeIcon  className="text-primary-600 text-xl " fixedWidth icon={faPersonDress} />
                    <span>Waman's Fashon</span>
                  </Link>
                </li>
                  <li>
                  <Link className="flex gap-2 items-center"> <FontAwesomeIcon  className="text-primary-600 text-xl " fixedWidth icon={faBabyCarriage} />
                    <span>Baby & Toy </span></Link>
                </li>
                  <li>
                 <Link className="flex gap-2 items-center">  <FontAwesomeIcon  className="text-primary-600 text-xl " fixedWidth icon={faSuitcaseMedical} />
                    <span>Beauty & Health</span></Link>
                </li>
                  <li>
                  <Link className="flex gap-2 items-center"> <FontAwesomeIcon  className="text-primary-600 text-xl " fixedWidth icon={faBolt} />
                    <span>Electronics</span></Link>
                </li>
                  <li>
                 <Link className="flex gap-2 items-center">  <FontAwesomeIcon  className="text-primary-600 text-xl " fixedWidth icon={faEllipsis} />
                    <span>View All Catogeries</span></Link>
                </li>

               
            </menu>
           </div>
            <ul className="flex gap-5 text-sm">
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                 <li>
                    <NavLink to={'/recentlyAdded'}>Recently Added</NavLink>
                </li>
                 <li>
                    <NavLink to={'/featuredProducts'}>Featured Products</NavLink>
                </li>
                 <li>
                    <NavLink to={'/offers'}>Offers</NavLink>
                </li>
                 <li>
                    <NavLink to={'/brands'}>Brands</NavLink>
                </li>
            </ul>
        </div>
    </nav>

    {isMenuOpen&&(
        <>
        <div className="background cursor-pointer fixed inset-0 bg-black/50 z-30 " onClick={toggleMenu}></div>
    <div className="fixed z-40 bg-white top-0 bottom-0 py-5 ps-2 space-y-5 animate-slide-in ">
        <div className="flex items-center justify-between border-b-2 border-gray-200/50 pb-4 ">
           <Link to={'/'}><img src={freshCartLogo} alt="fresh cart logo"/></Link> 
           <button className="btn rounded-full" onClick={toggleMenu}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        <search className="relative ps-1 pe-3 ">
            <input type="text" className="form-control min-w-60" placeholder="Search for products"/><FontAwesomeIcon icon={faMagnifyingGlass} className="absolute end-4 text-lg top-1/2 -translate-1/2" />
        </search>
        <div>
            <h2 className="text-lg font-bold">Main Menu</h2>
               <ul className=" *:hover:bg-gray-100 space-y-2 transation-colors duration-200 mt-3">
            <li>
                <NavLink to={'WishList'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-100  ' : ''}py-3 px-2  flex  gap-2  transation-colors duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faHeart} />
                  <span className="text-sm">Wish List</span>
                </NavLink>
            </li>
             <li>
                <NavLink to={'Cart'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-100 ' : ''} py-3 px-2  flex  gap-2  transation-colors duration-200`
                }} >
                 <div className="relative">
                     <FontAwesomeIcon className="text-lg" icon={faCartShopping} />
                     {token?<>
                      <span className="absolute size-4 flex justify-center items-center rounded-full bg-primary-600 text-sm text-white right-0 top-0 -translate-y-1/2">
                     {isLoading? <FontAwesomeIcon icon={faSpinner} spin/>:cartInfo.numOfCartItems}
                     </span>
                     </>:""}
                    
                 </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
            </li>
                    <li>
                <NavLink to={'Account'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-100 ' : ''} py-3 px-2 flex  gap-2  transation-colors duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faUser} />
                  <span className="text-sm">Account</span>
                </NavLink>
            </li>
        </ul>

        </div>
        <div className="border-t-2 border-gray-200/50 pt-5">
            <h2 className="text-lg font-bold">Account</h2>
            <ul className=" *:hover:bg-gray-100 space-y-2 transation-colors duration-200 mt-3">

                {!token? <>
                   <li>
                <NavLink to={'SignUp'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-100 ' : ''} py-3 px-2 flex  gap-2  transation-colors duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faUserPlus} />
                  <span className="text-sm">Sign Up</span>
                </NavLink>
            </li>
             <li>
                <NavLink to={'Login'} className={({isActive})=> {
                    return`${isActive ? 'text-primary-600 bg-primary-100 ' : ''} py-3 px-2 flex  gap-2  transation-colors duration-200`
                }}>
                  <FontAwesomeIcon className="text-lg" icon={faAddressCard} />
                  <span className="text-sm">Login</span>
                </NavLink>
            </li>
                </>:<>
                   <li >
                    <button className="flex  gap-2  transation-colors duration-200 cursor-pointer px-2 py-3"
                onClick={logOut}>
                    <FontAwesomeIcon className="text-lg" icon={faRightFromBracket} />
                  <span className="text-sm">Logout</span>
                </button>  
            </li>  
                
                </>}
                 
             
            </ul>
        </div>
     
    </div>
        </>
    )}
  </header>
  </>
}
