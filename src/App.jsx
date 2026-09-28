import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Restaurants from './Components/Restaurants'
import Foods from './Components/Foods'
import Contact from './Components/Contact'
import About from './Components/About'
import { Provider } from 'react-redux'
import store from './Components/Redux/store'
import { CartProvider } from './Components/CartContext'
import Hero from './Components/Main/Hero'


function App() {


  return (
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='' element={<Hero />} />
              <Route path='restaurants' element={<Restaurants />} />
              <Route path='foods' element={<Foods />} />
              <Route path='contact' element={<Contact />} />
              <Route path='about' element={<About />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>
    </CartProvider>



  )
}

export default App;
