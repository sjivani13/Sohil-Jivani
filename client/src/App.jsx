import Dashboard from "./pages/Dashboard"
import Header from "./component/Header/Header"
import LandingPage from "./component/LandingPage/LandingPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import React from "react"
import { Route, Routes } from "react-router-dom"
// import FuzzySearch from "./component/FuzzySearch/FuzzySearch"
import api from "./utils/api.util"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect, useState } from "react"
import OpenRecipe from "./component/OpenRecipe/OpenRecipe"
import RecipeUpload from "./pages/RecipeUpload"
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>



function App() {
  const [recipe, setRecipe] = useState();
  const [isUploaded, setIsUploaded] = useState();
  const [image, setImage] = useState();

  const handleFileChange= (e) => {setImage(e.target.files[0])}
  
  console.log(image)
   useEffect(()=>{
       api.get("/recipes").then((res)=>{console.log(res)
     setRecipe(res.data)
     })
        console.log()
    },[isUploaded])

  
  
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard recipe={recipe} />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/logout" element={<LandingPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/openRecipe/:id" element={<OpenRecipe />} />
        <Route exact path="/recipe" element={<RecipeUpload setIsUploaded={setIsUploaded} handleFileChange={handleFileChange} image={image} setImage={setImage} />} />
      </Routes>
    </>
  )
  }

export default App
