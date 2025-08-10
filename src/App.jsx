import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import NotFound from "./pages/NotFound/NotFound"
import WishList from "./pages/WishList/WishList"
import Favourits from "./pages/Favourits/Favourits"
import Cart from "./pages/cart/Cart"
import Orders from "./pages/Orders/Orders"
import SignUp from "./pages/SignUp/SignUp"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import CheckOut from "./pages/CheckOut/CheckOut"
import SearchProducts from "./pages/SearshProducts/SearchProducts"
import Catogries from "./pages/Catogeries/Catogries"
import Brands from "./pages/Brands/Brands"
import { ToastContainer } from "react-toastify"
import { API_CONFIG } from "./config"
import Productsprovider from "./context/Products.context"
import CatogeriesProvider from "./context/categories.context"
import AuthProvider from "./context/Auth.context"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import CartProvider from "./context/cart.context"
import OfflineScreen from "./components/OfflineScreen/OfflineScreen"
import BrandsProvider from "./context/brand.context"
import Brand from "./pages/Brand/Brand"
import AccountLayout from "./components/AccountLayout/AccountLayout"
import ResetPassword from "./pages/ResetPassword/ResetPassword"
import WishlistProvider, { WishlistContext } from "./context/Wishlist.context"
import Category from "./pages/Category/Category"



function App(){

   const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"Login",
          element:<Login/>
        },
        {
          path:"Favourite",
          element:<ProtectedRoute>
            <Favourits/>
          </ProtectedRoute>
        },
        {
          path:"Cart",
          element:<ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
        },
      
        {
          path:"SignUP",
          element:<SignUp/>
        },
        {
          path:"ForgetPassword",
          element:<ForgetPassword/>
        },
        {
          path:"VerifyEmail",
          element:<VerifyEmail/>
        },
        {
          
        },
         {
          path:"Product/:id",
          element:<ProductDetails/>
        },
          {
          path:"CheckOut",
          element:<ProtectedRoute><CheckOut/></ProtectedRoute>
        },
          {
          path:"SearcProducts",
          element:<SearchProducts/>
        },
          {
          path:"Catogries",
          element:<Catogries/>
        },
          {
          path:"Brands",
          element:<Brands/>
        },
        {
          path:"brand/:id",
          element:<Brand/>
        },
          {
          path:"category/:id",
          element:<Category/>
        },
         {
               path:"orders",
          element:<Orders/>
            },
         {
          path:"account",
          element:<ProtectedRoute><AccountLayout/></ProtectedRoute>,
          children:[
            {
               path:"Orders",
          element:<Orders/>
            },
            
              {
               path:"WishList",
          element:<WishList/>
            },
             
            
          ]
        },
           {
               path:"WishList",
          element:<ProtectedRoute>
            <WishList/>
          </ProtectedRoute>
            },
         


           {
               path:"resetpassword",
          element:
            <ResetPassword/>
          
            },
            
        {
          path:"*",
          element:<NotFound/>
        }
        
      ]
    }
  ])
  return (
    <>
  <OfflineScreen>
       <AuthProvider>
<WishlistProvider>
        <CartProvider>
            <Productsprovider>
      <CatogeriesProvider>
      <BrandsProvider>
      
          <RouterProvider router={router}/>
     <ToastContainer position="top-right" autoClose={3000} closeButton={false} closeOnClick={true} />
    
      </BrandsProvider>
      </CatogeriesProvider>
    </Productsprovider>
      </CartProvider>
</WishlistProvider>
     </AuthProvider>
  </OfflineScreen>
    </>
  )
}
export default App