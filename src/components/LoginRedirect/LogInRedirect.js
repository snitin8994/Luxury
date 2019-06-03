import React from "react";
import LoginRegisterRedirectWrapper from "./LoginRegisterRedirectWrapper"
import LoginRegisterRedirectBox from "./LoginRegisterRedirectBox";
import Header from "../header/Header"
import riderSvg from "../../img/user-regular.svg";
import driverSvg from "../../img/car-solid.svg";

function LoginRedirect(props) {
    return (
      <>
        <Header />
        <LoginRegisterRedirectWrapper>
          <LoginRegisterRedirectBox
            icon={riderSvg}
            heading="Rider Login"
            person="rider"
            type="login"
          />
          <LoginRegisterRedirectBox
            icon={driverSvg}
            heading="Driver Login"
            person="driver"
            type="login"
          />
        </LoginRegisterRedirectWrapper>
      </>
    );
}

export default LoginRedirect;