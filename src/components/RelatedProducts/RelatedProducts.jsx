import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { getAllProducts } from "../../services/products-services";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";

export default function RelatedProducts({ ProductDetails }) {
  const { id } = useParams()
  const {
    category } = ProductDetails;
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchRelatedProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: category.id });
 
      if (response.success) {
        setIsLoading(false)
        setRelatedProducts(response.data.data);

      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);

    }
  }
  useEffect(() => {
    fetchRelatedProducts()

  }, [id]);


  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <section className="mt-8 pb-8">


        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold mb-4">You may also like</h2>
            <div className="flex space-x-1">
              <button
                className=" prev-btn  h-10 w-10 rounded-full flex items-center justify-center text-gray-600
                 hover:bg-primary-100 hover:text-primary-600">

                <FontAwesomeIcon icon={faChevronLeft} />

              </button>
              <button
                className=" next-btn h-10 w-10 rounded-full flex items-center justify-center text-gray-600
                 hover:bg-primary-100 hover:text-primary-600">

                <FontAwesomeIcon icon={faChevronRight} />

              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation,]}
            spaceBetween={10}
            slidesPerView={5}
            loop={true}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          >
            {relatedProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>



        </div>

      </section>
    </>
  )
}
