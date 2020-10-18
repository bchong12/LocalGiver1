import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import "./Header.component.css";

class Header extends React.Component {
  componentDidMount() {
    if (this.props.user.username) {
      this.props.history.push("/projects");
    }
  }

  render() {
    return (
      <div className="header">
        <img
          className="logo-img"
          src="https://www.flaticon.com/svg/static/icons/svg/2618/2618489.svg"
          alt="logo"
        />
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="logo">Local Giver</h1>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(withRouter(Header));
