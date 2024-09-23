import React, { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Page2 from "./Components/Page2/Page2.jsx";

function PortBuilderPage2(){
    return <div>PortBuilder page 2</div>
}

function PortBuilderPage3(){
    return <div>PortBuilder page 3</div>
}

function App() {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNext = () =>{
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1); // Move to next page
        }
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); // Go back to previous page
        }
    }

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Welcome onNext={handleNext}  />;
            case 2:
                return <Page2 />;
            case 3:
                return <PortBuilderPage3 />;
            default:
                return <Welcome onNext={handleNext} />;
        }
    };

  return (
    <div className="App">
        <Navbar />
        {renderPage()}
        <Footer />
    </div>
  )
}

export default App
