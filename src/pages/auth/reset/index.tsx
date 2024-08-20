import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "../auth.module.css";
import { LoginFormValues } from "../types";
import { useNavigate } from "react-router-dom";
import TextInput, { PasswordInput } from "../../../components/form/TextInput";
import { superTwMerge } from "../../../utils";
import { YupPasswordSchema } from "../schema";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "../../../Redux/api";

const emailValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const validationCodeLength = 6;
const codeValidationSchema = Yup.object({
  code: Yup.string().length(validationCodeLength),
});

const newPasswordValidationSchema = Yup.object({
  password: YupPasswordSchema,
  cPassword: YupPasswordSchema.oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const ResetPassword: React.FC = () => {
  const [steps, setSteps] = useState<"email" | "code" | "passwords">("email");
  const navigate = useNavigate();

  const savedValues = useRef<{
    email?: string;
    password?: string;
    otp?: string;
  }>();

  const [forgotPassword, forgotPasswordStatus] = useForgotPasswordMutation();
  const [resetPassword, resetPasswordStatus] = useResetPasswordMutation();

  const initialValues: LoginFormValues = { email: "", password: "" };

  const loading =
    forgotPasswordStatus.isLoading || resetPasswordStatus.isLoading;
  const errorResponse =
    // @ts-ignore
    forgotPasswordStatus?.error?.data?.message ||
    // @ts-ignore
    resetPasswordStatus?.error?.data?.message ||
    null;

  console.log(resetPasswordStatus?.error);

  const handleSubmit = async (values: any) => {
    if (steps === "email") {
      try {
        await forgotPassword({
          email: values?.email,
        }).unwrap();

        savedValues.current = {
          ...savedValues.current,
          email: values?.email as string,
        };

        setSteps("passwords");
      } catch (err) {
        console.log(err);
      }
    }

    if (steps === "passwords") {
      savedValues.current = {
        ...savedValues.current,
        otp: values?.otp as string,
        password: values?.password as string,
      };
      if (!savedValues.current) {
        return;
      }
      try {
        // @ts-ignore
        await resetPassword(savedValues.current).unwrap();
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const validationSchema =
    steps === "email"
      ? emailValidationSchema
      : steps === "code"
      ? codeValidationSchema
      : newPasswordValidationSchema;

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
      <div
        className={superTwMerge(styles.loginContainer, "w-full max-w-[500px]")}
      >
        <h1 className={styles.loginContainerH1}>Reset Password</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form
            autoComplete="false"
            className={superTwMerge(styles.loginForm, "space-y-1 py-3")}
          >
            {steps == "email" && (
              <TextInput
                name="email"
                type="email"
                placeholder="Enter an email address"
                label="Email"
              />
            )}

            {/* {steps == "code" && (
              <TextInput
                name="code"
                type="text"
                placeholder="Enter code"
                label="Enter code sent to email address"
              />
            )} */}

            {steps === "passwords" && (
              <div>
                <TextInput
                  name="code"
                  type="text"
                  placeholder="Enter code"
                  label="Enter code sent to email address"
                />
                <PasswordInput
                  name="password"
                  label="Password"
                  placeholder="Enter Password"
                />
                <PasswordInput
                  name="cpassword"
                  label="Confirm Password"
                  placeholder="Enter Password"
                />
                <div className={styles.passwordHint}>
                  Passwords must be at least 8 characters long, include
                  uppercase and lowercase letters, a number, and a special
                  character.
                </div>
              </div>
            )}

            <button
              type="submit"
              className={superTwMerge(
                styles.submitButton,
                "disabled:bg-gray-500"
              )}
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : steps === "passwords"
                ? "Change Password"
                : "Next"}
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

export default ResetPassword;
