import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import homeSliderImg from "../../assets/images/home-slider-1.png";
export default function HomeSlider() {
  return (
    <>
      <Swiper
      slidesPerView={1}
      modules={[Pagination, Navigation]}
     loop={true}
     pagination={{ clickable: true }}
     navigation={true}
    >
    <SwiperSlide ><div style={{backgroundImage:`url('${homeSliderImg}')`, backgroundSize:"cover" , backgroundPosition:"center"}}>
      <div className="overlay py-24 bg-gradient-to-r from-primary-600/95 to-primary-600/40 text-white">
      <div className="container space-y-3">
        <h2 className="text-2xl font-bold">Fresh Products delieverd <br/> to your door</h2>
        <p>Get 20% Off for your first order</p>
        <div className="space-x-2">
          <button className="btn text-primary-600 bg-white border-white border-2 hover:bg-transparent hover:text-white transition-all duration-300 "> Shop Now</button>
          <button className="btn bg-transparent border-white border-2 text-white hover:text-primary-600 hover:bg-white transition-all duration-300">View Deals</button>
        </div>
      </div>
      </div>
      </div>
      </SwiperSlide>
      <SwiperSlide ><div style={{backgroundImage:`url('${homeSliderImg}')`, backgroundSize:"cover" , backgroundPosition:"center"}}>
      <div className="overlay py-24 bg-gradient-to-r from-primary-600/95 to-primary-600/40 text-white">
      <div className="container space-y-3">
        <h2 className="text-2xl font-bold">Fresh Products delieverd <br/> to your door</h2>
        <p>Get 20% Off for your first order</p>
        <div className="space-x-2">
          <button className="btn text-primary-600 bg-white border-white border-2 hover:bg-transparent hover:text-white transition-all duration-300 "> Shop Now</button>
          <button className="btn bg-transparent border-white border-2 text-white hover:text-primary-600 hover:bg-white transition-all duration-300">View Deals</button>
        </div>
      </div>
      </div>
      </div>
      </SwiperSlide>
          <SwiperSlide ><div style={{backgroundImage:`url('${homeSliderImg}')`, backgroundSize:"cover" , backgroundPosition:"center"}}>
      <div className="overlay py-24 bg-gradient-to-r from-primary-600/95 to-primary-600/40 text-white">
      <div className="container space-y-3">
        <h2 className="text-2xl font-bold">Fresh Products delieverd <br/> to your door</h2>
        <p>Get 20% Off for your first order</p>
        <div className="space-x-2">
          <button className="btn text-primary-600 bg-white border-white border-2 hover:bg-transparent hover:text-white transition-all duration-300 "> Shop Now</button>
          <button className="btn bg-transparent border-white border-2 text-white hover:text-primary-600 hover:bg-white transition-all duration-300">View Deals</button>
        </div>
      </div>
      </div>
      </div>
      </SwiperSlide>

  </Swiper>
    </>
  )
}

