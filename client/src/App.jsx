import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"


import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/login/signup" element={<SignupPage />} />
        <Route exact path="/dashboard" element={<Navigate to="/dashboard" />} />

      </Routes>
    </>
  )
}

export default App
