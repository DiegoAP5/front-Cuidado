import React from 'react'

import Navbar from '../components/Navbar'
import Shop from '../components/Shop'
import Footer from '../components/Footer'


function Cart() {
  return (
    <div className='cart'>
        <Navbar/>
        <Shop/>
        <Footer/>
    </div>
  )
}

export default Cart