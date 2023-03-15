import React, {useState} from 'react';
import { connect, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import CoffeeHouse from '../../assets/icons/coffee-house.webp';

import { CustomInput } from '../common/component/CustomInput/CustomInput'
import { HeaderModal } from './HeaderModal/HeaderModal';
import { SignModal } from './SignModal/SignModal';

import { signAction } from '../../redux/actions/actions';

import styles from './Header.module.scss';
import '../common/styles/main.scss';

const Header = ({ signStatus }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogModal, setIsLogModal] = useState(false)

  const coffeeMenu = useSelector((state: any) => state.coffeeMenu);

  const { categories }: any = coffeeMenu

  const handleModal = () => setIsOpen(!isOpen)
  const handleLogModal = () => setIsLogModal(!isLogModal)

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
        <ShoppingBasketOutlinedIcon fontSize="large" />
        <p>0 items</p>
      </Grid>
    </Grid>
  )
}

const mapStateToProp = (state: any) => {
  return {
    signStatus: state.signStatus
  }
}

export default connect(mapStateToProp, { signAction })(Header);
