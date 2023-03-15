import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '../../../assets/icons/menu-icons.png';
import CloseIcon from '../../../assets/icons/close-icon.png';

import styles from './HeaderModal.module.scss';


interface ICustomModal {
  isOpen: boolean
  handleModal: () => void
  categories: object[]
}

export const HeaderModal: React.FC<ICustomModal> = ({ isOpen, handleModal, categories }) => {

  const Modal = () => {
    return (
      <Grid className={styles.modal}>
        <Grid className={styles['modal-close-button']}>
          <p>Menu</p>
          <img src={CloseIcon} alt="close-icon" onClick={handleModal} />
        </Grid>
        { categories.map((el: any) => (
          <Grid>
            <hr className={styles['horizontal-line']} />
            <Grid className={styles.test}>
              <Link to={el.link} onClick={handleModal}>{el.name}</Link>
              <img src={el.img} alt="menu" />
            </Grid>
          </Grid>
          )
        )}

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
          <Modal />
        </Grid>
      ) : null}
    </>
  )
}
