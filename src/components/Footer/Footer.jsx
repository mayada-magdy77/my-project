import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import freshCartLogo from "../../assets/images/freshcart-logo.svg"
import freshCartMiniLogo from "../../assets/images/mini-logo.png"
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router"

export default function Footer() {
  return <>
<footer className="py-5 bg-white border-t border-gray-400/20">
 <div className="container ">
     <div className="grid xl:grid-cols-5 py-3 md:grid-cols-2 gap-6">
      <div className="xl:col-span-2 space-y-3">
    <img src={freshCartLogo}alt=""/>
    <p>FreshCart is a versatile e-commerce platform offering a wide range of products,
         from clothing to electronics.
         It provides a user-friendly experience for seamless shopping across diverse categories.</p>
         <ul className=" text-l flex gap-4 items-center *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
             <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> </a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
               <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
         </ul>
</div>
<div >
    <h2 className="text-xl text-bold mb-4">Catogries</h2>
    <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
         <li><Link>Man's Fashon</Link></li>
        <li><Link>Waman's Fashon</Link></li>
         <li><Link>Baby & Toy</Link></li>
          <li><Link>Beauty & Health</Link></li>
          <li><Link>Electronics</Link></li>
    </ul>

    
</div>
<div >
    <h2 className="text-xl text-bold mb-4">Quik Links</h2>
    <ul className="space-y-3 *:hover:text-primary-600 transition-colors duration-200">
         <li><Link to={'/about'}>About Us</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
         <li><Link  to={'/privacy-policy'}>Privacy Policy</Link></li>
          <li><Link to={'/terms'}>TermsOf Service</Link></li>
          <li><Link  to={'shipping-policy'}>Shipping Policy</Link></li>
    </ul>
</div>
<div >
    <h2 className="text-xl text-bold mb-4">Customer Services</h2>
    <ul className="space-y-3 *:hover:text-primary-600 transition-colors duration-200">
         <li><Link to={'/account'}>My Account</Link></li>
        <li><Link to={'/orders'}>My Orders</Link></li>
         <li><Link  to={'/wishlist'}>WishList</Link></li>
          <li><Link to={'/returns-and-refunds'}>Returns & Refunds</Link></li>
          <li><Link  to={'help-center'}>Help Center</Link></li>
    </ul>
</div>
  </div>
<div className="py-4 flex items-center gap-3 border-t border-gray-400/30 ">
    <p>&copy;{new Date().getFullYear()} FreshCart. All rights reserved</p>
    <img src={freshCartMiniLogo} className="w-8" alt=""/>
</div>
 </div>
</footer>
</>
  
}
