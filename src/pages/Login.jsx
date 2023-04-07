import React from 'react'
import NavbarForm from '../components/NavbarForm'
import FormLogin from '../components/FormLogin'
import Footer from '../components/Footer'


function Login() {
  return (
    <div className='login'>
        <NavbarForm />
        <FormLogin />
        <Footer />
    </div>
  )
}

export default Login