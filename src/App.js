import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Planning from '../src/pages/Planning';
import Recipes from '../src/pages/Recipes';

function App() {
  return (
    <Router>
      <div>
        {/* Simple navigation */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/planning">Planning</Link> | <Link to="/recipes">Recipes</Link>
        </nav>

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;