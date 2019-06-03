import React from "react";
import "./LoginRegisterRedirectWrapper.css";

function LoginRegisterRedirectWrapper(props) {
    return (
      <div className="lr">
        <div className="lr-container">{props.children}</div>
      </div>
    );
}
export default LoginRegisterRedirectWrapper;