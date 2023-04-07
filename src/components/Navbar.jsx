import styles from '../css/Navbar.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlinePoweroff } from "react-icons/ai"

import Imagen1 from '../assets/images/logo-removebg.png'




function Navbar(params) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")))


    const navigate = useNavigate();


    function ActionButton({ redirectTo, text }) {
        return (
            <Link className={styles.actionButton} to={redirectTo}>
                <span className='textButton'>{text}</span>
            </Link>
        )
    }


    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbarDistributed}>

                <div className={styles.logoContainer}>
                    <Link to={'/'}>
                        <img className={styles.navbarLogoCloth} src={Imagen1} />
                    </Link>
                </div>


                <div className={styles.optionsContainer}>

                    {

                        user
                            ?
                                <>
                                    <ActionButton redirectTo={"/order"} text="Compras" />
                                    <ActionButton redirectTo={"/cart"} text="Carrito" />
                                    <Link to={"/logout"} className={`${styles.actionButton} ${styles.actionButtonLogout}`} >
                                        <AiOutlinePoweroff />
                                    </Link>


                                </>
                            :
                            <ActionButton redirectTo={"/login"} text="Iniciar sesión" />


                    }
                </div>
            </nav>
        </div>

    )
}

export default Navbar;