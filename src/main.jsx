import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx/'
import Footer from './Footer.jsx/'
import MainWrapper from './MainWrapper.jsx/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <MainWrapper/>
    <Footer/>
  </StrictMode>,
)
