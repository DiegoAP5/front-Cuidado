import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../css/Carrousel.module.css"
import Card from "../components/ClothesList"
import { Link } from 'react-router-dom'

function CarrouselClothes({ endpoint, title }) {

    const [clothes, setClothes] = useState([]);

    useEffect(() => {

        fetch(endpoint)
            .then(response => response.json())
            .then(data => setClothes(data.data));

    }, [])

    return (


        <div className={styles.bodyDistributed}>
            <p className={styles.title}>{title}</p>
            <div className={styles.clothes}>
                {
                    clothes.map(cloth => {
                        return (
                            <div key={cloth.id} className={styles.cloth}  >
                                <Card
                                    id={cloth.id}
                                    image={cloth.image}
                                    nombre={cloth.name}
                                    precio={cloth.price} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CarrouselClothes