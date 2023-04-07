import React from 'react';
import styles from '../css/Clothes.module.css';
import Orders from './Orders'
import { useState, useEffect } from 'react'
import Card from './Card';

const ClothesList = ({ clothes }) => {

  const [cloths, setCloths] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")))

  useEffect(() => {
    fetch('http://localhost:8080/cloth')
      .then((response) => response.json())
      .then((data) => setCloths(data.data));
  }, []);


  return (
    <div className={styles.row}>
      {cloths.map((clothing) => (
        <div className={styles.cardContainer} key={clothing.id}>
          <div className={styles.card}>
            <Card 
              image={clothing.url}
              nombre={clothing.name}
              precio={clothing.price}
              id={clothing.id}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothesList;
