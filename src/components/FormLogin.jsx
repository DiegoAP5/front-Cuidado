import React, { useEffect } from 'react'
import { Outlet, Link, Navigate } from 'react-router-dom'
import { useState, useRef, useContext } from "react"

import Swal from 'sweetalert2'

import styles from "../css/FormLogin.module.css"



function FormLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [authorities, setAuthorities] = useState();
  
  const [data, setData] = useState();

  const login = (e) => {
    e.preventDefault();

    fetch('http://44.215.26.31:8080/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(res => res.json())
      .then(data => {
        setAuthorities(data.authorities)
        setData(data)
      })
      .catch(err => { UserIncorrect() })

  }


  const GetUser = () => {
    fetch(`http://44.213.39.192:8080/user/email/${email}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.data)
      })
  }

  const UserCorrect = () => {
    
    localStorage.setItem("user-info", JSON.stringify(user))

    window.location.reload(true);

    return (
      < Navigate to="/" replace={true} />
    )

  }

  const UserIncorrect = () => {
    Swal.fire({
      position: 'bottom',
      title: 'Usuario incorrecto',
      color: '#fff',
      width: '800px',
      background: '#D0342C',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className={styles.loginContainer}>

      {data &&
        GetUser()}

        {user && UserCorrect()}

      <div className={styles.login}>

        <h2 className={styles.titleLogin}>Login</h2>

        <form className={styles.loginForm} onSubmit={login} >

          <label className={styles.label}>
            <span >E-mail</span>
            <input className={styles.input} type="name" onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label className={styles.label}>
            <span>Password</span>
            <input className={styles.input} type="password" onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <label className={styles.label}>
            <input type="submit" value="Iniciar sesion" />
          </label>

          <Link to="/register" className={styles.register}>
            ¿No tienes una cuenta?, puedes<span>registrarte</span>
          </Link>

        </form>

      </div>

    </div>
  )
}

export default FormLogin