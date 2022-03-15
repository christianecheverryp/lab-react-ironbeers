import React from 'react'
import { Link } from 'react-router-dom'
import header from "../assets/header.png"

function Navbar() {
  return (
    <div>

        <Link to="/" >
        <nav>
            <img src={header} alt="home" style={{ width: "30%", marginBottom: "20px" }} />
      </nav>


        </Link>

    </div>
  )
}

export default Navbar