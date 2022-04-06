import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { navBarOutlets } from './config/Router.config';
import { ROOT } from './constants/Router.constants';
import { Navbar, NavbarLayout } from '../components/Layout/Navbar/NavbarLayout';
export default function Router() {
  return (
    <Routes>
      <Route path={ROOT} element={<RootPage />}>
        {mapToRoutes(navBarOutlets)}
      </Route>
    </Routes>
  );
}

const RootPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const mapToRoutes = (routes) => {
  return routes.map((routeConfig) => {
    const Component = routeConfig.component;
    return <Route key={routeConfig.name} path={routeConfig.path} element={<Component />} />;
  });
};
