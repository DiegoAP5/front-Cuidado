import '../css/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Order from '../pages/Order';
import Logout from '../pages/Logout';
import ProtectedRoute from '../components/ProtectedRoute'
import NotFound from '../pages/NotFound';
import Buying from '../pages/Buying';
import ProductClothes from '../pages/ProductClothes';
import VistaLibro from '../components/ViewClothes';



function App() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));
  
    
  
  
    return (
  
  
      <div className="App">
        <BrowserRouter >
          <Routes>
            <Route path='/register' element={<ProtectedRoute isAllowed={user == null ? true : false} />}>
              <Route path='/register' element={<Register />} />
            </Route>
  
            <Route path='/login' element={<ProtectedRoute isAllowed={user == null ? true : false} />}>
              <Route path='/login' element={<Login />} />
            </Route>
  
            <Route path='/' element={<Navigate to="/home" replace={true} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cloth' element={<ProductClothes />} />
        
            <Route path='/order' element={<ProtectedRoute isAllowed={user != null ? true : false} />}>
              <Route path='/order' element={<Order />} />
            </Route>
  
            <Route path='/cart' element={<ProtectedRoute isAllowed={user != null ? true : false} />}>
              <Route path='/cart' element={<Cart />} />
            </Route>
  
            <Route path='/buying' element={<ProtectedRoute redirectTo='/login' isAllowed={user != null ? true : false} />} >
              <Route path='/buying' element={<Buying />} />
            </Route>
  
  
  
            <Route path='/logout' element={<ProtectedRoute isAllowed={user != null ? true : false} />}>
              <Route path='/logout' element={<Logout />} />
            </Route>

            <Route path='/vista' element={<VistaLibro/>}/>
  
            <Route path='/*' element={<NotFound />} />
  
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default App;