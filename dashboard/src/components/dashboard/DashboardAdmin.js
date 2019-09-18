import React, { Fragment, useEffect } from "react";
import SideNav from "./children/SideNav";
import Header from "./children/Header";
import Generate from "../generate/Generate";
import ActivationTable from "../generate/children/ActivationTable";
import { connect } from "react-redux";
import { getActivations } from "../../actions/generate";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const DashboardAdmin = ({
  getActivations,
  activation: { activations, loading },
  auth: { user }
}) => {
  useEffect(() => {
    getActivations();
  }, [getActivations]);

  console.log(activations);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {activations.map(activation => (
        <ActivationTable key={activation._id} activation={activation} />
      ))}
    </Fragment>
  );

  // return (
  //   <Fragment>
  //     <div className="dashboard-container">
  //       <div className="dashboard-content">
  //         <SideNav />
  //         <main className="dashboard-main">
  //           <Header />
  //           <div className="my-5">
  //             <Generate />

  //             {/* {activations !== null ? (
  //               <ActivationTable activation={activations} />
  //             ) : null} */}
  //           </div>
  //         </main>
  //       </div>
  //     </div>
  //   </Fragment>
  // );
};

DashboardAdmin.propTypes = {
  auth: PropTypes.object.isRequired,
  getActivations: PropTypes.func.isRequired,
  activation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  activation: state.activation
});

export default connect(
  mapStateToProps,
  { getActivations }
)(DashboardAdmin);
