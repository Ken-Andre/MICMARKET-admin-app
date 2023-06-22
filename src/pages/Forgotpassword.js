import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
// import { Link, useNavigate } from "react-router-dom";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../features/auth/authSlice";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br /> <br /> <br />
      <div className="py-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">
          Please enter your register email to get you soon reset password{" "}
        </p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <button
            className="border-0 px-3 py-2 mt-1 text-white fw-bold w-100"
            style={{ background: "#fdd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
