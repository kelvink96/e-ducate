import React, { useEffect, useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import {
  AboutUsPage, CoursesPage, ErrorPage404, LandingPage, PricingPage, ProfilePage,
} from './pages';
import { useViewport } from './hooks/useViewport';

function App() {
  const { width } = useViewport();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage isMobile={isMobile} />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </div>
  );
}

export default App;
