import React, { useState } from "react";
import { Form, Image, Button } from "react-bootstrap";
import Registration from "../../components/registerComponent/Registration";
import "../../styles/styles.css";

export default function Authentication() {
  const [mobile, setMobile] = useState("9837179953");
  const [otp, setOtp] = useState("");
  const [registerActive, setRegisterActive] = useState(false);

  return (
    <div className="containerAuthenticationPage">
      <div className="headerAuthenticationPage"></div>
      <div className="bodyAuthenticationPage">
        <div className="internalbodycontainer">
          <Image rounded src={require("../../assets/dglogo.png")} />
          <div className="partition"></div>
          {!registerActive ? (
            <div className="mobilecontainer">
              <Form.Label style={{ color: "white" }}>Mobile Number</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  placeholder="+91"
                  disabled
                  style={{ width: 70, marginRight: "10px" }}
                />
                <Form.Control type="mobile" placeholder="Ex. 98462XX781 etc." />
              </div>
              <Form.Text className="text-muted">
                Enter you 10 digit Mobile Number
              </Form.Text>

              <div className="otpcontainer">
                <Form.Label style={{ color: "white", marginTop: 20 }}>
                  Verify OTP
                </Form.Label>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Form.Control
                    type="otp"
                    placeholder="Enter your four digit OTP"
                  />
                </div>
                <Form.Text className="text-muted">
                  You will receive 4 digit OTP on your mobile.
                </Form.Text>
                {/* <Button
                  style={{
                    color: "#2b0245",
                    backgroundColor: "#feb93f",
                    borderColor: "#feb93f",
                    marginTop: 30,
                  }}
                  onClick={() => }
                >
                  Verify OTP
                </Button> */}
              </div>
              <Button
                style={{
                  color: "#2b0245",
                  marginTop: 30,
                  backgroundColor: "#feb93f",
                  borderColor: "#feb93f",
                }}
                onClick={() => {
                  if (mobile.length) {
                    setMobile("0");
                  } else {
                    setRegisterActive(true);
                    // setMobile("9876543210");
                  }
                }}
              >
                {mobile.length === 10 ? "Get Started" : "Verify OTP"}
              </Button>
            </div>
          ) : (
            <div>
              <Registration
                registrationButtonCommand={() => {
                  setRegisterActive(false);
                  setMobile("9876543210");
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="footerAuthenticationPage">
        <div className="footermenu">
          <h4
            style={{
              color: "darkred",
              marginRight: 30,
              alignSelf: "center",
              marginTop: "5px",
            }}
          >
            Disclaimer :{" "}
          </h4>
          Aliquip aliquip aliqua exercitation duis et. Aliquip aliquip aliqua
          exercitation duis et.
        </div>
      </div>
    </div>
  );
}
