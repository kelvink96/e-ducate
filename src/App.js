import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
