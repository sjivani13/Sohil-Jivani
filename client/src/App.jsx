import Dashboard from "./pages/Dashboard"
import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import React from "react"
import { Route, Routes } from "react-router-dom"
// import FuzzySearch from "./component/FuzzySearch/FuzzySearch"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import OpenRecipe from "./component/OpenRecipe/OpenRecipe"
import RecipeUpload from "./pages/RecipeUpload"



function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/logout" element={<LandingPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/post" element={<OpenRecipe />} />
        <Route exact path="/recipe" element={<RecipeUpload />} />
      </Routes>
    </>
  )
}

export default App
