import { BreakLine } from "../registrationPage/components/BreakLine/BreakLine";
import { ImageComponent } from "../registrationPage/components/ImageComponent/ImageComponent";
import { LogInButton } from "../registrationPage/components/LogInButton";
import { LogInputContainer } from "../registrationPage/components/LogInputContainer/LogInputContainer";
import { LogoNetflix } from "../registrationPage/components/LogoNetflix";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/userSlice";

import "./ButtonsStyle.scss";

export const LogInComponent = () => {
  const emailLabel = "Email address or username";

  const [dataLoading, setDataLoading] = useState<number>(0);

  const handleLoader = () => {
    setDataLoading(1);
  };

  interface UserProps {
    [key: string]: {
      value: string;
      isValid: boolean;
      errorMessage: string;
    };
  }

  const [form, setForm] = useState<UserProps>({
    email: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });

  const handleChange = (value: string, name: string) => {
    let isValid = true;
    let errorMessage = "";

    setForm((prevForm) => ({
      ...prevForm,
      [name]: {
        ...prevForm[name],
        value,
        isValid,
        errorMessage,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleChange(form.email.value, "email");
    handleChange(form.password.value, "password");
    console.log(form);
  };

  const handleChangeInput = (value: string, name: string) => {
    handleChange(value, name);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginEmailPassword = async () => {
    const loginEmail = form.email.value;
    const LoginPassword = form.password.value;
    try {
      let response = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        LoginPassword
      );
      dispatch(
        setActiveUser({
          userName: response.user.displayName as string,
          userEmail: response.user.email as string,
        })
      );
      navigate("/dashboard");

    } catch (error: any) {
      alert(error.message);
    }
  };

  const signInWithGoogle = async () => {

    try {
      let response = await signInWithPopup(auth, googleProvider);
      dispatch(
        setActiveUser({
          userName: response.user.displayName as string,
          userEmail: response.user.email as string,
        })
      );
      navigate("/dashboard");

    } catch (error: any) {
      alert(error.message);
    }
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
          onClick={signInWithGoogle}
        />
        <BreakLine />
        <form className="log-component__login-form" onSubmit={handleSubmit}>
          <div className="log-component__inputs">
            <LogInputContainer
              label={emailLabel}
              type={"text"}
              placeholder={emailLabel}
              onChange={(value) => handleChangeInput(value, "email")}
            />

            <LogInputContainer
              label={"Password"}
              type={"password"}
              placeholder={"Password"}
              onChange={(value) => handleChangeInput(value, "password")}
            />
            {form.password.errorMessage && (
              <div className="log-component__error-container">
                <div className="log-component__error-img-box">
                  <img src="/warning 3.svg" alt="" />
                </div>
                <p className="log-component__error-message">
                  {form.password.errorMessage}
                </p>
              </div>
            )}
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
            onClick={() => {
              handleLoader();
              loginEmailPassword();
            }}
            disabled={false}
          >
            <div className="text">Log in</div>
            <div className="loader">
              <img src="/animated-loader.svg" />
            </div>
          </button>
        </form>
        <div className="log-component__break-line"></div>
        <div className="log-component__footer-text">
          You dont have an account yet?
        </div>
        <Link to="/registration" className="log-component__button-link">
          <button className="log-component__secondary-button">
            Sign up for Netflix
          </button>
        </Link>
      </div>
      <ImageComponent src="/netflix-image.png" name="Netflix logo" />
    </div>
  );
};
