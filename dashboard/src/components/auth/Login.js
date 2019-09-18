import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if login
  if (isAuthenticated) {
    return <Redirect to="/app/dashboard" />;
  }
  return (
    <Fragment>
      <div className="login-form-bg h-100 mt-5">
        <div className="container h-100">
          <div className="row justify-content-center h-100">
            <div className="col-xl-6">
              <div className="form-input-content">
                <div className="card login-form mb-0">
                  <div className="card-body pt-5">
                    <h4>Membership Login</h4>

                    <form
                      className="mt-5 mb-5 login-input"
                      onSubmit={e => onSubmit(e)}
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={e => onChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={e => onChange(e)}
                        />
                      </div>

                      <button className="btn login-form__btn submit w-100">
                        Sign In
                      </button>
                    </form>
                    <p className="mt-5 login-form__footer">
                      Dont have account?
                      <Link to="/register" className="text-primary">
                        Sign Up
                      </Link>
                      now
                    </p>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
