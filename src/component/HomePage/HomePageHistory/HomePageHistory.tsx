import React from 'react';
import { Grid } from '@mui/material';

import CoffeeCup from '../../../assets/img/coffee-cup.jpg';

import styles from './HomePageHistory.module.scss';

export const HomePageHistory = () => {
  return (
    <Grid className={styles['home-page-body-history']}>
      <Grid className={styles['content-block']}>
        <img src={CoffeeCup} alt="coffee-cup" className={styles['content-block-photo']} />
      </Grid>
      <Grid className={styles['content-block-text']}>
        <p className={styles['content-block-text-title']}>
          Coffee The Way It Was Meant To Be.
        </p>
        <p className={styles['content-block-text-body']}>
          Coffee is a drink made from a roasted solution of fruits - "beans" of the coffee tree.
          Coffee is most valued for its pronounced harmful effects,
          with the content of coffee alkaloids and theobromine.
          Coffee has been cultivated since the last hours and occupies an
          important place in the culinary traditions of many cultures of the world.
        </p>
      </Grid>
    </Grid>
  )
}
