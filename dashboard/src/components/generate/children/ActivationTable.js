import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";

const ActivationTable = ({ auth, activation: { _id, securityCode } }) => {
  return (
    <div>
      <p>test activation</p>
    </div>
  );
};

ActivationTable.propTypes = {
  activation: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(ActivationTable);
