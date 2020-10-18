import React from "react";
import Buttons from "../../Component/Buttons/Button";
import "./Register.component.css";
import Header from "../../Component/Header/Header.component";
import { getUser } from "../../Redux/reducers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  }

  registerUser = () => {
    axios
      .post("https://ancient-woodland-39807.herokuapp.com/auth/register", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        this.props.getUser(res.data);
        if (res.data.username) {
          this.props.history.push("/projects");
        }
      })
      .catch((err) =>
        alert("Username already exists or Username and Password do not match")
      );
  };

  setUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  setPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  setFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  setLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="register-page">
          <div className="register-page">
            <div className="register-box">
              <p className="register-title">Register</p>
              <div className="register-line" />
              <div className="register-name">
                <input
                  onChange={this.setFirstName}
                  placeholder="First Name"
                  className="register-input small"
                />
                <input
                  onChange={this.setLastName}
                  placeholder="Last Name"
                  className="register-input small"
                />
              </div>
              <input
                onChange={this.setUsername}
                placeholder="Username"
                className="register-input"
              />
              <input
                onChange={this.setPassword}
                placeholder="Password"
                type="password"
                className="register-input"
              />
              <Buttons
                function1={this.registerUser}
                className="button login auth"
                text="Register"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(withRouter(Register));
