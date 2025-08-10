import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";


export default function ProtectedRoute({children}) {
const location=useLocation()
const{isAuthenticated,isLoading}=useContext(AuthContext);

if(isLoading){
  return <Loading/>
}
if(!isAuthenticated){
  return<Navigate to="/login" state={{from:location.pathname}}/>
}else{
   return children
}
}
