import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEnvelope, faHome, faMessage, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import notFoundImage from "../../assets/images/notfound.svg"

export default function NotFound() {
  return (
    <>
    
    <main>
      <div className="container max-w-xl m-auto p-10 text-center bg-cover ">
            <div className=" px-20">
              <img  src={notFoundImage} alt="" className="size-80 bg-cover"/>
            </div>
            <div className="space-y-2 mb-6">
              <h2 className="text-3xl font-bold">
                Oops! Page Not Fount
              </h2>
                <p >
                  The page you are looking for seems to have gone Shopping!
                </p >
                <p className="text-sm text-gray-500"> Don't worry our fresh products are still avaible for you</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn w-full  bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200">
               <Link to="/" className="flex items-center gap-2 justify-center ">
                <FontAwesomeIcon icon={faHome} />
                <span>Back to Home</span>
               </Link>
              </button>
                <button  className="btn w-full bg-transparent text-primary-600 border border-primary-600 hover:border-primary-700 transition-colors duration-200">
                <Link className="flex items-center gap-2 justify-center "><FontAwesomeIcon icon={faSearch} />
                <span>Search Products</span></Link>
              </button>
            </div>
            <div className="py-10 mt-4 space-y-4">
              <h3 className="text-xl font-semibold">Need Help?</h3>
              <p className="text-gray-600"> Our customer support team is here to assist you 24/7 </p>
              <ul className="flex gap-2 items-center *:flex *:gap-2 *:items-center *:text-gray-600">
                          <li>
                              <FontAwesomeIcon icon={faPhone} className="text-primary-600" />
                           <a href="tel:+1 (800) 123-4567 ">+1 (800) 123-4567 </a>
                          </li>
                           <li>
                              <FontAwesomeIcon icon={faEnvelope} className="text-primary-600" />
                           <a href="mailto:support@freshcart.com">support@freshcart.com</a>
                          </li>
              
                        
                        <li>
                              <FontAwesomeIcon icon={faComment} className="text-primary-600" />
                           <a href="#">Live Chat</a>
                          </li>
              
                      </ul>
            </div>
      </div>
    </main>
    </>
  )
}
