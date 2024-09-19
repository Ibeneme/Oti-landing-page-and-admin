import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "../auth.module.css";
import { LoginFormValues } from "../types";
import { useNavigate } from "react-router-dom";
import TextInput, { PasswordInput } from "../../../components/form/TextInput";
import { superTwMerge } from "../../../utils";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorResponse, setError] = useState<string | []>("");
  const navigate = useNavigate();

  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      navigate("/users"); // Redirect to the Users page if token exists
    }
  }, [navigate]);

  const initialValues: LoginFormValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Must include a lowercase letter")
      .matches(/[0-9]/, "Must include a number")
      .required("Required"),
  });

  const handleSubmit = () => {
    setError("");
    setLoading(true); // Start loader
    // dispatch(adminLogin(values))
    //   .unwrap()
    //   .then((result) => {
    //     setLoading(false); // Stop loader
    //     if (result.message === "Invalid credentials") {
    //       setError("Invalid credentials");
    //     } else if (result.token) {
    //       localStorage.setItem("adminToken", result.token); // Store the token in localStorage
    //       navigate("/users"); // Redirect to the Users page upon successful login
    //     } else {
    //       console.error("Unexpected result:", result);
    //     }
    //   })
    //   .catch((error: any) => {
    //     setLoading(false); // Stop loader
    //     const errorMessage = error.message || "An error occurred";
    //     console.error("Login failed:", errorMessage);
    //     setError(errorMessage);
    //   });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffaa00",
      }}
    >
      <div className={styles.loginContainer}>
        <h1 className={styles.loginContainerH1}>Admin Signup</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={superTwMerge(styles.loginForm, "space-y-1 py-3")}>
            <TextInput
              name="name"
              type="name"
              placeholder="Enter full name"
              label="Name"
            />

            <TextInput
              name="email"
              type="email"
              placeholder="Enter an email address"
              label="Email"
            />

            <div>
              <PasswordInput
                name="password"
                label="Password"
                placeholder="Enter Password"
              />
              <div className={styles.passwordHint}>
                Password must be at least 8 characters long, include uppercase
                and lowercase letters, a number, and a special character.
              </div>
            </div>
            <br />
            <button
              type="submit"
              className={superTwMerge(
                styles.submitButton,
                "disabled:bg-gray-500"
              )}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {errorResponse ? (
              <div
                style={{
                  backgroundColor: errorResponse ? "#ff000024" : "transparent",
                  fontSize: 16,
                  padding: 16,
                  marginTop: 24,
                  fontWeight: 900,
                }}
                className={styles.errorMessage}
              >
                {errorResponse}
              </div>
            ) : null}
          </Form>
        </Formik>
        <br />
        {loading && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
