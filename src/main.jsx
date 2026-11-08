import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import Tapu from './Tapu.jsx'
//import Somu from'./Somu.jsx'
//import {Riteeka,Somu,Tapu,Kriti} from'./Riteeka.jsx'
import {Profile,Navbar,Footer} from './Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Profile />
    <Footer />
  </StrictMode>,
)
