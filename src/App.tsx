import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';
import SignInContainer from './component/Header/SignPages/SignIn/SignInContainer';

import './App.css';

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
    <div>
      <Routes>
        <Route path="/" element={<CurrentPage />}>
          <Route path="" element={<HomePage store={store} />} />
        </Route>
        <Route path="/login" element={<SignInContainer />} />
        {/*<Route path="/registration" element={<SignUp />} />*/}
      </Routes>
    </div>
  )
}

export default App;
