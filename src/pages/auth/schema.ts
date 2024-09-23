import * as Yup from "yup"

export const YupPasswordSchema = import.meta.env.DEV ? Yup.string().min(6) : Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Must include a lowercase letter")
    .matches(/[0-9]/, "Must include a number")
    .required("Required")