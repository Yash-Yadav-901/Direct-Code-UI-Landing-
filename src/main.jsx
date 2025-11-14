import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, createRoutesFromElements,Route} from 'react-router-dom'
import MainLayout from './layout/Mainlayout.jsx'
import Bg from './components/mainElements/Bg.jsx'
import IframeCarousel from './components/mainElements/IframeCarousel.jsx'
import AssambleHome from './components/assambleHome/AssambleHome.jsx'
import ContactForm from './components/OtherComponents/ContactUs.jsx'
import AboutPage from './components/OtherComponents/About.jsx'
import Policy from './components/policys/TermsofService.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<MainLayout/>}>
      <Route path="" element={<AssambleHome/>}/>
      <Route path="contact" element={<ContactForm/>}/>
      <Route path="about" element={<AboutPage/>}/>
      
    </Route>

   
      <Route path="/PrivacyPolicy" element={<Policy/>}/>
 </Route>
  )
)
createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
 
)
