import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  const color1 = "to right bottom, rgba(44, 62, 80, 0.9)";
  const color2 = "rgba(76, 161, 175, 0.2)";
  const str = "linear-gradient(" + color1 + "," + color2 + "),";

  const sectionStyle = {
    height: "91vh",
    // backgroundImage: `${str} url(${background})`
    backgroundImage: str + "url(" + require("../../img/bg-5.jpg") + ")"
  };

  if (isAuthenticated) {
    return <Redirect to="/app/dashboard" />;
  }

  return (
    <Fragment>
      <div className="hero" style={sectionStyle}>
        <div className="container">
          <div className="row">
            <div className="hero-content">
              <div className=" hero-content__col">
                <div className="hero-content__heading">
                  <h1 className="hero-content__heading-head text-capitalize text-white">
                    Are You Ready to Unlock the Door to
                    <strong> Lifelong Financial Confidence?</strong>
                  </h1>

                  <div className="hero-content__cta">
                    <button className="ml-auto btn btn-primary text-uppercase text-white">
                      join us Now &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Landing);
