import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { CoursesPage, LandingPage } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </div>
  );
}

export default App;
