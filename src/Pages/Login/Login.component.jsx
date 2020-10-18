import React from "react";
import Buttons from "../../Component/Buttons/Button";
import axios from "axios";
import Header from "../../Component/Header/Header.component";
import { getUser } from "../../Redux/reducers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Login.component.css";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    if (this.props.user.username) {
      this.props.history.push("/projects");
    }
  }

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

  loginUser = () => {
    axios
      .post("https://ancient-woodland-39807.herokuapp.com/auth/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        this.props.getUser(res.data);
        if (res.data.user_id) {
          this.props.history.push("/projects");
        }
      })
      .catch((err) => alert("Login Failed"));
  };

  render() {
    return (
      <>
        <Header />
        <div className="login-page">
          <div className="input-box">
            <p className="login-title">Login</p>
            <div className="line" />
            <input
              onChange={this.setUsername}
              placeholder="Username"
              className="login-input"
            />
            <input
              onChange={this.setPassword}
              placeholder="Password"
              type="password"
              className="login-input"
            />
            <Buttons
              function1={this.loginUser}
              className="button login auth"
              text="Sign In"
            />
            <button className="login-forgot">Forgot Password</button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(withRouter(Login));
