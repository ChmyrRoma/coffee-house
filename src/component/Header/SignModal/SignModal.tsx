import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import KeyboardArrowDown from '../../../assets/icons/keyboard-down.png'
import KeyboardArrowTop from '../../../assets/icons/keyboard-top.png'

import styles from './SignModal.module.scss';


interface ILogModal {
  isLogModal: boolean
  handleLogModal: () => void
  signStatus: object
}

export const SignModal: React.FC<ILogModal> = ({ isLogModal, handleLogModal, signStatus }) => {
  const LogModalContent = () => {
    return (
      <Grid className={styles['log-modal']}>
        <Grid className={styles['log-modal-sign']}>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </Grid>
        <Grid className={styles['log-modal-sign']}>
          <Link to="/register">
            <p>Register</p>
          </Link>
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
      <Grid className={styles.modal}>
        { isLogModal ? <LogModalContent /> : null }
      </Grid>
    </Grid>
  )
}
