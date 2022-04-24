import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

function SubRoutes(props) {
  const routePrefix = '/micro/react1';
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${routePrefix}/home`} element={<Home />} />
        <Route path={`${routePrefix}/list`} element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SubRoutes;
