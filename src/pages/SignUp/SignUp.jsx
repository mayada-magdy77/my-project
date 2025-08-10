import { faShieldHalved, faStar, faTruck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import reviewAuthor from "../../assets/images/review-author.png"
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { sendDataToSignUp } from '../../services/auth-services'
import { checkPasswordStrength } from '../../utils/password-srength'



export default function SignUp() {
    const navigate = useNavigate()
    const [isExistError, setIsExistError] = useState(null)
    const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    const validationSchema = yup.object({
        name: yup.string().required("*Name is required"),
        email: yup.string().required("*Email is required").email("*Email is invalid "),
        password: yup.string().required(" *Password is required").matches(passwordRegex, "*Password must be at least eight  characters, one upper case English letter, one lower case English letter, one number and one special character"),
        repassword: yup.string().required(" *Confirm password is required").oneOf([yup.ref("password")], "*Confirm password must be the same as password"),
        phone: yup.string().required(" *Phone number is required").matches(phoneRegex, "*Phone number is invalid"),
        terms: yup.boolean().oneOf([true], "*You must agree with the terms")
    })
    async function handleSignUp(values) {
        try {
           const response= await sendDataToSignUp(values)
        
            if (response.success) {
                toast.success("Your account has been created")
                setTimeout(
                    () => { navigate("/login") }, 3000
                )
            }
        } catch (error) {
            setIsExistError(error.message)
        }


    }
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                password: "",
                repassword: "",
                phone: "",
                terms: false
            },
            validationSchema,
            onSubmit: handleSignUp
        }
    )

    const passwordFeedback=checkPasswordStrength(formik.values.password);
    return (
        <>
            <main className="py-10">
                <div className="container grid lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-10 left-side pt-10">
                        <div ><h2 className="text-4xl font-bold">Welcome to <span className="text-primary-600">FreshCart</span></h2>
                            <p className="text-lg mt-2">Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.</p></div>
                        <ul className="*:flex *:items-center *:gap-3 space-y-4 ">
                            <li >
                                <div className="bg-primary-300 flex items-center justify-center size-12 rounded-full "> <FontAwesomeIcon icon={faStar} className="text-primary-700 text-lg" /></div>
                                <div>
                                    <h3 className="font-semibold"> Premium Quality</h3>
                                    <p className="text-gray-600">Premium quality products sourced from trusted suppliers.</p>
                                </div>
                            </li>
                            <li >
                                <div className="bg-primary-300 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faTruck} className="text-primary-700 text-lg" /></div>
                                <div>
                                    <h3 className="font-semibold"> Fast Delivery</h3>
                                    <p className="text-gray-600">Same-day delivery available in most areas</p>
                                </div>
                            </li>
                            <li >
                                <div className="bg-primary-300 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faShieldHalved} className="text-primary-700 text-lg" /></div>
                                <div>
                                    <h3 className="font-semibold"> Secure Shopping</h3>
                                    <p className="text-gray-600">Your data and payments are completely secure</p>
                                </div>
                            </li>
                        </ul>
                        <div className="p-6 rounded-xl bg-white shadow-md">
                            <div className='flex items-center gap-4'>
                                <img src={reviewAuthor} alt="Sarah Johnsan profile photo" className='w-12 rounded-full' />
                                <div>
                                    <div><h3>Sarah Johnsan</h3></div>
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                    </div>
                                </div>
                            </div>
                            <blockquote className="text-gray-500 italic mt-4">
                                <p>FrestiCart nas transformed my shopping experience.
                                    The quality of the products le outstanding,
                                    and the delivery is always on time. Foghly recommend"</p>
                            </blockquote>
                        </div>
                    </div>
                    <div className='right-side p-10 space-y-8 bg-white shadow-xl rounded-xl'>
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold ">Create Your Account</h2>
                            <p className="mt-1">start your fresh journy with us today</p>
                        </div>
                        <div className="flex items-center gap-2 *flex *:items-center *:w-full *:gap2 *:bg-transparent *:border *:border-gray-400/40 *:hover:bg-gray-100">
                            <button className='btn'><FontAwesomeIcon icon={faGoogle} className="text-red-500" /> <span>Google</span></button>
                            <button className='btn'> <FontAwesomeIcon icon={faFacebook} className='text-blue-700' /><span>Facebook</span></button>
                        </div>
                        <div className="w-full bg-gray-300/30 h-0.5 relative">
                            <span className='absolute left-1/2 top-1/2 -translate-1/2 bg-white px-4'> or</span>
                        </div>
                        <form className='space-y-7' onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Name*</label>
                                <input
                                    className="form-control" type='text' id="name" placeholder="Ali"
                                    name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email*</label>
                                <input
                                    className="form-control" type='email' id="email" placeholder="ali@example.com "
                                    name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}
                                {isExistError && <p className='text-red-500'>{isExistError}</p>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="password">Password*</label>
                                <input className="form-control" type='password' id="password" placeholder="create a strong password"
                                    name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                                {/* strengh bar */}
                                {formik.values.password && 
                                  (<div className='flex gap-2 items-center'>
                                    <div className='w-full h-1 bg-gray-200 rounded-xl overflow-hidden'>
                                        <div className={`${passwordFeedback.width } ${passwordFeedback.background }  h-full`}></div>
                                    </div>
                                    <span className='text-nowrap w-26 text-center'>{passwordFeedback.text}</span>
                                </div>)} 
                              
                                {formik.touched.password && formik.errors.password && <p className='text-red-500'>{formik.errors.password}</p>}

                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="repassword">Confirm password*</label>
                                <input className="form-control" type='password' id="repassword" placeholder="Confirm Your password"
                                    name="repassword" value={formik.values.repassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.repassword && formik.errors.repassword && <p className='text-red-500'>{formik.errors.repassword}</p>}

                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="phone">Phone*</label>
                                <input className="form-control" type='tel' id="phone" placeholder="+1234568900"
                                    name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.phone && formik.errors.phone && <p className='text-red-500'>{formik.errors.phone}</p>}
                            </div>
                            <div >
                                <div className='flex gap-2 items-center'>
                                    <input type="checkbox" name="terms" id="terms" className="accent-primary-600 size-4"
                                        value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                                    <label htmlFor="terms"> I agree to the <Link to={'/terms'} className='text-primary-600 underline'>Terms Of Service</Link> and <Link to={'/privacy-policy'} className='text-primary-600 underline'>Privacy Policy</Link></label>
                                </div>
                                {formik.touched.terms && formik.errors.terms && <p className='text-red-500 mt-2'>{formik.errors.terms}</p>}
                            </div>
                            <button type="submit" className='btn bg-primary-600 text-white flex items-center justify-center w-full hover:bg-primary-700 gap-2'>
                                <FontAwesomeIcon icon={faUserPlus} />
                                <span>Create My Account</span>
                            </button>
                        </form>
                        <p className='text-center pt-8 border-t border-gray-400/30'>Already have an account?<Link to={'/login'} className='text-primary-600 underline'>Login</Link></p>
                    </div>
                </div>
            </main>
        </>
    )

}





