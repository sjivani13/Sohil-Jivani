import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
<<<<<<< HEAD
=======
// import LoginPage from "./pages/LoginPage"
>>>>>>> 36108bd141f617830e8b578febc837e4e8c1b0cb
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
<<<<<<< HEAD
      <Routes>
        <Route exact path="/" />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />

      </Routes>
      {/* <LandingPage /> */}
      {/* <LoginPage exact path="/login" element={<Navigate to="/login" />} /> */}
=======
      <LandingPage />
>>>>>>> 36108bd141f617830e8b578febc837e4e8c1b0cb
    </>
  )
}

export default App
