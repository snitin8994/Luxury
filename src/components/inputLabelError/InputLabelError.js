import React from "react";
import {Field,ErrorMessage} from "formik"
import "./InputLabelError.css"

function InputLabelError(props) {
    const {inputName,inputLabel,inputType} =props
    return (
      <>
        <div className="form-label-field">
          <label className="input-label" htmlFor={inputName}>
            {inputLabel}
          </label>
          <Field
            id={inputName}
            className="input-style"
            type={inputType}
            name={inputName}
            autoComplete="true"
          />
          <ErrorMessage
            className="error-message"
            name={inputName}
            component="div"
          />
        </div>
      </>
    );

}

export default InputLabelError;