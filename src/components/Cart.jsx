import React, { useState } from "react";
import "../styles/Cart.css";
import cartIcon from "../assets/cart.svg";
import productsData from "../data/Products";

const Cart = () => {
  const [cartItems, setCartItems] = useState(productsData);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartCount = cartItems.length;

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        {/* Breadcrumb */}
        <p className="breadcrumb">Your Account &gt; Cart</p>

        {/* Cart Header */}
        <div className="cart-header">
          <h2>Cart</h2>
          <div className="cart-icon-badge">
            <img src={cartIcon} alt="cart" className="cart-icon" />
            <span className="badge">{cartCount}</span>
          </div>
        </div>
        <p className="cart-subtext">
          Check your cart items before proceeding to payment
        </p>

        {/* Product List */}
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-left">
                <img src={item.img} alt={item.name} className="cproduct-img" />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="desc">{item.desc}</p>
                  <p className="price">₹ {item.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="item-right">
                <p className="qty-label">Quantity</p>

                {/* controls row with qty box + delete button inline */}
                <div className="controls-row">
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                    aria-label={`Delete ${item.name}`}
                  >
                    🗑
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="cart-total">
          <div className="total-line">
            <span className="total-text">Total:</span>
            <span className="total-price">₹ {total.toLocaleString()}</span>
          </div>
          <p className="tax-text">
            Inclusive of all taxes (Also includes all applicable duties)
          </p>
        </div>

        {/* Button */}
        <button className="proceed-btn">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default Cart;
