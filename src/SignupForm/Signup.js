import React, { useState } from "react";
import "./Signup.css";
import { useFormik } from "formik";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
  const [redirect, setRedirect] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      emailId: "",
      password: "",
      phoneNo: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      password: Yup.string().max(10, "Invalid Password").required("Required"),
      emailId: Yup.string()
        .email(
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "Invalid email address"
        )
        .required("Required"),
      phoneNo: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Must be 10 Letters"
        )

        .required("Required"),
    }),
    onSubmit: (values) => {
      if (
        values.name == "rohit" &&
        values.emailId == "rroo@gmail.com" &&
        values.password == "1234567890" &&
        values.phoneNo == "9876543210"
      ) {
        alert("You Are Valid User");
        setTimeout(() => {
          setRedirect(true);
          console.log("clicked");
        }, 3000);
      } else {
        alert("You Are not Valid User");
      }
    },
  });

  const handleRedirect = () => {
    if (redirect) {
      return <Redirect to="/home" />;
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="formContainer">
      <div className="formInnerContainer">
        <h2 className="formHeader">Register</h2>

        <FormControl>
          <InputLabel htmlFor="name">Your Name</InputLabel>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.hadleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="emailId"
            name="emailId"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.hadleBlur}
            value={formik.values.emailId}
          />
          {formik.touched.emailId && formik.errors.emailId ? (
            <div>{formik.errors.emailId}</div>
          ) : null}
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>

          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.hadleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="phoneNo">Phone Number</InputLabel>

          <Input
            id="phoneNo"
            name="phoneNo"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.hadleBlur}
            value={formik.values.phoneNo}
          />
          {formik.touched.phoneNo && formik.errors.phoneNo ? (
            <div>{formik.errors.phoneNo}</div>
          ) : null}
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          color="primary"
          size="large"
          className="submitButton"
        >
          Register
        </Button>
      </div>
      {handleRedirect()}
    </form>
  );
};

export default Signup;
