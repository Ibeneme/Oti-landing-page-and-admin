import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <h1 style={{ marginLeft: 0, width: "94%" }} className="err">
        PRIVACY POLICY
      </h1>
      <p>
        At OTI Signals, we are committed to protecting your privacy and ensuring
        the security of your personal information. This Privacy Policy outlines
        how we collect, use, and safeguard your data when you use our website
        and services.
      </p>
      <br />
      <br /> <br />{" "}
      <h2 className="err" style={{ marginLeft: 0, width: "94%" }}>
        Information We Collect
      </h2>
      <p>
        When you subscribe to our services or interact with our website, we may
        collect certain personal information, including but not limited to:
      </p>
      <ul>
        <li>Your name and contact details</li>
        <li>Payment information</li>
        <li>Trading preferences and activity</li>
        <li>Information you provide when becoming a provider</li>
        <li>Interactions with our community features</li>
      </ul>
      <br /> <br />{" "}
      <h2 className="err" style={{ marginLeft: 0, width: "94%" }}>
        How We Use Your Information
      </h2>
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>Providing and improving our services</li>
        <li>Customizing content and recommendations</li>
        <li>Processing payments and subscriptions</li>
        <li>Communicating with you about updates and promotions</li>
        <li>Enabling community interactions</li>
      </ul>
      <br /> <br />{" "}
      <h2 className="err" style={{ marginLeft: 0, width: "94%" }}>
        Sharing Your Information
      </h2>
      <p>
        We may share your information with third-party service providers and
        partners to facilitate our services, process payments, and analyze user
        behavior. We do not sell or rent your personal information to third
        parties for marketing purposes.
      </p>
      <br /> <br />{" "}
      <h2 className="err" style={{ marginLeft: 0, width: "94%" }}>
        Security Measures
      </h2>
      <p>
        We implement industry-standard security measures to protect your
        personal information from unauthorized access, alteration, disclosure,
        or destruction. However, no method of transmission over the internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>
      <br /> <br />{" "}
      <h2 className="err" style={{ marginLeft: 0, width: "94%" }}>
        Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We encourage you to review this
        page periodically for any updates.
      </p>
      <br /> <br />{" "}
      <h2 className="err" style={{ marginLeft: 0, width: "94%" }}>
        Contact Us
      </h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at getotisignals@gmail.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
