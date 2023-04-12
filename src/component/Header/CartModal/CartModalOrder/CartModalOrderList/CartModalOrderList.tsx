import React from 'react';
import { Grid } from '@mui/material';

import styles from './CartModalOrderList.module.scss';

interface ICartModalOrderList {
  handleChange: () => void
  reduceToString: (element: number, discount?: number) => number | string
  items: ICartItems[]
  subTotal: number
}

interface ICartItems {
  id: number
  name: string
  price: number
  total: number
  img: string
  count: number
}

export const CartModalOrderList: React.FC<ICartModalOrderList>= ({ handleChange, items, subTotal, reduceToString }) => {
  return (
    <Grid className={styles['modal-container']}>
      <Grid className={styles['modal-container-header']}>
        <Grid className={styles['modal-container-header-text']}>Items</Grid>
        <Grid className={styles['modal-container-header-button']} onClick={handleChange}>Back to cart</Grid>
      </Grid>
      <Grid className={styles['modal-container-content']}>
        { items.map((el: ICartItems) => (
          <Grid className={styles['modal-container-content-items']}>
            <Grid className={styles['modal-container-content-items-name']}>{el.name}</Grid>
            <Grid className={styles['modal-container-content-items-count']}>{el.count} cup</Grid>
            <Grid className={styles['modal-container-content-items-total']}>${reduceToString(el.total)}</Grid>
          </Grid>
        ))
        }
      </Grid>
      <Grid className={styles['modal-container-footer']}>
        <p>Total</p>
        <p>${subTotal}</p>
      </Grid>
    </Grid>
  )
}
