import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
import LoginPage from "./pages/LoginPage"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Row } from "react-bootstrap"

function App() {

  return (
    <>
      <Header />
      <LandingPage />
      <Row>
        <Routes>
          <Route exact path="/home" element={<LandingPage />}>  </Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Row>
    </>
  )
}

export default App
