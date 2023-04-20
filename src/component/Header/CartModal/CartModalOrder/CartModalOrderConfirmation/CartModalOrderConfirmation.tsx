import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import SuccessOrder from '../../../../../assets/icons/success-order.png';

import styles from './CartModalOrderConfirmation.module.scss';

export const CartModalOrderConfirmation = ({ successOrder }: any) => {
  return (
    <Grid className={styles['order-container']}>
      <Grid className={styles['order-container-content']}>
        <Grid className={styles['order-container-content-header']}>
          <h2>Your order has been received</h2>
          <img src={SuccessOrder} alt="success-order" />
        </Grid>
        <Grid className={styles['order-container-content-text']}>
          Thank you for you purchase!
        </Grid>
        <Grid className={styles['order-container-content-footer']}>
          <Grid className={styles['order-container-content-footer-button']} onClick={successOrder}>
            <span>CONTINUE SHOPPING</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
