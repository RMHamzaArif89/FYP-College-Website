import React from 'react'
import {Outlet} from 'react-router-dom'
import SideBarAdmin from '../../Components/sideBarAdmin/sideBarAdmin'


function AdminLayout() {
  return (
 <>
<SideBarAdmin/>
 <Outlet/>

 </>
  )
}

export default AdminLayout
