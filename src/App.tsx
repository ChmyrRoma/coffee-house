import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import HomePageContainer from './component/HomePage/HomePageContainer';
import Auth from './component/Header/SignPages/Auth';
import CoffeeMenuContainer from './component/CoffeeMenu/CoffeeMenuContainer';

import './App.css';

const CurrentPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const App = () => {
  const [checkLocation, setCheckLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname === '/menu/latte') return setCheckLocation('latte');
    if (location.pathname === '/menu/cappuccino') return setCheckLocation('cappuccino');
    if (location.pathname === '/menu/mocha') return setCheckLocation('mocha');
    if (location.pathname === '/menu/green-tea') return setCheckLocation('green-tea');
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<CurrentPage />}>
          <Route path="" element={<HomePageContainer />} />
          <Route path="/menu/*" element={<CoffeeMenuContainer />}>
            <Route path={checkLocation} element={<CoffeeMenuContainer />} />
          </Route>
        </Route>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App;
