import "../src/global-styles/style.scss";
import { Routes, Route,
  //  Link 
  } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { LogInComponent } from "./pages/LogInPage/LogInPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { auth } from "./config/firebase";
import { LoadPage } from "./pages/LoadPage/LoadPage";

function App() {
  const user = auth.currentUser;

  /// temporary nav
  ///
  // const Navigation = () => {
  //   return (
  //     <nav style={{ color: "red", zIndex: 4, position: "absolute" }}>
  //       <Link to="/">
  //         <div>home</div>
  //       </Link>
  //       <Link to="/dashboard">
  //         <div>dash</div>
  //       </Link>
  //       <Link to="/registration-page">
  //         <div>register</div>
  //       </Link>
  //     </nav>
  //   )
  // }

  return (
    <>

    
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" index element={<LoadPage />} />
        <Route path="/login" element={<LogInComponent />} />
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route
          path="/dashboard"
          element={
              <DashboardPage user={user} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
