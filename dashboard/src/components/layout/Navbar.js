import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="top-navbar">
        <div className="container">
          <div className="">
            <div className="top-navbar__content d-flex justify-content-between">
              <div className="top-navbar__content--social">
                <p className="top-navbar__content--social-follow text-uppercase">
                  Follow us
                </p>
                <a className="top-navbar__content--social-link" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="top-navbar__content--social-link" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="top-navbar__content--social-link" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <p className="top-navbar__content--social-address">
                  <i className="ti-location-pin mr-3"></i>
                  021 Apple St. General Santos City
                </p>
              </div>
              <div className="top-navbar__content--search">
                <a href="">
                  Search
                  <i className="ml-3 ti-search"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-md nav-menu">
        <div className="container">
          <a className="navbar-brand nav-menu__brand" href="#">
            {/* <img src="img/hope-logo.png" alt="Zaphire Network" />  */}
            <h2>
              <strong>ZAPHIRE</strong>
            </h2>
          </a>

          <input
            type="checkbox"
            className="nav-menu__checkbox"
            id="nav-menu-toggle"
          />
          <label
            for="nav-menu-toggle"
            className="navbar-toggler nav-menu__toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="nav-menu__icon">&nbsp;</span>
          </label>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-menu__list ml-auto">
              <li className="nav-item nav-menu__item">
                <a
                  className=" nav-menu__link text-default text-uppercase"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item nav-menu__item">
                <a
                  className=" nav-menu__link text-default text-uppercase"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item nav-menu__item">
                <a
                  className=" nav-menu__link text-default text-uppercase"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item nav-menu__item">
                <Link
                  className=" nav-menu__link text-default text-uppercase"
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item nav-menu__item">
                <Link
                  className=" nav-menu__link text-default text-uppercase"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
