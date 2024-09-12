import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import SideBarAdmin from '../../Components/sideBarAdmin/sideBarAdmin'
import TopBarAdmin from '../../Components/TopBarAdmin/TopBarAdmin'
import { useContext } from 'react'
import adminContext from '../../contextApi/AdminContext.jsx'


function AdminLayout() {
  const {showSideBar}=useContext(adminContext)
  
  return (
 <>
  <TopBarAdmin/>

<div className="adminContainer">
{
  showSideBar&& <SideBarAdmin/>
 }
<Outlet/>

</div>

 </>
  )
}

export default AdminLayout
