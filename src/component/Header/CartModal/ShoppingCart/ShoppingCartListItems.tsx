import React from 'react';
import { Grid } from '@mui/material';
import allActions from '../../../../redux/actions/actions';

import MinusIcon from '../../../../assets/icons/minus.png';
import PlusIcon from '../../../../assets/icons/plus.png';
import DeleteIcon from '../../../../assets/icons/delete-icon.png';

import styles from '../CartModal.module.scss';


interface IShoppingCartListItems {
  key: string
  img: string
  name: string
  count: number
  price: number
  total: number
  id: number
  reduceToString: (element: number, discount?: number) => number | string
  item: any
  dispatch: any
}

export const ShoppingCartListItems: React.FC<IShoppingCartListItems> = ({
 key, img, name, count, price,
  total, reduceToString, item, dispatch, id
}) => {
  return (
    <Grid className={styles['modal-left-content']} key={key}>
      <Grid className={styles['modal-left-content-items']}>
        <img src={img} alt="hot-drink" />
        <Grid className={styles['modal-left-content-items-text']}>
          <p>{name}</p>
        </Grid>
      </Grid>
      <Grid className={styles['modal-left-content-price']}><p>${reduceToString(price)}</p></Grid>
      <Grid className={styles['modal-left-content-quantity']}>
        <Grid onClick={() => dispatch(allActions.counterActions.deleteItem(id, false, null))}><img src={MinusIcon} alt="minus" /></Grid>
        <p>{count}</p>
       <Grid onClick={() => dispatch(allActions.counterActions.addToCart(item))}><img src={PlusIcon} alt="plus" /></Grid>
      </Grid>
      <Grid className={styles['modal-left-content-total']}>
        <p>${reduceToString(total)}</p>
        <Grid
          className={styles['modal-left-content-total-delete-button']}
          onClick={() => dispatch(allActions.counterActions.deleteItem(id, true, item))}
        >
          <img src={DeleteIcon} alt="delete-icon" />
        </Grid>
      </Grid>
    </Grid>
  )
}
