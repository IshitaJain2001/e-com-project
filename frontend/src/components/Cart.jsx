import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/cart/get", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.cart) dispatch({ type: "set-cart", payload: data.cart });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [dispatch]);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.products.length > 0 ? (
        cart.products.map((p, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              marginBottom: 10,
              padding: 10,
              borderRadius: 8,
            }}
          >
            <h3>{p.item.productName}</h3>
            <p>Price: ₹{p.price}</p>
            <p>Qty: {p.qty}</p>
            <p>Subtotal: ₹{p.price * (p.qty || 1)}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total Price: ₹{cart.totalPrice}</h3>
      <h3>Total Shipping: ₹{cart.totalShipping}</h3>
      <h2>Total: ₹{cart.totalPrice + cart.totalShipping}</h2>
    </div>
  );
}
