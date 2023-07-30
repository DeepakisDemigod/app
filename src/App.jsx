import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx"
import HomePage from "./components/HomePage/HomePage.jsx"
import Playground from "./components/Playground/Playground.jsx"
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App;
