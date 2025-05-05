import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link classname="site-logo" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )

}
createRoot(document.getElementById('root')).render(<App />);
