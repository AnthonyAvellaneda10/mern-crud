import { Route, Routes } from "react-router-dom"

import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div
        className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} transition-colors duration-300 ease-in-out`}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </>

  )
}

export default App
