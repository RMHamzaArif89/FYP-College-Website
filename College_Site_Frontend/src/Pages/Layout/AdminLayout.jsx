import React from 'react'
import {Outlet} from 'react-router-dom'
import SideBarAdmin from '../../Components/sideBarAdmin/sideBarAdmin'
import TopBarAdmin from '../../Components/TopBarAdmin/TopBarAdmin'


function AdminLayout() {
  return (
 <>
 <TopBarAdmin/>
<div className="adminContainer">
<SideBarAdmin/>

<Outlet/>

</div>

 </>
  )
}

export default AdminLayout
