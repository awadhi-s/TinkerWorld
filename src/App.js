import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Chapters from './components/Chapters';


function App() {
  const [showChapters, setShowChapters] = useState(false);

  const handleProceed = () => {
    setShowChapters(true);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Conditionally render Hero or Chapters based on showChapters state */}
        {showChapters ? (
          <Chapters />
        ) : (
          <Hero onProceed={handleProceed} />
        )}

        {/* Define the Routes for different pages */}
        <Routes>
          <Route path="/" element={<Hero onProceed={() => {}} />} />
          <Route path="/" element={<Chapters />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
