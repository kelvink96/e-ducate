import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import {
  AboutUsPage, CoursesPage, LandingPage, PricingPage, ProfilePage,
} from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
