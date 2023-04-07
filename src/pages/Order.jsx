import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Orders from "../components/Orders";
import React from 'react'

function Order() {
    return ( 
        <div className="order">
            <Navbar/>
            <Orders/>
            <Footer/>
        </div>
     );
}

export default Order;