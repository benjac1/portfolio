import { useState } from 'react'
import './Header.css'

function Header(){
  return (
    <>
      <header className="header">
        <div>
          <a href="index.html">BenjaCDev</a>
          <div className="nav">
              <a href="service.html">Servicios</a>
          </div>
          <label htmlFor="burger-menu" className="burger-menu">
              <div></div>
              <div></div>
              <div></div>
          </label>
          <input type="checkbox" id="burger-menu"/>
        </div>
      </header>
    </>
  )
}

export default Header
