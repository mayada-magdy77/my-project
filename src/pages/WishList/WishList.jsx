import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../../components/Rating/Rating";
import { Link } from "react-router";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { WishlistContext } from "../../context/Wishlist.context";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productsContext } from "../../context/Products.context";







export default function WishList() {


  const { products: wishlistProducts } = useContext(productsContext)
  const { handleAddingProductToCart } = useContext(CartContext);
  const { products, isLoading, deleteItemFromWishlist } = useContext(WishlistContext);
  if (isLoading) {
    return <Loading />
  }

  console.log(products)


  return (
    <>
      <main>

        <div className="container">
          <div className="md:grid md:grid-cols-8 py-10 gap-6">
            <div className="col-span-6 bg-white rounded-md shadow-md px-6 py-8 h-fit">

              <h1 className="text-2xl font-bold mb-6">My WishList</h1>
              <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                <span className="text-gray-500"> 12 items in your wishlist</span>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2  btn bg-red-500 text-white py-3">
                    <FontAwesomeIcon icon={faTrash} />
                    <span> Clear All</span>
                  </button>
                  <button className=" btn py-3 bg-primary-600 text-white px-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span> Add All to Cart</span>
                  </button>
                </div>
              </div>
              {products.slice(0, 4).map((product) =>
                <div key={product._id} className="Wishlist-item py-6 flex items-center justify-between  border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Link to={`/product/${product.id}`}>
                      <img alt="" src={product.imageCover} className="size-36 object-cover rounded-md overflow-hidden" />
                    </Link>

                    <div className="flex flex-col justify-center gap-2">
                      <span className="text-gray-600"> {product.category.name}</span>
                      <h3 className="text-lg font-semibold"> {product.title} </h3>
                      <div><Rating rating={product.ratingsAverage} /> <span> {product.ratingsAverage} ({product.ratingsQuantity})</span></div>
                      <span className="text-primary-600 text-2xl font-medium"> {product.price} EGP</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className=" btn py-3 bg-primary-600 text-white px-4 flex items-center gap-2" onClick={() => { handleAddingProductToCart({ id: product.id }) }}>
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span> Add to Cart</span>
                    </button >
                    <button onClick={() => { deleteItemFromWishlist({ id: product.id }) }} className="btn bg-red-500 text-white">
                      <FontAwesomeIcon icon={faTrash} className="text-xl " />
                    </button>

                  </div>
                </div>
              )}

            </div>
            <div className="col-span-2  space-y-6 h-fit">

              <div className=" bg-white rounded-md shadow-md space-y-6 px-6 py-8">
                <h2 className="text-xl font-semibold text-gray-900">create New WishList</h2>
                <div className="">
                  <label htmlFor="name" className="font-medium text-gray-900 text-xl">Whislist Name</label>
                  <input placeholder="Holiday Shopping" id="name" className="form-control w-full py-3 mt-2 " />
                </div>
                <div className="space-y-1">
                  <span className="text-lg font-medium">Privacy</span>
                  <div className="flex items-center gap-6 text-gray-900">

                    <label htmlFor="public" className="flex items-center gap-2 text-lg">
                      <input type="radio" value={`public`} name="public" className="size-4" />
                      <span>Public</span>
                    </label>

                    <label htmlFor="privat" className="flex items-center gap-2 text-lg">
                      <input type="radio" value={`privat`} name="privat" className="size-4" />
                      <span>privat</span>
                    </label>

                  </div>
                </div>

                <button className="text-white bg-primary-600 btn py-3 w-full"> create wishlist</button>
              </div>

              <div className=" bg-white rounded-md shadow-md space-y-6 px-6 py-8">


                <h2 className="text-xl font-bold mb-6">My WishList</h2>

                <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                  <div className="flex flex-col gap-1 justify-center">
                    <span className="text-lg font-semibold ">Default Wishlist</span>
                    <span className="text-sm text-gray-500 ">12 items</span>
                  </div>
                  <span className="text-lg font-semibold text-primary-600">View</span>
                </div>


                <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                  <div className="flex flex-col gap-1 justify-center">
                    <span className="text-lg font-semibold ">Birthday Ideas</span>
                    <span className="text-sm text-gray-500 ">6 items</span>
                  </div>
                  <span className="text-lg font-semibold text-primary-600">View</span>
                </div>

                <div className="flex items-center justify-between  pb-4">
                  <div className="flex flex-col gap-1 justify-center">
                    <span className="text-lg font-semibold ">Weekly Groceries</span>
                    <span className="text-sm text-gray-500 ">15 items</span>
                  </div>
                  <span className="text-lg font-semibold text-primary-600">View</span>
                </div>
              </div>
              <div className=" bg-white rounded-md shadow-md space-y-6 px-6 py-8">

                <h2 className="text-xl font-bold mb-6">My WishList</h2>
                <p>
                  share your Wishlist with friends and family
                </p>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 text-white btn bg-blue-600 py-3 w-full justify-center">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span> Facebook</span>
                  </button>
                  <button className="flex items-center gap-2 text-white btn bg-blue-400 py-3 w-full justify-center">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span> Twitter</span>
                  </button>
                </div>
              </div>

            </div>
          </div>


        </div>

        <div className="bg-white ">
          <div className="container py-10">
            <h2 className="text-2xl font-semibold my-2">Recently viewd</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {wishlistProducts.slice(0, 5).map((product) => (<ProductCard key={product._id} productInfo={product}></ProductCard>
              ))}
            </div>


          </div>
        </div>
      </main>
    </>
  )
}

