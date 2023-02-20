import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import CoffeeHouse from '../../assets/icons/coffee-house.webp';

import { CustomInput } from '../common/component/CustomInput/CustomInput'
import { CustomModal } from '../common/component/CustomModal/CustomModal';
import { SignModal } from './SignModal/SignModal';

import { signAction } from '../../redux/actions';

import styles from './Header.module.scss';
import '../common/styles/main.scss';

const Header = ({ signStatus }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogModal, setIsLogModal] = useState(false)

  const handleModal = () => setIsOpen(!isOpen)
  const handleLogModal = () => setIsLogModal(!isLogModal)

  return (
    <Grid className={styles.header}>
      <Grid className={styles.menuIcon}>
        <CustomModal isOpen={isOpen} handleModal={handleModal} />
      </Grid>
      <Grid className="vertical-line" />
      <Grid className={styles.row}>
        <CustomInput placeholder={"Search Products Here"} customHeaderStyle />
        <SearchIcon />
      </Grid>
      <Grid className="vertical-line" />
      <Grid className={styles['coffee-house-icon']}>
        <img src={CoffeeHouse} alt="coffee-house" />
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
