import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation

} from "react-router-dom";


import Layout from './Pages/Layout/Layout.jsx';
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
import Socities from './Pages/Socities/Socities';
import AdmissionProcess from './Pages/AdmissionProcess/AdmissionProcess';
import EventsPage from './Pages/EventsPage/EventsPage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import Admission from './Pages/Admission/Admission';
import Noticeboard from './Pages/Noticeboard/Noticeboard.jsx';
import Careers from './Pages/Careers/Careers'


//admin pages
import AdminLayout from './Pages/Layout/AdminLayout.jsx'
import AdminPage from './Pages/AdminPage/AdminPage';
import AdminEventPage from './Pages/AdminPage/AdminEventPage/AdminEventPage';
import AdminExamNewsPage from './Pages/AdminPage/AdminExamNews/AdminExamNewsPage';
import AdminNoticePage from './Pages/AdminPage/AdminNoticePage/AdminNoticePage';
import AdminSportsNewsPage from './Pages/AdminPage/AdminSportsPage/AdminSportsPage';
import AdminHomeSliderPage from './Pages/AdminPage/AdminHomeSliderPage/AdminHomeSliderPage';
import AdminContactPage from './Pages/AdminPage/AdminUserContact/AdminContactPage.jsx'
import AdminCareersPage from './Pages/AdminPage/AdminCareersPage/AdminCareersPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path='/location' element={<Location />} />
        <Route path='/quickFacts' element={<QuickFacts />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/history' element={<History />} />
        <Route path='/programs' element={<Programs />}>
          <Route path='/programs/' index element={<BS />} />
          <Route path='/programs/bs' index element={<BS />} />
          <Route path='/programs/inter' element={<Inter />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/examNews' element={<ExamNews />} />
        <Route path='/rules' element={<RAI />} />
        <Route path='/studentIns' element={<StudentIns />} />
        <Route path='/feeStructure' element={<FeeStructure />} />
        <Route path='/socities' element={<Socities />} />
        <Route path='/admissionProcess' element={<AdmissionProcess />} />
        <Route path='/eventsPage' element={<EventsPage />} />
        <Route path='/GalleryPage' element={<GalleryPage />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/noticeboard' element={<Noticeboard />} />
        <Route path='/careers' element={<Careers />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path='/adminPage' element={<AdminPage />} />
        <Route path='/adminEventPage' element={<AdminEventPage />} />
        <Route path='/adminExamNewsPage' element={<AdminExamNewsPage />} />
        <Route path='/adminNoticePage' element={<AdminNoticePage />} />
        <Route path='/adminSportsNewsPage' element={<AdminSportsNewsPage />} />
        <Route path='/adminHomeSliderPage' element={<AdminHomeSliderPage />} />
        <Route path='/adminContactPage' element={<AdminContactPage />} />
        <Route path='/adminCareersPage' element={<AdminCareersPage />} />

      </Route>

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
