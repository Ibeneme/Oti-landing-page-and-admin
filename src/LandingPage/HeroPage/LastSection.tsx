import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { subscriberToWaitingList } from "../../Redux/Waiting/waitingList";

const Lastsection: React.FC = () => {
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `200px 16px`,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <h1 className="hero-header" style={{ textAlign: "center" }}>
              Subscribe to Our Waitlist
            </h1>
            <p className="hero-smaller-text" style={{ textAlign: "center" }}>
              Enter your name and email to join our waitlist and receive updates
              on OTI Signals.
            </p>

            <Formik
              initialValues={{ name: "", email: "" }}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
              })}
              onSubmit={(values, { resetForm }) => {
                setLoading(true); // Set loading state to true
                console.log("Submitted data:", values);

                const fullName = values.name;
                const email = values.email;

                const payload = {
                  fullName: fullName,
                  email: email,
                };

                console.log(payload, "dd");
                setSuccess('')
                dispatch(subscriberToWaitingList(payload))
                  .then((result) => {
                    console.log(result);
                    if (result?.payload?.status === 201) {
                      setSuccess("Submission Successful");
                      resetForm({ values: { name: "", email: "" } });
                    } else if (
                      result?.payload?.message ===
                      "Email already exists in the waiting list."
                    ) {
                      setSuccess("Email already exists in the waiting list.");
                      resetForm({ values: { name: "", email: "" } });
                    }
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  })
                  .finally(() => {
                    setLoading(false); // Set loading state to false after submission
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    width: "100%",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                      width: "100%",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="name-input"
                      style={{
                        backgroundColor: "#ffffff25",
                        padding: 20,
                        borderRadius: 48,
                        border: "1px solid #ffaa00",
                        width: "90%",
                        color: "#ffaa00",
                        fontSize: 16,
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                      width: "100%",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="email-input"
                      style={{
                        backgroundColor: "#ffffff25",
                        padding: 20,
                        borderRadius: 48,
                        border: "1px solid #ffaa00",
                        width: "90%",
                        color: "#ffaa00",
                        fontSize: 16,
                      }}
                    />
                    <ErrorMessage name="name" component="div" className="err" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="err"
                    />
                    {success ? <p className="err">{success}</p> : null}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      marginRight: -24,
                    }}
                  >
                    <button
                      type="submit"
                      className="nav-button"
                      style={{ alignSelf: "right", marginTop: 12 }}
                      disabled={isSubmitting || loading} // Disable button when submitting or loading
                    >
                      {loading ? "Loading..." : "Subscribe"} <FiArrowRight />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Lastsection;
