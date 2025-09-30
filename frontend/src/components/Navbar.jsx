import React, { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:3000/cart/get", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.cart) {
          const count = data.cart.products.reduce((sum, p) => sum + (p.qty || 1), 0);
          setCartCount(count);
        }
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };
    fetchCart();
  }, []);

  return (
    <div className='navbar-container'>
      <div className="left"><p>Shop Here</p></div>
      <div className="center">
        <Link to="/shop"><button className={location.pathname==="/shop"?"active":""}>Shop</button></Link>
        <Link to="/shop/men"><button className={location.pathname==="/shop/men"?"active":""}>Men</button></Link>
        <Link to="/shop/women"><button className={location.pathname==="/shop/women"?"active":""}>Women</button></Link>
        <Link to="/shop/kids"><button className={location.pathname==="/shop/kids"?"active":""}>Kids</button></Link>
      </div>
      <div className="right">
        <Link to="/cart"><button className={location.pathname==="/cart"?"active":""}><TiShoppingCart /><sup>{cartCount}</sup></button></Link>
        <Link to="/profile"><button className={location.pathname==="/profile"?"active":""}><CgProfile /></button></Link>
      </div>
    </div>
  );
}
