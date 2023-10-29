import React from 'react'
import Banner from '../components/Banner'
import BestsellerBooks from './BestsellerBooks'
import FavbookBannercard from './FavbookBannercard'
import Review from './Review'


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestsellerBooks/>
      <FavbookBannercard/>
      <Review/>
    </div>
  )
}

export default Home