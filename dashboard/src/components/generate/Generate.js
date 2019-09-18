import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createActivation } from "../../actions/generate";

import ActivationTable from "./children/ActivationTable";

import Spinner from "../layout/Spinner";

const Generate = ({ createActivation }) => {
  const [formData, setFormData] = useState({
    investment: ""
  });

  const { investment } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createActivation(formData);
  };
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <div className="card-title">Create Activation Code</div>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label
                  className="sr-only"
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Input Amount
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">₱</div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Input Amount"
                    name="investment"
                    value={investment}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>

              <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">
                  Generate Activation
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Generate.propTypes = {
  createActivation: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createActivation }
)(Generate);
