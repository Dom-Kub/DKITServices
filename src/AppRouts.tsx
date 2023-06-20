import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_TYPES } from './common/routeType';
import { Footer } from './components/footer';
import { Navigation } from './components/menu';
import { Home } from './components/pages/home';

function AppRouts() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_TYPES.SLASH} element={<Navigation />}>
          <Route path={ROUTE_TYPES.SLASH} element={<Home />} />
          <Route element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouts };
