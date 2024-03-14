import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
// import LoginPage from "./pages/LoginPage"
// import { Navigate } from "react-router-dom"
// import { Row } from "react-bootstrap"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />

      </Routes>
      {/* <LandingPage /> */}
      {/* <LoginPage exact path="/login" element={<Navigate to="/login" />} /> */}
    </>
  )
}

export default App
