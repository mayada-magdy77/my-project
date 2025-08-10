import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

export default function Layout() {
  return <>
  <NavBar/>
  <Outlet/>
  <Footer/>
  </>
}

