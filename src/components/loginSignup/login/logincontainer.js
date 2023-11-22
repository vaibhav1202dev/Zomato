import React, { useState } from "react";
import "./logincontainer.css";

function Loginbox() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isPhoneInputVisible, setIsPhoneInputVisible] = useState(true);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setIsPhoneInputVisible(false);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
  };

  return (
    <div className="login-containerss">
      <div className="login-boxss">
        {isPhoneInputVisible ? (
          <form onSubmit={handlePhoneSubmit}>
            <div className="phone-input-container">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button type="submit">Send One Time Password</button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <input
              className="sub-login"
              type="text"
              placeholder="One Time Password"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
        <div className="login-options">
          <p className="absolute-center">or</p>
          <button className="btn-google">Continue with Google</button>
          <button className="btn-email">Continue with Email</button>
        </div>
        <p className="create-account">
          New to Zomato? <span>Create account</span>
        </p>
      </div>
    </div>
  );
}

export default Loginbox;
