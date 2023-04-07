import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../css/NotFound.module.css'
AiOutlineMeh
import { AiOutlineMeh } from "react-icons/ai"


function NotFound() {
    return (
        <div>
            <Navbar />
            <div className={styles.notFound}>
                <p>
                    404 Error Not Found 
                    Lo sentimos, pero la página en cuestión no existe.
                </p>
                <AiOutlineMeh/>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound