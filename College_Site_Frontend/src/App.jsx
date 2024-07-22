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


import Layout from './Pages/Layout.jsx';
import Home from './Pages/Home/Home';
import Location from './Pages/Location/Location';
import QuickFacts from './Pages/QuickFacts/QuickFacts';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route element={<Layout/>}>
   
     
        <Route path="/" index element={<Home />} />
        <Route path='/location' element={<Location/>}/>
        <Route path='/quickFacts' element={<QuickFacts/>} />


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
