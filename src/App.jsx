import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<h1>onboarding</h1>}
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
            path="/area/:area"
            element={<h1>search</h1>}
          />
          <Route
            path="/categories/:category"
            element={<h1>search</h1>}
          />
          <Route
            path="/details/:mealID"
            element={<h1>details</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
