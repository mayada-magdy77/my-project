import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../services/auth-services";

export const AuthContext=createContext(null);
export default function AuthProvider({children}){
    const[token,setToken]=useState(localStorage.getItem("token")) ;
    const[isLoading,setIsLoading]=useState(true);
    const[isAuthenticated,setIsAuthenticated]=useState(false);
    const[userInfo,setUserInfo]=useState(JSON.parse(localStorage.getItem("userInfo")));

    useEffect(()=>{
       const checkAuth=async()=>{
         try {
            setIsLoading(true);
            const response= await verifyToken()
            if(response.success){
                setIsLoading(false);
                setIsAuthenticated(true);
                setUserInfo(response.data.decoded);
                localStorage.setItem("userInfo",JSON.stringify(response.data.decoded));
            }
        } catch (error) {
            setIsLoading(false);
        }
       }
         checkAuth()
    },[token])

    function logOut(){
       setToken(null);
       localStorage.removeItem("token","userInfo");
    }   

    return <AuthContext.Provider value={{token,setToken,logOut,isAuthenticated,userInfo,isLoading}}>
          {children}
    </AuthContext.Provider >
}

