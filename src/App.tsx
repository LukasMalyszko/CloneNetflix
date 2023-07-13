// import React from "react"
import "../src/global-styles/style.scss";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";

function App() {
  return (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/registration" element={<RegistrationPage />} />
  </Routes>

  )
}

export default App;
