import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import CartModalOrder from './CartModalOrder/CartModalOrder';
import { ShoppingCartList } from './ShoppingCart/ShoppingCartList';
import { CartModalOrderList }from './CartModalOrder/CartModalOrderList/CartModalOrderList';
import { CartModalOrderConfirmation } from './CartModalOrder/CartModalOrderConfirmation/CartModalOrderConfirmation';

import { ShoppingCartSummary } from './ShoppingCart/ShoppingCartSummary';
import styles from './CartModal.module.scss';


interface ICartModal {
  cart: ICartItem[]
  isCartModal: boolean
  orderStatus: boolean
  handleCartModal: () => void
  handleChange: () => void
  successOrder: () => void
  confirmOrder: boolean
  setConfirmOrder: any
}

interface ICartItem {
  id: number
  name: string
  price: number
  total: number
  img: string
  count: number
}


const CartModalContainer: React.FC<ICartModal> = ({
 cart, isCartModal, handleCartModal, handleChange, orderStatus, confirmOrder, setConfirmOrder, successOrder
}) => {
  const [items, setItems] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const discount = 0;

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const reduceToString = (element: number, discount?: number) => {
    if (discount) {
      const sum = ((element * discount) / 100);
      const totalLength = sum.toString().length;

      if (totalLength <= 1)
        return `${sum}.00`

      if (element >= 100 && totalLength <= 4) {
        return sum
      }
      if (totalLength <= 4) {
        return `${sum}0`
      }
      return sum.toString().slice(0, 6)
    }

    if (element.toString().length > 2) {
      return element.toString().slice(0, 6)
    } else {
      return `${element}.00`
    }
  }

  const getUnicItems = () => {
    let subtotal = 0;
    // @ts-ignore
    const result: any[] = cart.reduce((acc, item: any) => {
      subtotal += item.price
      
      const getCommonItems = cart.filter((el: any) => el.name === item.name)
      if (getCommonItems) {
        item.count = getCommonItems.length
        item.total = item.count * item.price
      }
      // @ts-ignore
      if (acc.find(el => el.name === item.name)) {
        return acc
      }
      return [...acc, item];
    }, []);
    setItems(result)
    setSubTotal(subtotal)
  }

  useEffect(() => {
    getUnicItems()
    return () => setItems([])
  }, [cart.length, isCartModal])

  useEffect(() => {
    if (isCartModal || !items.length) return
    setItems([])
  }, [isCartModal])

  useEffect(() => {
    if (isCartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isCartModal])

  useEffect(() => {
    if (confirmOrder) {
      navigate("/");
    }
  }, [confirmOrder]);

  const Modal = () => {
    return (
      <Grid className={classnames({ [styles['modal']]: true, [styles['modal-with-order']]: orderStatus })}>
        { !confirmOrder ? (
          <>
            <Grid className={classnames({ [styles['modal-left']]: true, [styles['modal-left-with-order']]: orderStatus })}>
              { !orderStatus ? (
                <ShoppingCartList cart={cart} dispatch={dispatch} handleCartModal={handleCartModal} reduceToString={reduceToString} items={items} />
              ) : (
                <CartModalOrder handleChange={handleCartModal} confirmOrder={confirmOrder} setConfirmOrder={setConfirmOrder} />
              )
              }
            </Grid>
            <Grid className={classnames({ [styles['modal-right']]: true, [styles['modal-right-with-order']]: orderStatus })}>
              { !orderStatus ? (
                <ShoppingCartSummary disabled={cart.length <= 0} subTotal={subTotal} discount={discount} handleChange={handleChange} reduceToString={reduceToString} />
              ) : (
                <CartModalOrderList items={items} handleChange={handleChange} subTotal={subTotal} reduceToString={reduceToString} />
              )}
            </Grid>
          </>
        ) : (
          <Grid className={styles['modal-order-confirmation']}>
            <CartModalOrderConfirmation successOrder={successOrder} />
          </Grid>
        )}
      </Grid>
    )
  }

  return (
    <>
      <Grid className={styles['modal-button']} onClick={handleCartModal}>
        <ShoppingBasketOutlinedIcon fontSize="large" className={styles['modal-button-icon']} />
        <p>{`${cart.length} items`}</p>
      </Grid>
      {isCartModal ? (
        <Grid className={styles['custom-modal']}>
          <Modal />
        </Grid>
      ) : null}
    </>
  )
}

export default CartModalContainer;
