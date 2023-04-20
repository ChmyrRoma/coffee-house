import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import { CustomInput } from '../../../common/component/CustomInput/CustomInput';
import { Button } from '../../../common/component/CustomButton/Button';

import styles from './SignUp.module.scss';

export const SignUp = ({
 checkEmailValidation, validContact, setValidContact, setEmailValid, emailValid, createUser,
 correctField, checkPasswordValidation, setPasswordValid, passwordValid, content
}: any) => {
  return (
    <Grid className={styles['signUp-content-modal']}>
      <Grid className={styles['signUp-content-modal-data']}>
        <Grid className={styles['signUp-content-modal-data-form']}>
          <p>Name</p>
          <CustomInput
            placeholder="Please enter your Name"
            onChange={(e: any) => setValidContact({ name: e.target.value, surname: validContact.surname, email: validContact.email, password: validContact.password })}
          />
          {validContact.name.length <= 0 && <p className={styles['signUp-content-modal-data-form-text-field']}>{correctField}</p>}
        </Grid>
        <Grid className={styles['signUp-content-modal-data-form']}>
          <p>Surname</p>
          <CustomInput
            placeholder="Please enter your Surname"
            onChange={(e: any) => setValidContact({ name: validContact.name, surname: e.target.value, email: validContact.email, password: validContact.password })}
          />
          {validContact.surname.length <= 0 && <p className={styles['signUp-content-modal-data-form-text-field']}>{correctField}</p>}
        </Grid>
        <Grid className={styles['signUp-content-modal-data-form']}>
          <p>Email</p>
          <CustomInput
            placeholder="Please enter your email address"
            onChange={(e: any) => (
              setValidContact({ name: validContact.name, surname: validContact.surname, email: e.target.value, password: validContact.password }),
              checkEmailValidation(setValidContact, setEmailValid, validContact)
            )}
          />
          {validContact.email.length <= 0 && <p className={styles['signUp-content-modal-data-form-text-field']}>{correctField}</p>}
          <p className={styles['signUp-content-modal-data-form-email']}>{emailValid.content}</p>
        </Grid>
        <Grid className={styles['signUp-content-modal-data-form']}>
          <p>Password</p>
          <CustomInput
            placeholder="Please enter your password"
            onChange={(e: any) => (
              setValidContact({ name: validContact.name, surname: validContact.surname, email: validContact.email, password: e.target.value }),
              checkPasswordValidation(setPasswordValid, validContact.password)
            )}
          />
          {validContact.password.length <= 0 && <p className={styles['signUp-content-modal-data-form-text-field']}>{correctField}</p>}
          <p className={styles['signUp-content-modal-data-form-email']}>{passwordValid.content}</p>
        </Grid>
      </Grid>

      <Grid className={styles['signUp-content-modal-button']}>
        <Button
          onClick={() => createUser()}
          content="Sign Up"
        />
      </Grid>
      { content.length > 0 ? (
        <Grid className={styles['signUp-content-modal-text']}>
          <p>{content}</p>
          <Link to="/login">Sign In</Link>
        </Grid>
      ) : (
        <Grid className={styles['signUp-content-modal-button']}>
          <Link to="/login">You already have account?</Link>
        </Grid>
      )}
    </Grid>
  )
}
