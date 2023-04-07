import styles from '../css/Footer.module.css'

import LogoEmpresaFicticia from '../assets/images/logo-removebg.png'

function Footer(params) {
    return(
    <footer className={styles.footerDistributed}>

      <div className={styles.footerLeft}>
        <img className={styles.navbarLogoCloth} src={LogoEmpresaFicticia} />
        <p className={styles.footerCompanyName}>La Tienda de ropa (c) 2023</p>
      </div>

      <div className={styles.footerCenter}>
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Carr. Tuxtla-Suchiapa</span> Suchiapa, Chiapas</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>961 - TUROPA</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="">atencion@cuidadoconelgato.com</a></p>
        </div>
      </div>

        <div className={styles.footerRight}>
            <p className={styles.footerCompanyAbout}>
                <span>Aquí en...</span>
               Cuidado con el gato buscamos vender ropa de calidad a los precios más bajos posibles.
            </p>
        </div>

    </footer>
    )
}

export default Footer;