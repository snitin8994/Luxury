import React from "react";
import "./LoginRegisterRedirectBox.css";
import {Link,withRouter} from "react-router-dom"


function LoginRegisterRedirectBox(props) {
  console.log(props)
  return (
    <div className="lr-box">
      <div className="lr-icon-container">
        <img className="lr-icon" src={props.icon} alt={props.person} />
      </div>
      <div className="lr-text-main">
        <Link className="lr-text-link" to={`${props.match.url}/${props.person}/`}>
          {props.heading}
        </Link>
      </div>
    </div>
  );
}

export default withRouter(LoginRegisterRedirectBox);
