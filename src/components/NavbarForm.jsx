import styles from '../css/Navbar.module.css'
import { Outlet, Link } from 'react-router-dom'

import Imagen1 from '../assets/images/Logo_TiendaRopa.png'



function Navbar(params) {


    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbarDistributed}>

                <div className={styles.logoContainer}>
                    <Link to={'/'}>
                        <img className={styles.navbarLogoCloth} src={Imagen1} />
                    </Link>
                </div>



            </nav>
        </div>
    )
}

export default Navbar;