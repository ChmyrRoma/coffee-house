import React from 'react';
import { Grid } from '@mui/material';
import classnames from 'classnames';

import { ShoppingCartListItems } from './ShoppingCartListItems';
import allActions from '../../../../redux/actions/actions';

import ArrowLeft from '../../../../assets/icons/back-button.png';
import ClearCart from '../../../../assets/icons/cart-clear.png';

import styles from '../CartModal.module.scss';


interface ICartModalShoppingCart {
  cart: ICart[]
  dispatch: (e: any) => any
  handleCartModal: () => void
  reduceToString: (element: number, discount?: number) => number | string
  items: ICart[]
}

interface ICart {
  id: number
  name: string
  price: number
  total: number
  img: string
  count: number
}

export const ShoppingCartList: React.FC<ICartModalShoppingCart> = ({ cart, dispatch, handleCartModal, reduceToString, items }) => {
  return (
    <>
      <Grid className={styles['modal-left-close-button']} onClick={handleCartModal}>
        <img src={ArrowLeft} alt="close-icon" />
        <p>BACK TO STORE</p>
      </Grid>
      <Grid className={styles['modal-left-header']}>
        <p className={styles['modal-left-header-title']}>Shopping Cart</p>
        <p className={styles['modal-left-header-items-count']}><b>{cart.length}</b> ITEMS</p>
      </Grid>
      <Grid
        className={classnames({
          [styles['modal-left-header-button']]: true,
          [styles['modal-left-header-button-disabled']]: cart.length <= 0
        })}
        onClick={() => dispatch(allActions.counterActions.removeCartItems())}
      >
        <p>Clear Cart</p>
        <img src={ClearCart} alt="clear-cart" />
      </Grid>
      <Grid className={styles['modal-left-categories']}>
        <Grid className={styles['modal-left-categories-items']}><p>Items</p></Grid>
        <Grid className={styles['modal-left-categories-price']}><p>Price</p></Grid>
        <Grid className={styles['modal-left-categories-quantity']}><p>Quantity</p></Grid>
        <Grid className={styles['modal-left-categories-total']}><p>Total</p></Grid>
      </Grid>
      {/* Start */}
      {items.map((el: any, idx: number) =>
        <ShoppingCartListItems
          key={`${el.name}-${idx}`}
          id={idx}
          total={el.total}
          img={el.img}
          name={el.name}
          count={el.count}
          price={el.price}
          reduceToString={reduceToString}
          item={el}
          dispatch={dispatch}
        />
      )}
      {/* END */}
    </>
  )
}
