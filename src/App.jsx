import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Areas from "./components/pages/Areas/Areas"
import Onboarding from "./components/pages/Onboarding/Onboarding"
import SpashScreen from "./components/pages/SpashScreen/SplashScreen"
import Details from "./components/pages/Details/Details"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SpashScreen />}
          />
          <Route
            path="/onboarding"
            element={<Onboarding />}
          />
          <Route
            path="/home"
            element={<h1>home</h1>}
          />
          <Route
            path="/search/:searchTerm"
            element={<h1>search</h1>}
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
