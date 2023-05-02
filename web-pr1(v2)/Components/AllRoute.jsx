import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Details from './Details'
import Collection from './Collection'
import Sale from './Sale'
import Singup from './Singup'
import Login from './Login'
import Cart from './Cart'

function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AllRoute
