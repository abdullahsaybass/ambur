import React from 'react'
import Serviceheader from './Serviceheader'
import ZahoorCatering from './Catering'
import CateringService from './CateringService'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
const service = () => {
  return (
    <div>
        <Navbar />
        <Serviceheader />
        <ZahoorCatering />
        <CateringService />
        <Footer />
    </div>
  )
}

export default service