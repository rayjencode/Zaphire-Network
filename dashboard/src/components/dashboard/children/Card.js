import React from "react";

const Card = () => {
  return (
    <div className="main-content my-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="dashboard-main__card card my-2">
              <div className="dashboard-main__card-body card-body">
                <p className="dashboard-main__card-body-text">
                  <i className="dashboard-main__card-body-icon-posts ti-pencil-alt" />
                  Referral Bonus
                </p>
                <p className="dashboard-main__card-body-count-posts">3,500</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="dashboard-main__card card my-2">
              <div className="dashboard-main__card-body card-body">
                <p className="dashboard-main__card-body-text">
                  <i className="dashboard-main__card-body-icon-programs ti-video-camera" />
                  Downlines
                </p>
                <p className="dashboard-main__card-body-count-programs">4</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="dashboard-main__card card my-2">
              <div className="dashboard-main__card-body card-body">
                <p className="dashboard-main__card-body-text">
                  <i className="dashboard-main__card-body-icon-events ti-calendar" />
                  Earnings
                </p>
                <p className="dashboard-main__card-body-count-events">
                  425,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
