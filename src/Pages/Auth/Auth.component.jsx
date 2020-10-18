import React from "react";
import "./Auth.component.css";
import Buttons from "../../Component/Buttons/Button";
import Header from "../../Component/Header/Header.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Auth extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    if (this.props.user.user_id) {
      this.props.history.push("/projects");
    }
  }

  render() {
    return (
      <div className="auth-page">
        <Header />
        <div className="content">
          <div className="overlay" />
          <img
            className="background-img"
            src="https://images.unsplash.com/photo-1594392175511-30eca83d51c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Background homepage picture"
          />
          <p className="challenge-text">Let's Give Back</p>
          <div className="auth-buttons">
            <Link to="/login">
              <Buttons className="button login" text="Login" />
            </Link>
            <Link to="/register">
              <Buttons className="button register" text="Register" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(withRouter(Auth));
