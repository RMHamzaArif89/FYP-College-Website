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
import Sports from './Pages/Sports/Sports';
import History from './Pages/History/History'
import Programs from './Pages/Programs/Programs';
// sub pages of Programs
import BS from './Pages/Programs/BS'
import Inter from './Pages/Programs/Inter';
// import AdmissionProcess from './Pages/AdmissionProcess/AdmissionProcess';
import Contact from './Pages/Contact/Contact'
import ExamNews from './Pages/ExamNews/ExamNews';
import RAI from './Pages/RulesAndInstruction/RAI';
import StudentIns from './Pages/StudentInstructions/StudentIns';
import FeeStructure from './Pages/FeeStructure/FeeStructure';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>


      <Route path="/" index element={<Home />} />
      <Route path='/location' element={<Location />} />
      <Route path='/quickFacts' element={<QuickFacts />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/history' element={<History />} />
      <Route path='/programs' element={<Programs />}>
        <Route path='/programs/'  index element={<BS />}/>
        <Route path='/programs/bs'  index element={<BS />}/>
        <Route path='/programs/inter' element={<Inter />} />
      </Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/examNews' element={<ExamNews/>}/>
      <Route path='/rules' element={<RAI/>}/>
      <Route path='/studentIns' element={<StudentIns/>}/>
      <Route path='/feeStructure' element={<FeeStructure/>}/>
      


    </Route>
      ));

      function App() {
  


  return (
      <>
        <RouterProvider router={router} />
      </>
      )
}

      export default App
