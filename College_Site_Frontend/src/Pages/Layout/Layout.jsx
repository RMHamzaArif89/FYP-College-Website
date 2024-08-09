import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'


function Layout() {
  return (
 <>
<Nav/>
 <Outlet/>
 <Footer/>
 </>
  )
}

export default Layout
