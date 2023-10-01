import { useState } from "react";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
import PhoneInput from "react-phone-number-input/input";
const FormRowPhone = ({ name }) => {
  return (
    <div className="">
      <label htmlFor="phone" className="form-label">
        telephone number
      </label>
      <PhoneInput
        country="US"
        name={name}
        className="form-input form-row"
        onChange={() => null}
        required
      />
    </div>
  );
};
export default FormRowPhone;
