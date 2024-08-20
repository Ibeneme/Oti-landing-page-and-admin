// import React from 'react'
import { ErrorMessage, Field, getIn, useFormikContext } from "formik";
import classNames from "classnames";
import styles from "./form.module.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
};

const TextInput = ({ name, type, placeholder, label }: Props) => {
  const { errors, touched } = useFormikContext();
  return (
    <div
      className={classNames(styles.formGroup, {
        [styles.error]: getIn(errors, name) && getIn(touched, name),
      })}
    >
      {label && <label htmlFor={name}>{label}:</label>}
      <div className={styles.passwordContainer}>
        <Field
          name={name}
          type={type}
          className={styles.formInput}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage name={name} component="p" className={styles.errorMessage} />
    </div>
  );
};

export const PasswordInput = ({ name, placeholder, label }: Props) => {
  const { errors, touched } = useFormikContext();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={classNames(styles.formGroup, {
        [styles.error]: getIn(errors, name) && getIn(touched, name),
      })}
    >
      {label && <label htmlFor={name}>{label}:</label>}
      <div className={styles.passwordContainer}>
        <Field
          name={name}
          type={showPassword ? "text" : "password"}
          className={styles.formInput}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.togglePassword}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <ErrorMessage name={name} component="p" className={styles.errorMessage} />
    </div>
  );
};

export default TextInput;
