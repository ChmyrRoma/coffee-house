import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import classnames from 'classnames';

import { CustomInput } from '../../../common/component/CustomInput/CustomInput';
import { Button } from '../../../common/component/CustomButton/Button';

import styles from './SignIn.module.scss';

export const SignIn = ({
 signIn, validContact, setValidContact, checkEmailValidation, setEmailValid, emailValid,
 setPasswordValid, checkPasswordValidation, correctField, passwordValid, emailError, passwordError
}: any) => {
  return (
    <Grid
      className={classnames({
        [styles['signIn-content-modal']]: true,
        [styles['signIn-content-modal-with-status']]: emailError.errorStatus && passwordError.errorStatus
      })}
    >
      <Grid className={styles['signIn-content-modal-data']}>
        <Grid className={styles['signIn-content-modal-data-form']}>
          <p>Email</p>
          <CustomInput
            placeholder="Please enter your email address"
            onChange={(e: any) => (
              setValidContact({ email: e.target.value, password: validContact.password }),
              checkEmailValidation(setValidContact, setEmailValid, validContact)
            )}
          />
          <p className={styles['signIn-content-modal-data-form-error']}>{emailError.errorStatus && emailError.errorMessage}</p>
          {validContact.email.length <= 0 && <p className={styles['signIn-content-modal-data-form-text-field']}>{correctField}</p>}
          <p className={styles['signIn-content-modal-data-form-email']}>{ validContact.email.length > 0 && emailValid.content}</p>
        </Grid>
        <Grid className={styles['signIn-content-modal-data-form']}>
          <p>Password</p>
          <CustomInput
            placeholder="Please enter your password"
            type="password"
            onChange={(e: any) => (
              setValidContact({ email: validContact.email, password: e.target.value }),
              checkPasswordValidation(setPasswordValid, validContact.password)
            )}
          />
          <p className={styles['signIn-content-modal-data-form-error']}>{passwordError.errorStatus && passwordError.errorMessage}</p>
          {validContact.password.length <= 0 && <p className={styles['signIn-content-modal-data-form-text-field']}>{correctField}</p>}
          <p className={styles['signIn-content-modal-data-form-email']}>{passwordValid.content}</p>
        </Grid>
      </Grid>
      <Grid className={styles['signIn-content-modal-button']}>
       <Button content="Login" onClick={signIn} />
      </Grid>
      <Grid className={styles['signIn-content-modal-button']}>
        <p>You don`t have account? <Link to="/register">Sign Up!</Link></p>
      </Grid>
    </Grid>
  )
}
