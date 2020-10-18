import React from "react";
import { connect } from "react-redux";
import HeaderDashboard from "../../Component/Header-dashboard/Header-dashboard.component";
import "./Business.component.css";
import { Link } from "react-router-dom";

class BusinessPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <HeaderDashboard />
        <p className="business-page-title">Trending</p>
        <div className="business-page">
          <div className="row-1">
            <Link
              style={{ textDecoration: "none" }}
              to="/business/mySmallBusiness1"
            >
              <div className="business-box">
                <img
                  className="image-box"
                  src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                />
                <p className="subtext-box">Small Business 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/business/mySmallBusiness2"
            >
              <div className="business-box">
                <img
                  className="image-box"
                  src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <p className="subtext-box">Small Business 2</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/business/mySmallBusiness3"
            >
              <div className="business-box">
                <img
                  className="image-box"
                  src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <p className="subtext-box">Small Business 3</p>
              </div>
            </Link>
          </div>
          <div className="row-2">
            <Link
              style={{ textDecoration: "none" }}
              to="/business/mySmallBusiness4"
            >
              <div className="business-box">
                <img
                  className="image-box"
                  src="https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <p className="subtext-box">Small Business 4</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/business/mySmallBusiness5"
            >
              <div className="business-box">
                <img
                  className="image-box"
                  src="https://images.unsplash.com/photo-1597064773469-a816cc299b29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <p className="subtext-box">Small Business 5</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/business/mySmallBusiness6"
            >
              <div className="business-box">
                <img
                  className="image-box"
                  src="https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <p className="subtext-box">Small Business 6</p>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(BusinessPage);
