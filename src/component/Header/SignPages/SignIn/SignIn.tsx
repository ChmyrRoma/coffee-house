import React from 'react';
import { Grid } from '@mui/material';
import { CustomInput } from '../../../common/component/CustomInput/CustomInput';
import { Button } from '../../../common/component/CustomButton/Button';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  return (
    <Grid className={styles['signIn-content-modal']}>
      <Grid className={styles['signIn-content-modal-data']}>
        <Grid>
          <p>Email</p>
          <CustomInput placeholder="Please enter your email address" />
        </Grid>
        <Grid>
          <p>Password</p>
          <CustomInput placeholder="Please enter your password" />
        </Grid>
      </Grid>
      <Grid className={styles['signIn-content-modal-button']}>
        <Button content="Login" />
      </Grid>
    </Grid>
  )
}
