import React from 'react';
import { Grid } from '@mui/material';
import { CustomInput } from '../../../common/component/CustomInput/CustomInput';
import { Button } from '../../../common/component/CustomButton/Button';
import BackButton from '../../../../assets/icons/back-button.png'

import styles from './SignIn.module.scss';
import {Link} from "react-router-dom";

export const SignIn = () => {
  return (
    <Grid className={styles['signIn-content']}>
      <Link to="/" className={styles['signIn-content-back-button']}>
        <img src={BackButton} alt="back-button" />
        <p>Back</p>
      </Link>
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
          <Button content="Click" />
        </Grid>
      </Grid>
    </Grid>
  )
}
