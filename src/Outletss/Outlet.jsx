import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import place from './place'
const Outlet = () => {
  return (
    <div>
      <Navbar />
        <place />
        <Footer />
    </div>
  );
};

export default Outlet;