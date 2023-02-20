import React from 'react';
import { SignIn } from './SignIn';
import { Grid } from '@mui/material';

import styles from './SignIn.module.scss';


const SignInContainer = () => {
  return (
    <Grid className={styles.signIn}>
      <SignIn />
    </Grid>
  )
}

export default SignInContainer;
