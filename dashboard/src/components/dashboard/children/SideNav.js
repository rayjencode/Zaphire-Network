import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <Fragment>
      <nav className="dashboard-sidebar">
        <div>
          <header className="dashboard-header ml-4">
            <h2>
              <strong>ZAPHIRE</strong>{" "}
            </h2>
          </header>
          <div className="dashboard-sidebar__nav">
            <div className="dashboard-sidebar__item ">
              <NavLink
                to="/app/dashboard"
                className="dashboard-sidebar__link"
                activeClassName="dashboard-sidebar__link--active"
              >
                <i className="dashboard-sidebar__icon ti-dashboard" /> Overview
              </NavLink>
            </div>
            <div className="dashboard-sidebar__item">
              <NavLink
                to="/app/dashboard-admin"
                className="dashboard-sidebar__link"
                activeClassName="dashboard-sidebar__link--active"
              >
                <i className="dashboard-sidebar__icon ti-pencil-alt"></i>
                Administrator
              </NavLink>
            </div>
            <div className="dashboard-sidebar__item">
              <a
                href="/dashboard-programs.html"
                className="dashboard-sidebar__link"
              >
                <i className="dashboard-sidebar__icon ti-video-camera"></i>
                Add Acount
              </a>
            </div>
            <div className="dashboard-sidebar__item">
              <a href="#" className="dashboard-sidebar__link">
                <i className="dashboard-sidebar__icon ti-calendar"></i>Add
                Downline
              </a>
            </div>
            <div className="dashboard-sidebar__item">
              <a href="#" className="dashboard-sidebar__link">
                <i className="dashboard-sidebar__icon ti-email"></i> Encashment
              </a>
            </div>
            <div className="dashboard-sidebar__item">
              <a
                href="/dashboard-settings.html"
                className="dashboard-sidebar__link"
              >
                <i className="dashboard-sidebar__icon ti-settings"></i>
                Logout
              </a>
            </div>
          </div>
        </div>
        <p className="dashboard-sidebar__copyright text-capitalize py-2">
          &copy; copyrights 2019 Zaphire Network
        </p>
      </nav>
    </Fragment>
  );
};

export default SideNav;
