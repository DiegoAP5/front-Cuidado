import styles from "../css/Body.module.css"
import { Link } from 'react-router-dom'


//aquí el carrusel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useState, useEffect } from 'react'

import Clothes from "./Clothes";


function Body(params) {

    const [user, setUser] = useState(localStorage.getItem("user-info"))





    return (
        <div className={styles.bodyContainer}>

            <div>
                <Clothes />
            </div>
        </div>

    )
}

export default Body;