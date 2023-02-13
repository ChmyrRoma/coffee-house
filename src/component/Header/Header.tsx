import React from 'react';
import { CustomInput } from '../common/component/CustomInput/CustomInput'

import CoffeeHouse from '../../assets/icons/coffehouse.jpeg';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import styles from './Header.module.scss';
import '../common/styles/main.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menuIcon}>
        <MenuIcon fontSize="medium" />
        <p>Menu</p>
      </div>
      <div className="vertical-line" />
      <div className={styles.row}>
        <CustomInput />
        <SearchIcon />
      </div>
      <div className="vertical-line" />
      <div className={styles['coffee-house-icon']}>
        <img src={CoffeeHouse} alt="coffee-house" />
      </div>
      <div className="vertical-line" />
      <div>
        <h4>Your account</h4>
      </div>
      <div className="vertical-line" />
      <div className={styles['shop-row']}>
        <ShoppingBasketOutlinedIcon fontSize="large" />
        <p>0 items</p>
      </div>
    </div>
  )
}

export default Header;
