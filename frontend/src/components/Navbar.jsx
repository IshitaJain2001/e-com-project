import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import "../stylesheets/Navbar.css"
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="left">
            <p>Shop Here</p>
        </div>
        <div className="center">
            <button>Shop</button>
            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>
        </div>
        <div className="right">
            <button><TiShoppingCart /></button>
            <button><CgProfile /></button>
        </div>
    </div>
  )
}
