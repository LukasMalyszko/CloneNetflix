import "../src/global-styles/style.scss";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { LogInComponent } from "./pages/LogInPage/LogInPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { FakeShow } from "./pages/FakeShow/FakeShow";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LogInComponent />} path="/" />
        <Route element={<PrivateRoutes isLogged={false} />}>
          <Route element={<LogInComponent />} path="/login" />
          <Route element={<RegistrationPage />} path="/registration" />
        </Route>

        <Route element={<PrivateRoutes isLogged />}>
          <Route element={<FakeShow />} path="/fake" />
          <Route element={<DashboardPage />} path="/dashboard" />
          <Route element={<ProfilePage />} path="/profile" />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
