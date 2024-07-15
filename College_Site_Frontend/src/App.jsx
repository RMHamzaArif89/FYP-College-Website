import { useState } from 'react'
import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation

} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route element={<Layout/>}>
   
     
        {/* <Route path="/" index element={<Home />} /> */}
 


  </Route>  
));

function App() {
  


  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
