import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ViewClothes from '../components/ViewClothes'


function Book() {
  return (
    <div className='book'>
        <Navbar/>
        <ViewClothes/>
        <Footer/>
    </div>
  )
}

export default Book