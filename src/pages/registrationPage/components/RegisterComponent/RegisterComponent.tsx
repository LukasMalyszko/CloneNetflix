import { useState } from "react";
import { RegisterInput } from "../RegisterInput/RegisterInput";
import { Button } from "../Button";

export const RegisterComponent = () => {
  const [dataLoading, setDataLoading] = useState<number>(0);

  const handleLoader = () => {
    setDataLoading(1);
  };

  

  return (
    <div className="register-component">
      <div className="register-component__logo-container">
        <svg
          width="57"
          height="16"
          viewBox="0 0 57 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H3.29372L5.84755 9.57714H5.89529V0H8.23431V16H5.53727L2.38676 4.32H2.33902V16H0V0Z"
            fill="white"
          />
          <path
            d="M10.1857 0H17.3459V2.28571H12.8111V6.51429H16.4151V8.8H12.8111V13.7143H17.3459V16H10.1857V0Z"
            fill="white"
          />
          <path
            d="M20.9089 2.28571H18.1641V0H26.2791V2.28571H23.5343V16H20.9089V2.28571Z"
            fill="white"
          />
          <path
            d="M27.5502 0H34.4957V2.28571H30.1757V6.74286H33.5649V9.02857H30.1757V16H27.5502V0Z"
            fill="white"
          />
          <path
            d="M35.7547 0H38.3801V13.7143H42.7002V16H35.7547V0Z"
            fill="white"
          />
          <path d="M43.9592 0H46.5846V16H43.9592V0Z" fill="white" />
          <path
            d="M50.866 7.81714L47.9781 0H50.7467L52.5129 5.16571H52.5606L54.3746 0H56.8568L53.9688 7.81714L57 16H54.2314L52.322 10.4229H52.2742L50.3171 16H47.8349L50.866 7.81714Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="register-component__header">
        Sign up and start watching now
      </div>
      <Button
        className="register-component__first-button"
        image="/fb.svg"
        text="Sign up with Facebook"
        data={dataLoading}
        onClick={handleLoader}
      />
      <Button
        className="register-component__second-button"
        image="google 1.svg"
        text="Sign up with Google"
        data={dataLoading}
        onClick={handleLoader}
      />
      <div className="register-component__break">
        <div className="register-component__break-line"></div>
        <div className="register-component__break-line-text">or</div>
        <div className="register-component__break-line"></div>
      </div>
      <div className="register-component__form-label">
        Sign up with your email address
      </div>
      <form className="register-component__form">
        <div className="register-component__inputs-container">
          <RegisterInput
            type="email"
            label="What’s your email?"
            placeholder="Enter you email"
          />
          <RegisterInput
            type="password"
            label="Password"
            placeholder="Create a password"
          />
          <RegisterInput
            type="password"
            label="Confirm password"
            placeholder="Confirm password"
          />
          <RegisterInput
            type="text"
            label="What should we call you?"
            placeholder="Enter a profile name"
          />
        </div>
        <div className="register-component__info">
          This appears on your profile.
        </div>
        <div className="register-component__confirm-container">
          <input
            className="register-component__chceckbox"
            id="agreement-check"
            type="checkbox"
          />
          <label htmlFor="agreement-check">
            Share my registration date with Netflix content providers for
            marketing purposes.
          </label>
        </div>
        <div className="register-component__terms">
          By clicking on sing-up. you agree to Netflix{" "}
          <a href="#" className="register-component__link">
            Terms and Conditions of Use
          </a>
          .
        </div>
        <div className="register-component__terms">
          To learn more about how. Netflix collects, uses, shares and protects
          your personal data, please see{" "}
          <a href="#" className="register-component__link">
            Netflix Privacy Policy
          </a>
          .
        </div>
        <button
          className="register-component__primary-button"
          data-loader={dataLoading}
          onClick={handleLoader}
        >
          <div className="text">Sign up</div>
          <div className="loader">
            <img src="/animated-loader.svg" />
          </div>
        </button>

        <div className="register-component__log-container">
          Have an account?{" "}
          <a href="#" className="register-component__link">
            Log in
          </a>
          .
        </div>
      </form>
    </div>
  );
};
