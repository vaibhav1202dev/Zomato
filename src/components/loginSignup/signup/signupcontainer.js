import  { useState } from "react";
import "./signupcontainer.css";

function Signupbox() {
  const [otp, setOtp] = useState("");
  const [isPhoneInputVisible, setIsPhoneInputVisible] = useState(true);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setIsPhoneInputVisible(false);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-containerss">
      <div className="login-boxss">
        {isPhoneInputVisible ? (
          <form onSubmit={handlePhoneSubmit}>
            <div>
              <input
                type="text"
                className="phone-input"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input type="text" className="phone-input" placeholder="Email" />
            </div>
            <div className="radio-label">
              <input
                type="radio"
                id="agree"
                name="terms"
                className="radio-input"
              />
              <div className="radio-button"></div>
              <label htmlFor="agree" className="radio-label-text">
                I agree to Zomato's Terms of Service, Privacy Policy, and
                Content Policies
              </label>
            </div>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <label>Phone</label>
            <input
              type="text"
              placeholder="One Time Password"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Login </button>
          </form>
        )}
        <div className="login-options">
          <button className="btn-create-acnt">Create account</button>
          <p className="absolute-center">or</p>
          <button className="btns-google">Continue with Google</button>
        </div>
        <p className="create-account">
          Already have an account?
          <span>login</span>
        </p>
      </div>
    </div>
  );
}

export default Signupbox;
