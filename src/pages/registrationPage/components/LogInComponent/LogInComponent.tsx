import { BreakLine } from "../BreakLine/BreakLine";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import { LogInButton } from "../LogInButton";
import { LogInputContainer } from "../LogInputContainer/LogInputContainer";
import { LogoNetflix } from "../LogoNetflix";
import { useState } from "react";

export const LogInComponent = () => {
  const emailLabel = "Email address or username";

  const [dataLoading, setDataLoading] = useState<number>(0);

  const handleLoader = () => {
    setDataLoading(1);
  };

  return (
    <div className="log-component">
      <div className="log-component__log-section">
        <div className="log-component__logo-container">
          <LogoNetflix />
        </div>
        <div className="log-component__header">
          Please log in to Netflix to continue.
        </div>
        <LogInButton
          className="log-component__fb-button"
          image={"/fb.svg"}
          text="Log in with Facebook"
        />
        <LogInButton
          className="log-component__google-button"
          image={"/google 1.svg"}
          text="Log in with Google"
        />
        <BreakLine />
        <div className="log-component__login-inputs">
          <LogInputContainer
            label={emailLabel}
            type={"text"}
            placeholder={emailLabel}
          />
          <LogInputContainer
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
          />
        </div>
        <div className="log-component__link">
          <a href="#">Do not you remember the password?</a>
        </div>
        <div className="log-component__checkbox-container">
          <input
            className="log-component__checkbox"
            id="remember-me"
            type="checkbox"
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button
          type="submit"
          className="log-component__primary-button"
          data-loader={dataLoading}
          onClick={handleLoader}
          disabled={true}
        >
          <div className="text">Log in</div>
          <div className="loader">
            <img src="/animated-loader.svg" />
          </div>
        </button>
        <div className="log-component__break-line"></div>
        <div className="log-component__footer-text">
          You dont have an account yet?
        </div>
        <a className="log-component__button-link" href="/">
          <button className="log-component__secondary-button">
            Sign up for Netflix
          </button>
        </a>
      </div>
      <ImageComponent src="/netflix-image.png" name="Netflix logo" />
    </div>
  );
};
