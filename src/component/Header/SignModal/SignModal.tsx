import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import KeyboardArrowDown from '../../../assets/icons/keyboard-down.png'
import KeyboardArrowTop from '../../../assets/icons/keyboard-top.png'

import styles from './SignModal.module.scss';


interface ILogModal {
  isLogModal: boolean
  handleLogModal: () => void
  isUserLog: boolean
  userLog: IUserLog[]
  logOut: any
}

interface IUserLog {
  name: string,
  email: string,
  password: string,
  surname: string,
}

export const SignModal: React.FC<ILogModal> = ({
 isLogModal, handleLogModal, isUserLog, userLog, logOut
}) => {
  const LogModalContent = () => {
    return (
      <Grid className={classnames({ [styles['log-modal']]: true, [styles['log-modal-with-user-log']]: isUserLog })}>
        { isUserLog ? (
          <p className={styles['log-modal-with-user-log-text']} onClick={logOut}>
            Log Out
          </p>
        ) : (
          <>
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
          </>
        )}
      </Grid>
    )
  }

  return (
    <Grid className={styles['log-modal-preview']}>
      <Grid className={styles['log-modal-preview-text']} onClick={handleLogModal}>
        <h4>
          { isUserLog ? (userLog.map((el) => `${el.name} ${el.surname}`)) : 'Your Account'}
        </h4>
        <img src={isLogModal ? KeyboardArrowTop : KeyboardArrowDown} alt="keyboard-arrow" />
      </Grid>
      <Grid className={styles.modal}>
        { isLogModal ? <LogModalContent /> : null }
      </Grid>
    </Grid>
  )
}
