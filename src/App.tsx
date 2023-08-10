import "../src/global-styles/style.scss";
import { Routes, Route, Link } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { LogInComponent } from "./pages/LogInPage/LogInPage";


import { LoadPage } from "./pages/LoadPage/LoadPage";

function App() {
  // console.log(auth);
 
  return (
    <>
      <nav style={{ color: "red", zIndex: 4, position: "absolute" }}>
        <Link to="/">
          <div>home</div>
        </Link>
        <Link to="/dashboard">
          <div>dash</div>
        </Link>
        <Link to="/registration-page">
          <div>register</div>
        </Link>

      </nav>

      <Routes>
        <Route path="/" index element={<LoadPage />} />
        <Route path="/login" element={<LogInComponent />} />
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<h3>404 not found!</h3>} />
      </Routes>
    </>
  );
}

export default App;
