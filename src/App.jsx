import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Areas from "./components/pages/Areas/Areas"
import Onboarding from "./components/pages/Onboarding/Onboarding"
import SplashScreen from "./components/pages/SpashScreen/SplashScreen"
import Details from "./components/pages/Details/Details"
import Categories from "./components/pages/Categories/Categories"
import Home from "./components/pages/Home/Home"
import Login from "./components/pages/Login/Login"
import Register from "./components/pages/Register/Register"
import Favorites from "./components/pages/Favorites/Favorites"

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
            path="/areas"
            element={<Areas />}
          />
          <Route
            path="/categories"
            element={<Categories />}
          />
          <Route
            path="/details/:mealID"
            element={<Details />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
