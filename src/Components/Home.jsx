import React from 'react'
import Header from './Header/Header'
import Restaurants from './Restaurants'
import Foods from './Foods'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar + Hero */}
      <Header />
      <Outlet/>
    </div>
  )
}