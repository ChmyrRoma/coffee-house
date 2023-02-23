import React from 'react';
import { Grid } from '@mui/material';

import { HomePageHeader } from './HomePageHeader/HomePageHeader';
import { HomePageHistory } from './HomePageHistory/HomePageHistory';
import { HomePageItems } from './HomePageItems/HomePageItems';
import { HomePageContact } from './HomePageContact/HomePageContact';

import Line from '../../assets/img/background-line.png';

import styles from './HomePage.module.scss';

interface IHomePageProps {
  coffeeMenu: ICoffeMenuProps[]
}

interface ICoffeMenuProps {
  id: number
  name: string,
  price: number
  img: any
}


const HomePage: React.FC<IHomePageProps> = ({ coffeeMenu }) => {

  const homePageItems = () => coffeeMenu.map((el) =>
    <HomePageItems id={el.id} image={el.img} name={el.name} price={el.price} />
  )

  return (
    <Grid className={styles['home-page']}>
      <HomePageHeader />
      <Grid className={styles['home-page-body']}>
        <HomePageHistory />
        <img src={Line} alt="line" className={styles.line} />
        <Grid className={styles['home-page-body-menu']}>
          <Grid className={styles['home-page-body-menu-title']}>
            <p>Coffee House Menu Category</p>
          </Grid>
          <Grid className={styles['home-page-body-menu-items']}>
            {homePageItems()}
          </Grid>
        </Grid>
        <Grid className={styles['home-page-body-background']} />
        <HomePageContact />
      </Grid>
    </Grid>
  )
}

export default HomePage;
