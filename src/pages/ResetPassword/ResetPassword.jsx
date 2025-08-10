

import { faEnvelope, faEye, faEyeSlash, faKey, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import { resetPassword } from "../../services/auth-services";
import { useState } from "react";
export default function ResetPassword() {

    const emailRegex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    const[showConfirmPassword,setshowConfirmPassword]=useState(false)



    const[isShowConfirmPassword,setIsshowConfirmPassword]=useState(false)

    const [isShownPassword, setIsShownPassword] = useState(false)

  function togglePasswordInvisibilty() {
    setIsShownPassword(!isShownPassword)
  }

   function toggleConirmPasswordInvisibilty() {
    setIsshowConfirmPassword(!isShowConfirmPassword)
  }
   function handleChange(e) {
  
    formik.handleChange(e);
  }
    const navigate = useNavigate();

    const formik=useFormik({
      initialValues:{
        email:"",
        newPassword:"",
        confirmPassword:""
      },
      validationSchema: Yup.object({
        email:  Yup.string().required("*Email is required").email("*Email is invalid ").matches(emailRegex,"*Email is invalid" ),
        newPassword: Yup.string().matches(passwordRegex, " *Invalid password").required("*Password is Required"),
        confirmPassword: Yup.string().required(" *Confirm password is required").oneOf([Yup.ref("newPassword")], "*Confirm password must be the same as password"),
      }),
      onSubmit: (values) => {
        resetPassword(values)
        setTimeout(() => {
          navigate("/login")
        },3500)
      }
    })



  return <>
  <div className="bg-gray-100 py-10">
    <div className="container">
        <div className="bg-white w-2/5 mx-auto border border-gray-300/50 shadow-lg rounded-md p-6 space-y-5">
           <div className="text-2xl text-primary-600 size-15 bg-primary-50 rounded-full mx-auto flex items-center justify-center"> <FontAwesomeIcon icon={faKey} /></div>
            <h2 className="text-2xl font-bold text-center">Reset Password</h2>
            <p className="text-gray-600 text-center">Enter your email address and a new password to reset your account password.</p>

            <form className="space-y-4">
                <label htmlFor="email" id="email" className="mb-2 block">Email Address</label>
                <div className="relative">
                    <FontAwesomeIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" icon={faEnvelope} />
                    <input id="email" type="email" name="email" placeholder="Enter your email address" className="form-control py-3 px-8 w-full" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                {formik.touched.email && formik.errors.email && <p className='text-red-500 text-start text-sm mt-1'>{formik.errors.email}</p>}
                <label htmlFor="password" id="password" className="mb-2 block">New password</label>
                 <div className="relative">
                  <input className="form-control pl-8 w-full" type={isShownPassword ? "text" : "password"} id="password" placeholder="Enter your New Password"
                    name="password" value={formik.values.password} onChange={handleChange} onBlur={formik.handleBlur} />

                  <FontAwesomeIcon icon={faLock} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 " />
                  <button type="button"onClick={togglePasswordInvisibilty}>{isShownPassword ? (<FontAwesomeIcon icon={faEyeSlash} className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />) : (<FontAwesomeIcon icon={faEye} className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />)}</button>
                </div>
                
                {formik.touched.newPassword && formik.errors.newPassword && <p className="text-red-500 text-start text-sm mt-1">{formik.errors.newPassword}</p>}
                <div>
                    <span >Password Must CoclassName="text-gray-500" ntain:</span>
                <ul className="text-gray-500 list-disc pl-5">
                    <li>At least 8 Characters</li>
                    <li>One Uppercase letter</li>
                    <li>One number</li>
                </ul>
                </div>


                 <div className="relative">
                  <input className="form-control pl-8 w-full" type={isShowConfirmPassword ? "text" : "password"} id="password"placeholder="Confirm new password"
                    name="confirmPassword" value={formik.values.confirmPassword} onChange={handleChange} onBlur={formik.handleBlur} />

                  <FontAwesomeIcon icon={faLock} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 " />
                  <button type="button"onClick={toggleConirmPasswordInvisibilty}>{isShowConfirmPassword ? (<FontAwesomeIcon icon={faEyeSlash} className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />) : (<FontAwesomeIcon icon={faEye} className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />)}</button>
                </div>

                {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className='text-red-500 text-start text-sm mt-1'>{formik.errors.confirmPassword}</p>}

                <button type="submit" className="btn py-3 text-white text-lg bg-primary-600 w-full" onClick={formik.handleSubmit}>Reset Password</button>
            </form>
            <span className="text-gray-500 text-center block">Remeber your password?<Link to={"/login"} className="text-primary-600" state={{from:"/reset-password"}}>Sign in</Link></span>
        </div>
    </div>
    <div className="text-center mt-5"><span >Need help?</span > <Link to={"/contact"} className="text-primary-600">Contact Support</Link></div>
  </div>
  
  
  </>
}
