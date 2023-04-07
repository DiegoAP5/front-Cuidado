import { useState, useEffect, Component } from 'react'
import styles from '../css/Shop.module.css'
import { AiFillDelete } from "react-icons/ai"
import { useRef } from 'react';
import Swal from 'sweetalert2'


function Shop() {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));
   const [address, setAddress] = useState("");
   const [cloths, setCloths] = useState([])

   const [orders, setOrders] = useState([]);

   const [orderId, setOrderId] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/order/user/' + user.id + '/status/inProcess', {
         headers: {
            'Content-Type': 'application/json',
         }
      }
      )
         .then(response => response.json())
         .then(data => setOrders(data.data));
   }, [orders])

   function handleChangeStatus(e) {
      const value = e.target.value
      setOrderId(value)
      console.log(value)
   }

   const form = useRef(null)

   function buyAll(e) {
      e.preventDefault()
      const formData = new FormData(form.current)
      fetch('http://localhost:8080/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.id,
                    orderId: formData.get('id'),
                    status: 'inProcess',
                    guide: '72893749123874',
                    address: formData.get('address')
                })
            })
                .then(res => res.json())
                .then(data => {
                })
                .catch(err => console.error(err))

      Swal.fire({
         position: 'center-end',
         title: 'Compras realizadas',
         color: '#fff',
         width: '400px',
         background: '#008AD4',
         showConfirmButton: false,
         timer: 1500
      })

      fetch('http://localhost:8080/order/'+formData.get('id'), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'shipping'
                })
            })
                .then(res => res.json())
                .then(data => {
                })
                .catch(err => console.error(err))
   }

   function getData(id) {
      fetch('http://localhost:8080/cloth')
         .then(response => response.json())
         .then(data => setCloths(data.data))

      return (

         <>
            {
               cloths.map(cloth => {
                  return (

                     cloth.id == id
                        ?
                        <>
                           <img className={styles.ContentImg} src={cloth.url} />
                           <h3 className={styles.ContentTitle}>{cloth.name}</h3>
                        </>
                        :
                        <>
                        </>

                  )
               })
            }

         </>

      )
   }

   return (


      <div className={styles.shopContainer}>

         <div className={styles.ContainerTitle}>
            <strong><p>Mi bolsa</p></strong>
         </div>
         <div className={styles.ContainerForm}>
            <div className={styles.ContainerBook}>
               <div className={styles.ContainerBookTitle}>
                  <div className={styles.ContainerImg}>
                     <h3>Articulos</h3>
                  </div>
                  <div className={styles.ContainerBookPrice}>
                     <h3>Precio</h3>
                  </div>
                  <div className={styles.ContainerBookSub}>
                     <h3>Subtotal</h3>
                  </div>
                  <div className={styles.ContainerBookDelete}>
                     <h3>Comprar</h3>
                  </div>
               </div>

               {
                  orders.map(order => {
                     return (

                        <div className={styles.ContainerBookContent}>
                           <div className={styles.ContainerImgCont}>
                              {
                                 getData(order.clothId)


                              }
                              <p className={styles.ContentQuantity}>{"Cantidad"}</p>
                              <p><strong>{"("}</strong>{order.quantity}<strong>{")"}</strong></p>
                           </div>
                           <div className={styles.ContainerBookPriceCont}>
                              <p>{'$' + order.price}</p>

                           </div>
                           <div className={styles.ContainerBookSubCont}>
                              <p>{'$' + order.total}</p>
                           </div>
                           <div className={styles.ContainerBookDeleteCont}>
                              <form method='' id='' ref={form} onSubmit={buyAll}>
                                 <input onChange={handleChangeStatus} type='hidden' value={order.id} name='id' id='id' />
                                 <label className={styles.label}>
            <span>Direccion</span>
            <input className={styles.input} type="text" onChange={(e) => setAddress(e.target.value)} name='address' id='address' required />
          </label>
                                 <button type='submit' className={styles.ButtonForm}  >Comprar</button>

                              </form>
                           </div>
                        </div>





                     )
                  })
               }


            </div>
         </div>
      </div>

   )
}

export default Shop