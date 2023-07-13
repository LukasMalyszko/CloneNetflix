import { RegisterInput } from "./RegisterInput";

export const RegisterComponent = () => {
  return (
    <div className="register-component">
      <div className="register-component__logo-container">
        <img src="/NETFLIX.svg" alt="logo" />
      </div>
      <div className="register-component__header"></div>
      <button className="register-component__first-button"></button>
      <button className="register-component__second-button"></button>
      <div className="register-component__break-line"></div>
      <div className="register-component__form-label">
        Sign up with your email address
      </div>
      <form>
        <RegisterInput
          label="What’s your email?"
          placeholder="Enter you email"
        />
        <RegisterInput label="Password" placeholder="Create a password" />
        <RegisterInput
          label="Confirm password"
          placeholder="Confirm password"
        />
        <RegisterInput
          label="What should we call you?"
          placeholder="Enter a profile name"
        />
        <div className="register-component__info">
          This appears on your profile.
        </div>
        <div className="register-component__confirm-container"></div>
        <div className="register-component__terms">
          By clicking on sing-up. you agree to Netflix
          <a href="#" className="register-component__link">
            Terms and Conditions of Use
          </a>
          .
        </div>
        <div className="register-component__terms">
          To learn more about how. Netflix collects, uses, shares and protects
          your personal data, please see <a href="#" className="register-component__link">Netflix Privacy Policy</a>.
        </div>
        <button className="register-component__primary-button">Sign up</button>
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
