import { useState, useMemo } from "react";
import { RegisterInput } from "../RegisterInput/RegisterInput";
import { LogInButton } from "../LogInButton";
import { User } from "../Interfaces";
import { debounce } from "lodash";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "../../../../config/firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../../../redux/userSlice";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { LogoNetflix } from "../LogoNetflix";
import { BreakLine } from "../BreakLine/BreakLine";
import "./ButtonStyles.scss";
import { Link, useNavigate } from "react-router-dom";

export const RegisterComponent = () => {
  const [dataLoading, setDataLoading] = useState<number>(0);

  const handleLoader = () => {
    setDataLoading(1);
  };

  const [form, setForm] = useState<User>({
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
    confirmPassword: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    userName: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });

  const [isChecked, setIsChecked] = useState(true);

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

  const handleDebounceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let isValid = true;
    let errorMessage = "";

    setForm((prevForm) => ({
      ...prevForm,
      [name]: { ...prevForm[name], value, isValid, errorMessage },
    }));
    const handleDebounce = debounce(() => {
      handleChange(value, name);
    }, 1000);
    handleDebounce();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid) {
      console.log(form);
    }
  };

  const isFormValid = useMemo(
    () => Object.values(form).every(({ isValid }) => isValid),
    [form]
  );

  interface IBasicValidator {
    [key: string]: (value: string) => boolean | string | void;
  }

  const basicValidator: IBasicValidator = {
    email: (value) =>
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(String(value)) ||
      "Incorrect e-mail",

    password: (value) =>
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(String(value)) ||
      "Incorrect password ",

    confirmPassword: (value) =>
      form.password.value !== value ? "Passwords are not the same" : "",
  };

  const navigate = useNavigate();

  const signIn = async () => {
    const email: any = form.email.value;
    const password: any = form.password.value;

    try {
      let response = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(
        setActiveUser({
          userName: response.user.displayName as string,
          userEmail: response.user.email as string,
        })
      );
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const dispatch = useDispatch();

  const signInWithGoogle = async () => {

    try {
      let response = await signInWithPopup(auth, googleProvider);
      console.log(response);
      dispatch(
        setActiveUser({
          userName: response.user.displayName as string,
          userEmail: response.user.email as string,
        })
      );
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const signInWithFb = async () => {

    try {
      let respone = await signInWithPopup(auth, facebookProvider);
      console.log(respone);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="register-component">
      <div className="logo-container">
        <LogoNetflix />
      </div>
      <div className="register-component__header">
        Sign up and start watching now
      </div>
      <LogInButton
        className="register-component__first-button"
        image="/fb.svg"
        text="Sign up with Facebook"
        onClick={signInWithFb}
      />
      <LogInButton
        className="register-component__second-button"
        image="google 1.svg"
        text="Sign up with Google"
        onClick={signInWithGoogle}
      />
      <BreakLine />
      <div className="register-component__form-label">
        Sign up with your email address
      </div>
      <form className="register-component__form" onSubmit={handleSubmit}>
        <div className="register-component__inputs-container">
          <RegisterInput
            name="email"
            type="email"
            label="What’s your email?"
            placeholder="Enter you email"
            form={form}
            onChange={handleDebounceChange}
            errorMessage={form.email.errorMessage}
          />

          <RegisterInput
            name="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            form={form}
            onChange={handleDebounceChange}
            errorMessage={form.password.errorMessage}
          />
          <RegisterInput
            name="confirmPassword"
            type="password"
            label="Confirm password"
            placeholder="Confirm password"
            form={form}
            onChange={handleDebounceChange}
            errorMessage={form.confirmPassword.errorMessage}
          />
          <RegisterInput
            name="userName"
            type="text"
            label="What should we call you?"
            placeholder="Enter a profile name"
            form={form}
            onChange={handleDebounceChange}
          />
        </div>
        <div className="register-component__info">
          This appears on your profile.
        </div>
        <div className="register-component__confirm-container">
          <input
            className="register-component__checkbox"
            id="agreement-check"
            type="checkbox"
            required
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="agreement-check">
            Share my registration date with Netflix content providers for
            marketing purposes.
          </label>
        </div>
        {isChecked ? null : (
          <div className="error-container">
            <div className="error-img-box">
              <img src="/warning 3.svg" alt="" />
            </div>
            <p className="error-message">Agreement required</p>
          </div>
        )}
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
          type="submit"
          className="register-component__primary-button"
          data-loader={dataLoading}
          onClick={() => {
            handleLoader();
            signIn();
            handleChange("", "");
          }}
          disabled={!isFormValid || !isChecked}
        >
          <div className="text">Sign up</div>
          <div className="loader">
            <img src="/animated-loader.svg" />
          </div>
        </button>

        <div className="register-component__log-container">
          Have an account?{" "}
          <Link to="/" className="register-component__link">
            Log in
          </Link>
          .
        </div>
      </form>
    </div>
  );
};
