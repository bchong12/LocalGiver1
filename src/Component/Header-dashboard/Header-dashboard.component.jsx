import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import "./Header-dashboard.component.css";

class HeaderDashboard extends React.Component {
  componentDidMount() {
    // if (!this.props.user.user_id) {
    //   this.props.history.push("/");
    // }
  }
  render() {
    return (
      <div className="header-dashboard">
        <div className="left-header">
          <img
            className="logo-img"
            src="https://www.flaticon.com/svg/static/icons/svg/2618/2618489.svg"
            alt="logo"
          />
          <Link style={{ textDecoration: "none" }} to="/projects">
            <h1 className="logo">Local Giver</h1>
          </Link>
        </div>
        <div className="right-header">
          <Link to="/cart">
            <img
              className="logo-img cart"
              src="https://www.pinclipart.com/picdir/middle/103-1034765_drawn-cart-svg-cart-icon-mobile-png-clipart.png"
              alt="cart-logo"
            />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <p className="header-name">{this.props.user.first_name}</p>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(withRouter(HeaderDashboard));
