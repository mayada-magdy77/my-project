

import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faEnvelopeOpenText, faHeadphonesSimple, faLock, faPaperPlane, faQuestionCircle, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router'

import * as Yup from "yup" 
import { sendEmailTocheck } from '../../services/auth-services'
export default function ForgetPassword() {

  const emailRegex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().matches(emailRegex, 'Please enter a valid email').required('Email is Required'),
    }),
    onSubmit: (values) => {
      sendEmailTocheck(values)
      setTimeout(() => {
        navigate('/verifyemail')
      },3500)
      sessionStorage.setItem("email",values.email)
    }
  })







  return <>
    <div className='bg-gray-100 py-15'>
      <div className="container flex items-center justify-center">
          <div className='flex flex-col gap-4 w-2/5'>
            <div className='rounded-md bg-white text-center border border-gray-300/60 py-6 px-6 space-y-4'>
                <span className='bg-primary-200 text-primary-600 mx-auto rounded-full size-15 flex justify-center items-center text-3xl'><FontAwesomeIcon icon={faLock} /></span>
                <h2 className='font-semibold text-2xl'>Forgot your password?</h2>
                <p className='text-gray-500 font-medium'>No worries! Enter your email address and we'll <br /> send you a link to reset your password.</p>
                <div className='text-left'>
                    <label htmlFor="email" className='text-xl font-bold'>Email Address</label>
                    <div className='relative mt-2'>
                      <input id='email' type="email" placeholder='Your registered email address' className=' w-full py-3 form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                     <FontAwesomeIcon icon={faEnvelope} className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 text-xl'/>
                    </div>
                     {formik.touched.email && formik.errors.email && <p className='text-red-500 text-start text-sm mt-1'>{formik.errors.email}</p>}
                    <div className='mt-5'>
                      <button type='submit' className='btn text-white bg-primary-600 py-3 hover:bg-primary-700 w-full flex justify-center items-center gap-2' onClick={formik.handleSubmit}><FontAwesomeIcon icon={faPaperPlane} />Send Reset Code</button>
                    </div>
                </div>
                <span className='text-gray-500'>Remember your password? <Link to={"/login"} className='text-primary-600' state={{from:"/forget-password"}}>Sign in</Link></span>
            </div>
            <div className='flex justify-between gap-x-4 border border-gray-300/60 rounded-md p-4'>
              <i className='text-primary-600 text-3xl'><FontAwesomeIcon icon={faShieldHalved} /></i>
              <div className='flex flex-col gap-2'>
                  <span className='text-black'>Security notice</span>
                  <p className='text-gray-500'>For your security, a password reset link will be sent to your registered email address. The link will expire after 30 minutes.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className='py-15 text-center'>
      <h2 className='font-bold text-2xl'>Need aditional help?</h2>
      <div className="container pt-8 lg:w-2/3">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
            <div className='bg-gray-100 rounded-md py-5 px-4 space-y-3 flex flex-col items-center justify-center border border-gray-300/50'>
                <span className='bg-primary-50 text-primary-600 mx-auto rounded-full size-16 flex justify-center items-center text-xl'><FontAwesomeIcon icon={faHeadphonesSimple} /></span>
                <span className='text-lg font-bold'>Contact support</span>
                <p className='text-gray-600 font-medium '>Our customer support team is available 24/7 to assist you.</p>
                <a href="#" className='flex items-center gap-2 cursor-pointer'>
                  <span className='text-primary-600 font-semibold'>Contact us</span>
                  <FontAwesomeIcon icon={faArrowRight} className='text-primary-600'/>
                </a>
            </div>

            <div className='bg-gray-100 rounded-md py-5 px-4 space-y-3 flex flex-col items-center justify-center border border-gray-300/50'>
                <span className='bg-primary-50 text-primary-600 mx-auto rounded-full size-16 flex justify-center items-center text-xl'><i><FontAwesomeIcon icon={faQuestionCircle} /></i></span>
                <span className='text-lg font-bold'>FAQs</span>
                <p className='text-gray-600 font-medium '>Find answers to frequently asked questions about your account.</p>
                <a  href="#" className='flex items-center gap-2 cursor-pointer'>
                  <span className='text-primary-600 font-semibold'>View FAQs</span>
                  <FontAwesomeIcon icon={faArrowRight} className='text-primary-600'/>
                </a>
            </div>
        
            <div className='bg-gray-100 rounded-md py-5 px-4 space-y-3 flex flex-col items-center justify-center border border-gray-300/50'>
                <span className='bg-primary-50 text-primary-600 mx-auto rounded-full size-16 flex justify-center items-center text-xl'><i><FontAwesomeIcon icon={faEnvelopeOpenText} /></i></span>
                <span className='text-lg font-bold'>Email not recieved</span>
                <p className='text-gray-600 font-medium '>Check your spam folder or request a new reset link.</p>
                <a href="#"className='flex items-center gap-2 cursor-pointer'>
                  <span className='text-primary-600 font-semibold'>Resend Email</span>
                  <FontAwesomeIcon icon={faArrowRight} className='text-primary-600'/>
                </a>
            </div>
        </div>
      </div>
    </div>
  </>
}
