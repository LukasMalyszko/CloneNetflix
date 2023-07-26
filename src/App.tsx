// import React from "react"
import "../src/global-styles/style.scss";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { LogInComponent } from "./pages/registrationPage/components/LogInComponent/LogInComponent";

function App() {
  return (
  <Routes>
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/" element={<RegistrationPage />} />
    <Route path="/login" element={<LogInComponent /> } />
  </Routes>

  )
}

export default App;
