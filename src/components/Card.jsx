import styles from '../css/Card.module.css'
import {Link } from 'react-router-dom'

function Card({ image, nombre, precio, id }) {
    return (
        <Link to={'/cloth'} className={styles.card} state={{ nCloth: id }}>
            <img className={styles.imagen} src={image} />
            <div className={styles.info}>
                <h4 className={styles.nombre}>{nombre}</h4>
                <p className={styles.precio}> ${precio} </p>
                <a className={styles.comprar} href="" target="_blank">Comprar</a>
            </div>  
        </Link>      
    )
}

export default Card;