import React from 'react';
import { Grid } from '@mui/material';

import MenuIcon from '../../../../assets/icons/menu-icons.png';
import CloseIcon from '../../../../assets/icons/close-icon.png';

import styles from './CustomModal.module.scss';


interface ICustomModal {
  isOpen: boolean
  handleModal: () => void
}

export const CustomModal: React.FC<ICustomModal> = ({ isOpen, handleModal }) => {

  const CustomModal = () => {
    return (
      <Grid className={styles.modal}>
        <Grid className={styles['modal-close-button']} onClick={handleModal}>
          <img src={CloseIcon} alt="close-icon" />
          <p>Menu</p>
        </Grid>
        <hr className={styles['horizontal-line']} />
      </Grid>
    )
  }

  return (
    <>
      <Grid className={styles['modal-button']} onClick={handleModal}>
        <img src={MenuIcon} alt="coffee-house" />
        <p>Menu</p>
      </Grid>
      {isOpen ? (
        <Grid className={styles['custom-modal']}>
          <CustomModal />
        </Grid>
      ) : null}
    </>
  )
}
