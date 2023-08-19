import "../src/global-styles/style.scss";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { LogInComponent } from "./pages/LogInPage/LogInPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { PrivateRoutes } from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LogInComponent />} path="/" />
        <Route element={<PrivateRoutes />}>
          <Route element={<LogInComponent />} path="/login" />
          <Route element={<RegistrationPage />} path="/registration" />
        </Route>

        <Route element={<PrivateRoutes page={"dashboard"} />}>
          <Route element={<DashboardPage />} path="/dashboard" />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
