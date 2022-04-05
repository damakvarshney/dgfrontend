import React from 'react'
import "./topbar.css"
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <span className="topbarLanguage">Hindi</span>
                <span className="topbarSlash">/</span>
                <span className="topbarLanguage">English</span>
            </div>
            <div className="topbarRight">
                <span className="topbarRegister">Register</span>
                <span className="topbarSlash">/</span>
                <span className="topbarRegister">Login</span>
            </div>
        </div>
      
    </div>
  )
}
