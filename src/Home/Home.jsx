import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from './Header'
import FoodItems from './Fooditem'
import Welcome from './Welcome'
import Promotion from './Promotion'
import FoodComboSection from './FoodComboSection'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <FoodItems />
      <Welcome />
      <Promotion />
      {/* <FoodComboSection /> */}
      <Footer />
    </div>
  )
}

export default Home