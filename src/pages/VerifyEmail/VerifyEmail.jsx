import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { verifySentCode } from "../../services/auth-services";
import { useRef } from "react";
import { calcTimeLeft } from "../../utils/counterDown";
export default function VerifyEmail() {
 const[timeLEFT , setTimeLeft]=useState({hours:0,minutes:0,seconds:0});
  const navigate = useNavigate();
          useEffect(()=>{
   const timer= setInterval(() => {
      const NewTimeLeft= calcTimeLeft();
      setTimeLeft(NewTimeLeft);
    }, 1000);
    return function (){
      clearInterval(timer)
    }
},[]);


  const inputs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs[index - 1].current.focus();
    }
  };



  const formik=useFormik(
    {initialValues:{
      resetCode:""
    }
    ,onSubmit:(values)=>{
      const joinedCode = code.join("");
      verifySentCode({resetCode:joinedCode})
      setTimeout(() => {
        navigate("/resetpassword")
      },3500)
    }}
  )


  return <>
    <div className="py-15">
      <div className="container py-4">
        <div className="w-2/6 mx-auto border border-gray-200/50 rounded-lg p-6 space-y-6">
            <div className="text-4xl text-primary-600 size-20 bg-primary-100 rounded-full mx-auto flex items-center justify-center"><FontAwesomeIcon  icon={faEnvelopeOpenText} /></div>
            <h2 className="text-3xl font-bold text-center">Verify your email</h2>
            <div>
              <p className="text-gray-600 text-center">We have sent a verification code to your email address.</p>
              <p className="text-gray-600 text-center">Plese, enter the code below to verify your email address</p>
            </div>

            <div className="space-y-6 text-center">
              <span className="text-gray-500  ">Verification Code</span>
          


<div className="flex gap-3 justify-center">
      {inputs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          maxLength="1"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="size-14 border-2 border-gray-300 rounded-md text-center text-lg focus:outline-none focus:border-primary-400"
        />
      ))}
    </div>


              <button type="submit" className="btn bg-primary-600 hover:bg-primary-700 w-full" onClick={formik.handleSubmit}>Verify Email</button>
              <div className="text-gray-500 flex items-center justify-center">
                  <span className="text-gray-500">Didn't receive the code?</span>
                  <span>{String(timeLEFT.minutes).padStart(2,0)}:{String(timeLEFT.seconds).padStart(2,0)}</span>
              </div>
              <button className="text-primary-600 cursor-pointer block mx-auto hover:text-primary-700">Resend Code</button>
            </div>
        </div>
      </div>
      <div className="text-center">
        <span>Having trouble? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link></span>
      </div>
    </div>
  
  </>
}















