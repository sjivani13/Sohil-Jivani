import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
import LoginPage from "./pages/LoginPage"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Row } from "react-bootstrap"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <Header />
      <LandingPage />
      <Row>
        <Routes>
          <Route exact path="/home" element={<LandingPage />}>  </Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Row>
=======
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
>>>>>>> e4acb761f03ac6b2bac605867e8170f9690b54bf
    </>
  )
}

export default App
