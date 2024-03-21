import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import FuzzySearch from "./component/FuzzySearch/FuzzySearch"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"



function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  )
}

export default App
