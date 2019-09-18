import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile } from "../../actions/userProfile";

import Header from "./children/Header";
import SideNav from "./children/SideNav";
import Card from "./children/Card";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  userProfile: { userProfile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  console.log(userProfile);
  return loading && userProfile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <SideNav />
          <main className="dashboard-main">
            <Header />
            <Card />
          </main>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  userProfile: state.userProfile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
