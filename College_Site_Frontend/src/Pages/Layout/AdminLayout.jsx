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
<div className="adminPage">
<Outlet/>
</div>
</div>

 </>
  )
}

export default AdminLayout
