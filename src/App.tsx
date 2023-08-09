import "../src/global-styles/style.scss";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { LogInComponent } from "./pages/LogInPage/LogInPage";
import { auth } from "./config/firebase";
// import { TestRedux } from "./pages/testRedux/TestRedux";
// import { TestRedux3 } from "./pages/testRedux/TestRedux3";
import { useSelector } from "react-redux";
import {
  // setActiveUser,
  // setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "./redux/userSlice";

import { LoadPage } from "./pages/LoadPage/LoadPage";

function App() {
  console.log(auth);
  // const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <>
      {userEmail ? <Navigate to="/dashboard" /> : <Navigate to={"/"} />}
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
        <Route path="/load" index element={<LoadPage />} />
        <Route path="/" element={<LogInComponent />} />
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<h3>404 not found!</h3>} />
        {/* <Route path="/" element={<TestRedux />} /> */}
        {/* <Route path="/test3" element={<TestRedux3 />} /> */}
      </Routes>
    </>
  );
}

export default App;
