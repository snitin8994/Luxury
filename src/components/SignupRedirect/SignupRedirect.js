import React from "react";
import LoginRegisterRedirectWrapper from "../LoginRedirect/LoginRegisterRedirectWrapper";
import LoginRegisterRedirectBox from "../LoginRedirect/LoginRegisterRedirectBox";
import Header from "../header/Header";
import riderSvg from "../../img/user-regular.svg";
import driverSvg from "../../img/car-solid.svg";

function SignupRedirect(props) {
  return (
    <>
      <Header />
      <LoginRegisterRedirectWrapper>
        <LoginRegisterRedirectBox
          icon={riderSvg}
          heading="Sign up to ride"
          person="rider"
          type="signup"
        />
        <LoginRegisterRedirectBox
          icon={driverSvg}
          heading="Sign up to drive"
          person="driver"
          type="signup"
        />
      </LoginRegisterRedirectWrapper>
    </>
  );
}

export default SignupRedirect;
