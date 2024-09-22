import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {

  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <Footer />
    </div>
  )
}

export default App
