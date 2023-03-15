import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import HomePageContainer from './component/HomePage/HomePageContainer';
import Auth from './component/Header/SignPages/Auth';
import CoffeeMenu from './component/CoffeeMenu/CoffeeMenu';

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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const items = [
    { type: '' }, { type: 'latte' }, { type: 'cappuccino' }, { type: 'mocha' },
    { type: 'green-tea' }, { type: 'black-coffee' }, { type: 'cupcake' },
    { type: 'black-tea' }, { type: 'espresso' }, { type: 'hot-chocolate' }
  ]

  // const menu = coffeeMenu[type]
  return (
    <>
      <Routes>
        <Route path="/" element={<CurrentPage />}>
          <Route path="" element={<HomePageContainer />} />
          { items.map(({type}) => <Route path={`/menu/${type}`} element={<CoffeeMenu type={type} />} />) }
        </Route>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App;
