import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, createRoutesFromElements,Route} from 'react-router-dom'
import MainLayout from './layout/Mainlayout.jsx'
import Bg from './components/mainElements/Bg.jsx'
import IframeCarousel from './components/mainElements/IframeCarousel.jsx'
import AssambleHome from './components/assambleHome/AssambleHome.jsx'
import ContactForm from './components/OtherComponents/ContactUs.jsx'
import AboutPage from './components/OtherComponents/About.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route path="" element={<AssambleHome/>}/>
      <Route path="contact" element={<ContactForm/>}/>
      <Route path="about" element={<AboutPage/>}/>
    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
 
)
