import React from 'react';
import { Grid } from '@mui/material';
import classnames from 'classnames';

import styles from '../CartModal.module.scss';

interface IShoppingCartSummary {
  subTotal: number
  discount?: number
  disabled: boolean
  handleChange: () => void
  reduceToString: (element: number, discount?: number) => number | string

}

export const ShoppingCartSummary: React.FC<IShoppingCartSummary> = ({
 subTotal, discount, disabled, handleChange, reduceToString
}) => {
  return (
    <>
      <Grid className={styles['modal-right-header']}>
        <p>Summary</p>
      </Grid>
      <Grid className={styles['modal-right-body']}>
        <Grid className={styles['modal-right-body-content']}>
          <p>Subtotal</p>
          <b>${reduceToString(subTotal)}</b>
        </Grid>
        <Grid className={styles['modal-right-body-content']}>
          <p>Discount</p>
          <b>%{discount}</b>
        </Grid>
      </Grid>
      <Grid className={styles['modal-right-footer']}>
        <Grid className={styles['modal-right-footer-text']}>
          <p>Total</p>
          <b>${reduceToString(subTotal, discount)}</b>
        </Grid>
        <Grid
          className={classnames({
            [styles['modal-right-footer-button']]: true,
            [styles['modal-right-footer-button-disabled']]: disabled
          })}
          onClick={handleChange}
        >
          <p>Checkout</p>
        </Grid>
      </Grid>
    </>
  )
}
