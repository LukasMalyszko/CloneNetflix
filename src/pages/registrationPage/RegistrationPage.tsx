import { RegisterComponent } from "./components/RegisterComponent/RegisterComponent";
import "./components/RegisterComponent/RegisterComponent.scss";
import "./components/RegisterInput/RegisterInput.scss";
import { ImageComponent } from "./components/ImageComponent/ImageComponent";
import "./components/ImageComponent/ImageComponent.scss";
import "./RegistrationPage.scss";
import "./components/BreakLine/BreakLine.scss";
import "../LogInPage/LogInPage.scss";

export const RegistrationPage = () => {
  return (
  <div className="registration-page">
      <RegisterComponent />
      <ImageComponent src="/netflix-image.png" name="Netflix logo"/>
  </div>
  )
};
