import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import loginImage from "../../assets/images/login-img.png"
import { faClock, faEnvelope, faEye, faEyeSlash, faLock, faShieldHalved, faStar, faTruck, faUsers } from "@fortawesome/free-solid-svg-icons"
import { fa42Group, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { Link, useLocation, useNavigate } from "react-router"
import { useFormik } from "formik"
import * as yup from 'yup'
import axios from 'axios'
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { API_CONFIG } from "../../config"
import { sendDataToSignIn } from "../../services/auth-services"
import { AuthContext } from "../../context/Auth.context"
export default function Login() {
  
  const location=useLocation();
//  const from=(location.state.from) || ("/" )


  const{setToken}=useContext(AuthContext);
  const navigate = useNavigate()
  const [isShownPassword, setIsShownPassword] = useState(false)
  function togglePasswordInvisibilty() {
    setIsShownPassword(!isShownPassword)
  }
  const [isExistError, setIsExistError] = useState(null)
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const validationSchema = yup.object({

    email: yup.string().required("*Email is required").email("*Email is invalid "),
    password: yup.string().required(" *Password is required").matches(passwordRegex, "*Password must be at least eight  characters, one upper case English letter, one lower case English letter, one number and one special character"),

  })
  async function handleLogin(values) {
   
    try {
           const response= await sendDataToSignIn(values);
            console.log(response)
      if (response.success) {
        toast.success("welcome back")
        localStorage.setItem("token",response.data.token)
        setToken(response.data.token);
        setTimeout(
          () => { navigate("/") }, 3000
        )
      }
    } catch (error) {
      setIsExistError(error.message)
    }


  }
  const formik = useFormik(
    {
      initialValues: {

        email: "",
        password: "",
       KeepSignedIn: false,
      },
      validationSchema,
      onSubmit: handleLogin
    }
  )

  function handleChange(e) {
    setIsExistError(null)
    formik.handleChange(e);
  }











  return (
    <>
      <main>
        <div className="w-2/3 m-auto grid lg:grid-cols-2 lg:gap-10 py-12 mb-10">
          {/* left side */}
          <div className=" space-y-4  py-4 mt-16 mb-4 ">
            <div className="bg-white shadow-md rounded-xl overflow-hidden "><img src={loginImage} alt=" cart" className="" /></div>
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-xl">FreshCart-Your One-Stop Shop for Fresh Products</h3>
              <p className="text-gray-600 text-sm ">join thousands of happy customers who trust FreshCart for their daiy grocery needs</p>
              <ul className="*:flex *:items-center *:gap-1 flex items-center gap-4 justify-center text-gray-500 px-2 pt-2">
                <li >
                  <FontAwesomeIcon icon={faTruck} className="text-primary-600 text-sm" />
                  <h5 className="text-xs"> Fast Delivery</h5>
                </li>
                <li >
                  <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600 text-sm" />

                  <h5 className="text-xs"> Secure Shopping</h5>
                </li>
                <li >
                  <FontAwesomeIcon icon={faClock} className="text-primary-600 text-sm" />

                  <h5 className="text-xs"> 24/7 support</h5>
                </li>

              </ul>
            </div>
          </div>
          {/* right side */}
          <div className="space-y-6 py-10  px-6 bg-white shadow-lg  rounded-xl overflow-hidden text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold"><span className="text-primary-600">Fresh</span>Cart</h2>
              <h6 className="text-lg font-semibold">Welecom Back</h6>
              <p className="text-gray-500 text-sm">Sign in to continue your fresh shopping experience</p>
            </div >
            <div className="space-y-2 *:flex *:items-center *:justify-center *:w-full *:gap-2 *:bg-transparent *:border *:border-gray-400/40 *:hover:bg-gray-100">
              <button className='btn'><FontAwesomeIcon icon={faGoogle} className="text-red-500" /> <span>Continue with Google</span></button>
              <button className='btn '> <FontAwesomeIcon icon={faFacebook} className="text-blue-700 " /><span>Continue with Facebook</span></button>
            </div>
            <div className="w-full bg-gray-300/30 h-0.5 relative">
              <span className='absolute left-1/2 top-1/2 -translate-1/2 bg-white px-3 text-xs text-gray-400'> OR CONTINUE WITH EMAIL</span>
            </div>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-start">Email Address</label>
                <div className="relative">
                  <input
                    className="form-control pl-8 w-full" type='email' id="email" placeholder="Enter Your Email "
                    name="email" value={formik.values.email} onChange={handleChange} onBlur={formik.handleBlur} />

                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 " />
                </div>
                {formik.touched.email && formik.errors.email && <p className='text-red-500 text-start text-sm mt-1'>{formik.errors.email}</p>}

              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="password">Password</label>
                  <Link to="/forgetPassword" className="text-primary-600">Forget Password?</Link>
                </div>

                <div className="relative">
                  <input className="form-control pl-8 w-full" type={isShownPassword ? "text" : "password"} id="password" placeholder="Enter your Password"
                    name="password" value={formik.values.password} onChange={handleChange} onBlur={formik.handleBlur} />

                  <FontAwesomeIcon icon={faLock} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 " />
                  <button type="button" onClick={togglePasswordInvisibilty}>{isShownPassword ? (<FontAwesomeIcon icon={faEyeSlash} className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />) : (<FontAwesomeIcon icon={faEye} className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />)}</button>
                </div>
                {formik.touched.password && formik.errors.password && <p className='text-red-500 text-start text-sm mt-1 '>{formik.errors.password}</p>}
              </div>
              {isExistError && <p className='text-red-500 text-start text-sm '>{isExistError}</p>}
              <div >
                <div className='flex gap-2 items-center my-6 '>
                  <input type="checkbox" name=" KeepSignedIn" id=" KeepSignedIn" className="accent-primary-600 size-4"
                  value={formik.values. KeepSignedIn} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />

                  <label htmlFor=" KeepSignedIn" className="text-md text-gray-600"> Keep me signed in</label>
                </div>
              </div>
              <button type="submit" onClick={formik.handleSubmit} className='btn bg-primary-600 text-white flex items-center justify-center w-full hover:bg-primary-700 gap-2'>
                Sign In
              </button>
              <p className="text-md mb-6 mt-10">
                New to FreshCart? <Link to="/SignUp" className="text-primary-600" >Create an account</Link>
              </p>
              <div className="flex items-center justify-center gap-3 *:flex *:items-center *:gap-2 text-xs text-gray-400  ">
                <div>
                  <FontAwesomeIcon icon={faLock} />
                  <span>SSL Secured</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>50k + Users</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} />
                  <span>4.9 Rating</span>
                </div>
              </div>


            </form>
          </div>
        </div>
      </main>
    </>
  )
}
