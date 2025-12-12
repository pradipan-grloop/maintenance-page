import React, { useEffect, useState } from "react";
import clientLogo from "./assets/images/stiched-health-logo-light.png"
import hostLogo from "./assets/images/glt-logo.svg"

const domainName = import.meta.env.VITE_MAINTENANCE_DOMAIN_NAME;
const domainURL = import.meta.env.VITE_MAINTENANCE_DOMAIN_URL;
const heading = import.meta.env.VITE_MAINTENANCE_HEADING_TEXT;
const subHeading = import.meta.env.VITE_MAINTENANCE_SUBHEADING_TEXT;
const envContentHeader = import.meta.env.VITE_MAINTENANCE_CONTENT_HEADER_TEXT;
const envContentBody = import.meta.env.VITE_MAINTENANCE_CONTENT_BODY_TEXT;

function App() {
  // const [contentText, setContentText] = useState(envContent);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log(domainURL);

  //   if (!domainURL) {
  //     setLoading(false);
  //     return;
  //   }

  //   fetch(domainURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // assume API returns { message: "..." }
  //       const apiMessage = (data?.message || "").trim();
  //       if (apiMessage) {
  //         setContentText(apiMessage);
  //       } else {
  //         // blank string => fallback to env
  //         setContentText(envContent);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Failed to load maintenance message", err);
  //       setContentText(envContent);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light">
      <div className="container text-center">
        {/* Icon + subtle animation using Bootstrap utilities */}
        <div className="mb-4 position-relative">
          <div
            className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary opacity-25"
            style={{
              width: "140px",
              height: "140px",
              filter: "blur(12px)",
              animation: "pulse 2.4s ease-in-out infinite",
            }}
          />
          <div
            className="position-relative d-inline-flex align-items-center justify-content-center rounded-circle border border-primary"
            style={{
              width: "120px",
              height: "120px",
              animation: "spinSlow 16s linear infinite",
            }}
          >
            <span style={{ fontSize: "3rem" }}>🛠️</span>
          </div>
        </div>

        {/* Company Logo */}
        <div className="mb-4">
          <img
            src={import.meta.env.VITE_MAINTENANCE_DOMAIN_LOGO}
            alt="Company Logo"
            style={{
              maxWidth: "160px",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))",
            }}
            onError={(e) => {
              // fallback if logo fails to load
              e.target.style.display = "none";
            }}
          />
        </div>

                {/* Center image below icon */}
        <div className="mb-4 d-flex justify-content-center">
          <img
            src={clientLogo} // or hostLogo or any other imported image
            alt="Center illustration"
            className="img-fluid"
            style={{
              maxWidth: "260px",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(0,0,0,0.4))",
            }}
          />
        </div>

        <p>Powered by</p>
        {/* Company Logo from env */}
        <div className="mb-4">
          <img
            src={hostLogo}
            alt="Company Logo"
            style={{
              maxWidth: "160px",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        <h1 className="fw-semibold mb-3">{domainName} {heading}</h1>
        <p className="text-secondary mb-4">{subHeading}</p>

        <h4 className="fw-semibold mb-3">{envContentHeader}</h4>
        <p className="text-secondary mb-4">{envContentBody}</p>

        {/* Fake countdown cards */}
        {/* <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <div className="card bg-dark border-secondary" style={{ minWidth: "110px" }}>
            <div className="card-body py-2">
              <div className="h4 mb-1 fw-monospace">~30</div>
              <div className="text-uppercase small text-secondary">Minutes</div>
            </div>
          </div>
          <div className="card bg-dark border-secondary" style={{ minWidth: "110px" }}>
            <div className="card-body py-2">
              <div className="h5 mb-1 fw-monospace">Today</div>
              <div className="text-uppercase small text-secondary">Back online</div>
            </div>
          </div>
        </div> */}

        {/* Email notify form */}
        {/* <form
          className="d-flex flex-column flex-sm-row justify-content-center gap-2 mb-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            className="form-control form-control-sm"
            placeholder="you@example.com"
          />
          <button type="submit" className="btn btn-primary btn-sm px-4">
            Notify me
          </button>
        </form> */}

        <small className="text-secondary">
          Need help now? Contact{" "}
          <a
            href="mailto:support@example.com"
            className="link-light text-decoration-underline"
          >
            gunendu@growth-loop.io
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
