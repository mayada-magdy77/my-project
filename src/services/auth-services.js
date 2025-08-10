import axios from "axios"
import { API_CONFIG } from "../config"
import {apiClient} from "./api-client"
import { toast } from "react-toastify";
// authentication functions that deals with API
export async function sendDataToSignUp(values){
    try {
        const options = {
                        method: "POST",
                        url: `/auth/signup`,
                        data: {
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            rePassword: values.repassword,
                            phone: values.phone,
                        }
                    }
                    const response = await apiClient.request(options);
                    return response;
    } catch (error) {
        throw error
    }
}

export async function sendDataToSignIn(values) {
   
    try {
    const options = {
            method: "POST",
            url: `/auth/signin`,
            data: {
    
              email: values.email,
              password: values.password,
    
            }
          }
          const response = await apiClient.request(options)
          
          return response;
          
} catch (error) {
    throw error
}

}




export async function verifyToken(){
  try {
      const options={
        url:`/auth/verifyToken`,
        method:"GET"
    }
    const response =await apiClient.request(options)
    return response
  } catch (error) {
    throw error
  }

}




export async function sendEmailTocheck(values){
    const options = {
        method: "POST",
        url: "/auth/forgotPasswords",
        data: {
            email: values.email,
        }
    }
    const {data} = await apiClient.request(options)
    if (data.statusMsg === "success") {
      
        return data;
    }
    
}

export async function verifySentCode(values){
    const options = {
        method: "POST",
        url: "/auth/verifyResetCode",
        data: {
            resetCode:values.resetCode
        }
    }
    const {data} = await apiClient.request(options)

    return data;
    
}

export async function resetPassword(values){
    const options = {
        method: "PUT",
        url: "/auth/resetPassword",
        data: {
            email:values.email,
            newPassword:values.newPassword
        }
    }
    const response = await apiClient.request(options)
 
    return response;
    
    
}