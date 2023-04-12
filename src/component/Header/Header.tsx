import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import CoffeeHouse from '../../assets/icons/coffee-house.webp';

import { CustomInput } from '../common/component/CustomInput/CustomInput'
import { HeaderModal } from './HeaderModal/HeaderModal';
import { SignModal } from './SignModal/SignModal';
import CartModalContainer from './CartModal/CartModalContainer';

import styles from './Header.module.scss';
import '../common/styles/main.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogModal, setIsLogModal] = useState(false)
  const [orderStatus, setOrderStatus] = useState(false);
  const [isCartModal, setIsCartModal] = useState(false)

  const state = useSelector((state: any) => state);

  const { categories }: any = state.coffeeMenu;
  const { signStatus }: any = state.signStatus;
  const { cart }: any = state.coffeeMenuItems;

  console.log('CART::::::::', cart)

  const handleChange = () => setOrderStatus(!orderStatus);


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
       <SignModal isLogModal={isLogModal} handleLogModal={handleLogModal} signStatus={signStatus} />
      </Grid>
      <Grid className="vertical-line" />
      <Grid className={styles['shop-row']}>
        <CartModalContainer
          cart={cart}
          isCartModal={isCartModal}
          handleCartModal={handleCartModal}
          handleChange={handleChange}
          orderStatus={orderStatus}
        />
      </Grid>
    </Grid>
  )
}

export default Header;
