import { BreakLine } from "../BreakLine/BreakLine";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import { LogInButton } from "../LogInButton";
import { LogInputContainer } from "../LogInputContainer/LogInputContainer";
import { LogoNetflix } from "../LogoNetflix";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, showLoginError, googleProvider } from "../../../../config/firebase";


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
    const validator = basicValidator[name];

    let isValid = true;
    let errorMessage = "";

    if (validator) {
      const validatorValue = validator(value);

      if (typeof validatorValue === "string") {
        isValid = !validatorValue;
        errorMessage = validatorValue;
      }
    }

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
    // if (isFormValid) {
    console.log(form);
    // }
  };

  interface IBasicValidator {
    [key: string]: (value: string) => boolean | string | void;
  }

  const basicValidator: IBasicValidator = {
    email: (value) =>
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(String(value)) ||
      "Incorrect e-mail",

    password: (value) =>
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(String(value)) ||
      "Incorrect e-mail or password ",
  };

  const handleChangeInput = (value: string, name: string) => {
    handleChange(value, name);
  };

  const navigate = useNavigate();

  const loginEmailPassword = async () => {
    const loginEmail = form.email.value;
    const LoginPassword = form.password.value;
    try {
      await signInWithEmailAndPassword(auth, loginEmail, LoginPassword);
      navigate("/dashboard");
    } catch (error: any) {
      alert(error.message);
      showLoginError(error.message);
      console.log(error.message);
    }
  };

  const signInWithGoogle = async () => {
    console.log(auth.currentUser?.email);

    try {
      let respone = await signInWithPopup(auth, googleProvider);
      console.log(respone);
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error.message);
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
