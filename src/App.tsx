import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './component/Header/Header';
import HomePageContainer from './component/HomePage/HomePageContainer';

import './App.css';
import Auth from "./component/Header/SignPages/Auth";

const CurrentPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const App = ({ store }: any) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CurrentPage />}>
          <Route path="" element={<HomePageContainer store={store} />} />
        </Route>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App;
