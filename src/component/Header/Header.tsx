import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import CoffeeHouse from '../../assets/icons/coffee-house.webp';

import allActions from '../../redux/actions/actions';
import { CustomInput } from '../common/component/CustomInput/CustomInput'
import { HeaderModal } from './HeaderModal/HeaderModal';
import { SignModal } from './SignModal/SignModal';
import CartModalContainer from './CartModal/CartModalContainer';

import styles from './Header.module.scss';
import '../common/styles/main.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogModal, setIsLogModal] = useState(false)
  const [isUserLog, setIsUserLog] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false);
  const [isCartModal, setIsCartModal] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);


  const state = useSelector((state: any) => state);

  const { categories }: any = state.coffeeMenu;
  const { userLog }: any = state.signStatus;
  const { cart }: any = state.coffeeMenuItems;

  const dispatch = useDispatch()

  const handleChange = () => setOrderStatus(!orderStatus);

  const successOrder = () => {
    dispatch(allActions.counterActions.removeCartItems())
    setConfirmOrder(false);
    setOrderStatus(false);
    setIsCartModal(false);
  }

  const handleModal = () => {
    setIsOpen(!isOpen);
    setIsLogModal(false);
  }
  const handleLogModal = () => setIsLogModal(!isLogModal);
  const handleCartModal = () => {
    setIsCartModal(!isCartModal);
    setIsLogModal(false);
    setOrderStatus(false)
  }

  const logOut = () => {
    dispatch(allActions.signActions.logOutAction(userLog))
  }

  useEffect(() => {
    if (userLog.length > 0) {
      setIsUserLog(true)
    } else {
      setIsUserLog(false)
    }
  }, [userLog.length > 0])

  return (
    <Grid className={styles.header}>
      <Grid className={styles.menuIcon}>
        <HeaderModal isOpen={isOpen} handleModal={handleModal} categories={categories} />
      </Grid>
      <Grid className="vertical-line" />
      <Grid className={styles.row}>
        <CustomInput placeholder={"Search Products Here"} customHeaderStyle />
        <SearchIcon />
      </Grid>
      <Grid className="vertical-line" />
      <Grid className={styles['coffee-house-icon']}>
        <Link to="/">
          <img src={CoffeeHouse} alt="coffee-house" />
        </Link>
      </Grid>
      <Grid className="vertical-line" />
      <Grid className={styles.row}>
        <SignModal isLogModal={isLogModal} handleLogModal={handleLogModal} isUserLog={isUserLog} userLog={userLog} logOut={logOut} />
      </Grid>
      <Grid className="vertical-line" />
      <Grid className={styles['shop-row']}>
        <CartModalContainer
          cart={cart}
          isCartModal={isCartModal}
          handleCartModal={handleCartModal}
          handleChange={handleChange}
          orderStatus={orderStatus}
          confirmOrder={confirmOrder}
          setConfirmOrder={setConfirmOrder}
          successOrder={successOrder}
        />
      </Grid>
    </Grid>
  )
}

export default Header;
