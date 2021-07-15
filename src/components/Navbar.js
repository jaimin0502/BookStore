import React from 'react'
import {Link} from 'react-router-dom'
import "./css/Navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-ele">
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/cart">Cart</Link>
            </div>
        </div>
    )
}

export default Navbar
