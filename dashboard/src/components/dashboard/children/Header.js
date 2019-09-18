import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="dashboard-top-nav">
        <div className="container-fluid dashboard-top-nav__wrapper">
          <div className="dashboard-top-nav__search">
            <form action="action_page.php">
              <div className="dashboard-top-nav__search-form d-flex justify-content-between align-items-center">
                <input type="text" placeholder="Search.." name="search" />
                <i className="ti-search"></i>
              </div>
            </form>
          </div>
          <div className="dashboard-top-nav__account">
            <p>
              <span className="dashboard-top-nav__account-name mr-2">
                Welcome
              </span>

              <img src={require("../../../img/avatar.png")} alt="user photo" />
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
