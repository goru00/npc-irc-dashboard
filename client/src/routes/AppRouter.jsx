import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/navigation/NavigationBar';
import Home from '../pages/home/Home';
import Planning from '../pages/planning/Planning';

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="mpe_1gem" element={<Planning />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
