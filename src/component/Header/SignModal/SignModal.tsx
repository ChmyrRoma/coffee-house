import React, { useEffect } from 'react';
import { Grid } from '@mui/material';

import KeyboardArrowDown from '../../../assets/icons/keyboard-down.png'
import KeyboardArrowTop from '../../../assets/icons/keyboard-top.png'

import styles from './SignModal.module.scss';
import {Link} from "react-router-dom";


interface ILogModal {
  isLogModal: boolean
  handleLogModal: () => void
  signStatus: object
}

export const SignModal: React.FC<ILogModal> = ({ isLogModal, handleLogModal, signStatus }) => {

  useEffect(() => {
    console.log(signStatus)
  }, [])
  const LogModalContent = () => {
    return (
      <Grid className={styles['log-modal']}>
        <Grid className={styles['log-modal-sign']}>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </Grid>
        <Grid className={styles['log-modal-sign']}>
          <p>Register</p>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid className={styles['log-modal-preview']}>
      <Grid className={styles['log-modal-preview-text']} onClick={handleLogModal}>
        <h4>Your Account</h4>
        <img src={isLogModal ? KeyboardArrowTop : KeyboardArrowDown} alt="keyboard-arrow" />
      </Grid>
      <Grid>
        { isLogModal ? <LogModalContent /> : null }
      </Grid>
    </Grid>
  )
}
