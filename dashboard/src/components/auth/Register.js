import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    securityCode: ""
  });
  const { name, email, password, password2, securityCode } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password, securityCode });
    }
  };

  // Redirect to Dashboard
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
                    <h4>Register Membership</h4>

                    <form
                      className="mt-5 mb-5 login-input"
                      onSubmit={e => onSubmit(e)}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          name="name"
                          value={name}
                          onChange={e => onChange(e)}
                        />
                      </div>
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
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Passowrd"
                          name="password2"
                          value={password2}
                          onChange={e => onChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Security Code"
                          name="securityCode"
                          value={securityCode}
                          onChange={e => onChange(e)}
                        />
                      </div>
                      <button className="btn login-form__btn submit w-100">
                        Sign in
                      </button>
                    </form>
                    <p className="mt-5 login-form__footer">
                      Have account
                      <Link to="/login" className="text-primary">
                        Sign in
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
