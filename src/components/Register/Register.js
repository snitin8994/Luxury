import React from "react";
import LogoHeader from "../logoHeader/LogoHeader";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import "../Login/Login.css";
import InputLabelError from "../inputLabelError/InputLabelError";

function Register() {
  return (
    <>
      <LogoHeader />
      <div className="form-box">
        <div className="form-inner-box">
          <p className="form-title">Register</p>
          <Formik
            validationSchema={Yup.object().shape({
              phone: Yup.string()
                .matches(
                  /^\+91[1-9]\d{9}$/,
                  "A valid number starts with +91 and has exactly 10 numbers after that"
                )
                .required("Number required"),
              password: Yup.string()
                .min(8, "Password is too small")
                .max(13)
                .required("Password required"),
              email: Yup.string()
                .email("Email must be a valid one")
                .required("Email required"),
              name: Yup.string().required("Name required")
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            initialValues={{ phone: "+91", password: "",name:"",email:"" }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <InputLabelError
                    inputName="name"
                    inputType="text"
                    inputLabel="Name"
                  />
                  <InputLabelError
                    inputName="phone"
                    inputType="text"
                    inputLabel="Phone"
                  />
                  <InputLabelError
                    inputName="email"
                    inputType="email"
                    inputLabel="Email"
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

export default Register;
