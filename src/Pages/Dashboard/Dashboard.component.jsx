import React from "react";
import { connect } from "react-redux";
import HeaderDashboard from "../../Component/Header-dashboard/Header-dashboard.component";
import { getBusiness } from "../../Redux/reducers";
import { Link } from "react-router-dom";
import "./Dashboard.component.css";
import axios from "axios";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <HeaderDashboard />
        <div className="dashboard-page">
          <div className="dashboard-box">
            <p className="dashboard-title">My Business</p>
            <Link to="/business/mySmallBusiness1">
              <div className="my-small-business">
                <p className="small-business-title">Small Business 1</p>
                <img
                  className="my-small-business-img"
                  src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                />
              </div>
            </Link>
          </div>
          <div className="dashboard-box">
            <p className="dashboard-title">My Transactions</p>
            <div className="big-deals">
              <div className="deal-number">
                <p>Small Business 2</p>
                <p className="business-price">$35</p>
              </div>
              <div className="deal-number">
                <p>Small Business 3</p>
                <p className="business-price">$55</p>
              </div>
              <div className="deal-number">
                <p>Small Business 4</p>
                <p className="business-price">$25</p>
              </div>
              <div className="deal-number">
                <p>Small Business 5</p>
                <p className="business-price">$35</p>
              </div>
              <div className="deal-number">
                <p>Small Business 6</p>
                <p className="business-price">$55</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getBusiness })(Dashboard);
