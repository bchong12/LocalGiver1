import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Button.css";

const Buttons = (props) => {
  return (
    <button onClick={props.function1} className={props.className}>
      {props.text}
    </button>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(withRouter(Buttons));
