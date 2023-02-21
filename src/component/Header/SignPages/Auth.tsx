import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import classnames from 'classnames';

import SignInContainer from './SignIn/SignInContainer';
import SignUpContainer from './SignUp/SignUpContainer';

import BackButton from '../../../assets/icons/back-button.png';

import styles from './Auth.module.scss';

const Auth = () => {
  const location = useLocation()

  const pathLocation = {
    login: location.pathname === '/login',
    register: location.pathname === '/register',
  }

  const checkLocation = () => {
    if (pathLocation.login) {
      return <SignInContainer />
    }
    if (pathLocation.register) {
      return <SignUpContainer />
    }
  }

  return (
    <Grid className={classnames({
      [styles.sign]: true,
      [styles['sign-background-photo-register']]: pathLocation.register,
      [styles['sign-background-photo-login']]: pathLocation.login,
    })}>
      <Grid className={styles['sign-content']}>
        <Link to="/" className={styles['sign-content-back-button']}>
          <img src={BackButton} alt="back-button" />
          <p>Back</p>
        </Link>
        {checkLocation()}
      </Grid>
    </Grid>
  )
}

export default Auth;
