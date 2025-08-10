import React from 'react'
import HomeSlider from '../../components/homeSlider/homeSlider'
import HomeFeatures from '../../components/HomeFeatures/HomeFeatures'
import HomeCategories from '../../components/HomeCategories/HomeCategories'
import HomeDeals from '../../components/HomeDeals/HomeDeals'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import NewsLetter from '../../components/NewLetter/NewsLetter'


export default function Home() {
  return (
   <>
 <div className='bg-gray-100/80'>
    <HomeSlider></HomeSlider>
    <HomeFeatures></HomeFeatures>
    <HomeCategories></HomeCategories>
    <HomeDeals></HomeDeals>
    <FeaturedProducts></FeaturedProducts>
    <NewsLetter></NewsLetter>
 </div>
   </>
  )
}
