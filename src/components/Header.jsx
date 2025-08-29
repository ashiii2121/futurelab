import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import LoginSidebar from "./LoginSidebar";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  // Cart count effect
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className="d-none d-md-block">
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12 col-12">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo/ft-logo.svg`}
                  alt="FutureLabs"
                  className="logo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/images/logo/favicon.jpg`;
                  }}
                  style={{ maxHeight: "70px", width: "auto" }}
                />
              </Link>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12 col-12 py-lg-3 py-md-2">
              <SearchComponent />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-end pt-lg-3 pt-md-3 pt-sm-2 pt-2">
              {/* Cart button */}
              <Link
                to="/cart"
                className="cart cart-button"
                id="cart-button-desktop"
                style={{ display: cartCount > 0 ? "inline-block" : "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon-svg/cart.svg`}
                  className="offers"
                  alt="Cart"
                />
                <span className="cart-badge" id="cart-badge-desktop">
                  {cartCount}
                </span>
              </Link>

              {/* Login button - Desktop */}
              <button
                className="login-button text-center d-none d-md-inline-block"
                id="login-button-desktop"
                data-bs-toggle="collapse"
                data-bs-target="#sidebar"
                aria-expanded="false"
                aria-controls="sidebar"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon-svg/login.svg`}
                  className="login-icon"
                  alt="Login"
                />
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="logo-container d-block d-md-none">
        <div className="container-fluid">
          <div className="row p-1">
            <div className="col-6 p-0">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo/ft-logo.svg`}
                  alt="FutureLabs"
                  className="logo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/images/logo/favicon.jpg`;
                  }}
                  style={{ maxHeight: "60px", width: "auto" }}
                />
              </Link>
            </div>
            <div className="col-6 text-end p-2">
              <Link
                to="/cart"
                className="cart cart-button"
                id="cart-button-mobile"
                style={{ display: cartCount > 0 ? "inline-block" : "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon-svg/cart.svg`}
                  className="offers"
                  alt="Cart"
                />
                <span className="cart-badge" id="cart-badge-mobile">
                  {cartCount}
                </span>
              </Link>

              <button
                className="login-button text-center d-md-none"
                id="login-button-mobile"
                data-bs-toggle="collapse"
                data-bs-target="#sidebar"
                aria-expanded="false"
                aria-controls="sidebar"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon-svg/login.svg`}
                  className="login-icon"
                  alt="Login"
                />
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Container - Second Navbar */}
      <div className="search-container container-fluid d-block d-md-none">
        <SearchComponent isMobile={true} />
      </div>

      {/* Login Sidebar */}
      <LoginSidebar />
    </>
  );
};

export default Header;
