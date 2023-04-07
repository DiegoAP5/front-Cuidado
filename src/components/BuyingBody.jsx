import React from 'react'
import styles from "../css/BuyingBody.module.css"
import { Link, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'



function BuyingBody() {

  const location = useLocation();

  const { book } = location.state;

  function alert() {
    Swal.fire({
       position: 'center-end',
       title: '¡Gracias por comprar con nosotros!',
       color: '#fff',
       width: '400px',
       background: '#008AD4',
       showConfirmButton: false,
       timer: 1500
   })
 }

  const Payment = () => {
    return (
      <>
        <p className={styles.title}>Para realizar el pago, favor de ingresar los datos que se piden</p>

        <div className={styles.cardData}>
          <label >
            <p>Número de tarjeta</p>
            <input className={styles.cardNumberInput} type="text" placeholder='1234 1234 1234 1234' maxLength={16} />
          </label>
          <div className={styles.twice}>
            <label >
              <p>Fecha de expiración</p>
              <input className={styles.expirationInput} type="text" placeholder='MM/YY' maxLength={5} />
            </label>
            <label >
              <p>CVC</p>
              <input className={styles.codeInput} type="text" placeholder='CVC' maxLength={3} />
            </label>
          </div>
          <label >
            <p>Nombre</p>
            <input className={styles.countryInput} type="text" />
          </label>

          <div className={styles.ContainerButton}>
            <button type='submit'  onClick={alert}  className={styles.ButtonForm}>Comprar</button>
          </div>
        </div>
      </>
    )

  }



  return (
    <div className={styles.buyingContainer}>
      {console.log(book)}
      <div className={styles.contents}>
        <Payment />

      </div>
      <div className={styles.aside}>
        <div className={styles.ContainerSell}>
          <div className={styles.ContainerSummary}>
            <h2>Resumen del pedido</h2>
          </div>
          <div className={styles.articlesContainer}>
            <h4>Artículos</h4>
            <div className={styles.articles}>
              <img src={book.cover} alt="" />
            </div>
          </div>
          <div className={styles.ContainerSubtotal}>
            <strong><p>Subtotal</p></strong>
            <p>{'$' + book.price}</p>
          </div>
          <div className={styles.ContainerSent}>
            <div className={styles.ContainerTextSent}>
              <h3>Envío</h3>
              <p>A partir de $399 envio gratis</p>
              <strong><p> (Recíbelo de 1 a 3 días hábiles.) </p></strong>
            </div>
            <div className={styles.ContainerPriceSent}>
              <p>{'$' + '----'}</p>
            </div>
          </div>
          <div className={styles.ContainerTotal}>
            <strong><p>Total</p></strong>
            <p>{'$' + '----'}</p>
          </div>

          <div className={styles.ContainerPolicy}>
            <h3>Envio y entrega</h3>
            <p>Los pedidos son enviados diariamente con entregas de lunes a domingo (hasta las 10 pm).</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyingBody 