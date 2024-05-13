import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index.js'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout