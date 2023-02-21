import React from 'react';
import { Grid } from '@mui/material';

import { CustomInput } from '../../../common/component/CustomInput/CustomInput';
import { Button } from '../../../common/component/CustomButton/Button';

import styles from './SignUp.module.scss';

export const SignUp = () => {
  return (
    <Grid className={styles['signUp-content-modal']}>
      <Grid className={styles['signUp-content-modal-data']}>
        <Grid>
          <p>Name</p>
          <CustomInput placeholder="Please enter your Name" />
        </Grid>
        <Grid>
          <p>Surname</p>
          <CustomInput placeholder="Please enter your Surname" />
        </Grid>
        <Grid>
          <p>Email</p>
          <CustomInput placeholder="Please enter your email address" />
        </Grid>
        <Grid>
          <p>Password</p>
          <CustomInput placeholder="Please enter your password" />
        </Grid>
        <Grid className={styles['signUp-content-modal-button']}>
          <Button content="Sign Up" />
        </Grid>
      </Grid>
    </Grid>
  )
}
