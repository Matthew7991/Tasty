import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Areas from "./components/pages/Areas/Areas"
import Onboarding from "./components/pages/Onboarding/Onboarding"
import SplashScreen from "./components/pages/SpashScreen/SplashScreen"
import Details from "./components/pages/Details/Details"
import Home from "./components/pages/Home/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SplashScreen />}
          />
          <Route
            path="/onboarding"
            element={<Onboarding />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/area"
            element={<Areas />}
          />
          <Route
            path="/categories"
            element={<h1>search</h1>}
          />
          <Route
            path="/details/:mealID"
            element={<Details />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
