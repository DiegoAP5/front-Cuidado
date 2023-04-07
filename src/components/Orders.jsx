import { useState, useRef, useContext, useEffect } from "react"
import styles from '../css/Orders.module.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Orders() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));


    const [clothes, setClothes] = useState([])

    const [orders, setOrders] = useState([]);

    const [orderId, setOrderId] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/order/user/' + user.id,{
            headers: {
                'Content-Type': 'application/json',
             }
        })
            .then(response => response.json())
            .then(data => setOrders(data.data));

    }, [])

    function handleChangeStatus(e) {
        const value = e.target.value
        setOrderId(value)
        console.log(value)
     }

     const form = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(form.current)
        fetch('http://localhost:8080/refund', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.id,
                    orderId: formData.get('id'),
                    status: 'validating'
                })
            })
                .then(res => res.json())
                .then(data => {
                })
                .catch(err => console.error(err))

                Swal.fire({
                    position: 'bottom',
                    title: 'Reembolso solicitado',
                    color: '#fff',
                    width: '400px',
                    background: '#008AD4',
                    showConfirmButton: false,
                    timer: 1500
                 })

    }


    function getData(id) {
        fetch('http://localhost:8080/cloth')
            .then(response => response.json())
            .then(data => setClothes(data.data))

        return (
            <div className={styles.downPart}>
                {
                    clothes.map(cloth => {
                        return (
                            cloth.id == id
                                ?
                                <>
                                        <img src={cloth.url} className={styles.imagen} />

                                    <div className={styles.details}>
                                        <h2 className={styles.letter}>{cloth.name}</h2>
                                    </div>

                                </>
                                :
                                <>

                                </>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.contenedorCuadro}>
                <div className={styles.containerLetter}>
                    <h2 className={styles.title}>Compras</h2>
                </div>

                {
                    orders && (

                        orders.length != 0 ?
                        orders.map(order => {
                            return (
                                <div className={styles.cuadro}>
                                    <div className={styles.upPart}>
                                        <h2 className={styles.letterTop}>Estado: {order.statusName}</h2>
                                        <h2 className={styles.letterTop}>Cantidad: {order.quantity}</h2>
                                        <h2 className={styles.letterTop}>Precio total: {order.total}</h2>
                                    </div>
                                    <>
                                        {

                                            getData(order.clothId)
                                            
                                        }
                                        {
                                            order.statusName == 'delivered' ?
                                            <>
                                            <form method='' id='' ref={form} onSubmit={handleSubmit}>
                                            <input onChange={handleChangeStatus} type='hidden' value={order.id} name='id' id='id' />
                                            <button type='submit' className={styles.ButtonForm}  >Reembolso</button>
                                            </form>
                                            </>
                                            
                                            :
                                                null
                                        }
                                    </>
                                </div>

                            );
                        })
                        :
                        <div className={styles.notOrders}>No has realizado compras</div>
                    )

                }
            </div>
        </div>
    );
}

export default Orders;