import React from "react";
import LogoHeader from "../logoHeader/LogoHeader"
import InputLabelError from "../inputLabelError/InputLabelError"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

function Login() {
  return (
    <>
    <LogoHeader/>
      <div className="form-box">
        <div className="form-inner-box">
          <p className="form-title">Sign in</p>
          <Formik
            validationSchema={Yup.object().shape({
              phone: Yup.string()
                .matches(
                  /^\+91[1-9]\d{9}$/,
                  "A valid number starts with +91 and has exactly 10 digits after that"
                )
                .required("Number required"),
              password: Yup.string()
                .required("Password required")
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            initialValues={{ phone: "+91", password: "" }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <InputLabelError
                    inputName="phone"
                    inputType="text"
                    inputLabel="Phone"
                  />
                  <InputLabelError
                    inputName="password"
                    inputType="password"
                    inputLabel="Password"
                  />

                  <button
                    type="submit"
                    className="form-submit-button"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
export default Login;
