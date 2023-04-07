import React from 'react'
import NavbarForm from '../components/NavbarForm'
import FormRegister from '../components/FormRegister'
import Footer from '../components/Footer'

function Register() {
  return (
    <div className='register'>
        <NavbarForm/>
        <FormRegister/>
        <Footer/>
    </div>
  )
}

export default Register;