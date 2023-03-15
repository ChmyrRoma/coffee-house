import React from 'react';
import { Grid } from '@mui/material';

import { HomePageHeader } from './HomePageHeader/HomePageHeader';
import { HomePageHistory } from './HomePageHistory/HomePageHistory';
import { HomePageItems } from './HomePageItems/HomePageItems';
import { HomePageContact } from './HomePageContact/HomePageContact';

import Line from '../../assets/img/background-line.png';

import styles from './HomePage.module.scss';

interface IHomePageProps {
  homeCoffeeMenu: IHomeCoffeMenuProps[]
}

interface IHomeCoffeMenuProps {
  id: number
  name: string
  link: string
  img: string
}


const HomePage: React.FC<IHomePageProps> = ({ homeCoffeeMenu }) => {

  const homePageItems = () => homeCoffeeMenu.map((el) =>
    <HomePageItems id={el.id} image={el.img} name={el.name} link={el.link} />
  )

  return (
    <Grid xs={12} className={styles['home-page']}>
      <HomePageHeader />
      <Grid className={styles['home-page-body']} xs={6}>
        <HomePageHistory />
        <img src={Line} alt="line" className={styles.line} />
        <Grid className={styles['home-page-body-menu']} xs={3}>
          <Grid className={styles['home-page-body-menu-title']}>
            <p>Coffee House Top Menu Category</p>
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
