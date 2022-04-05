import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <div className="navbar"> 

      <div className="navbarWrapper">
      
      <div className="navbarWrapperLeft">
      <span className="navbarLogo">DeshGrehni</span>
      </div>

      <div className="navbarWrapperRight">
          <ul className="menubarList">
         <li className="menubarListItem">Home</li>
         <li className="menubarListItem">Video Section</li>
         <li className="menubarListItem">Chat </li>
         <li className="menubarListItem">Constest</li>
         <li className="menubarListItem">Inspiring feed</li>
          </ul>
      </div>
      </div>
    </div>
  )
}
