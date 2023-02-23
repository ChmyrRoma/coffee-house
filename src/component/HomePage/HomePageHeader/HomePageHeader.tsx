import React from 'react';
import { Grid } from '@mui/material';
import { Button } from '../../common/component/CustomButton/Button';

import styles from './HomePageHeader.module.scss';


export const HomePageHeader = () => {
  return (
    <Grid className={styles['home-page-header']}>
      <Grid className={styles['home-page-header-block']}>
        <Grid>
          <p className={styles['home-page-header-block-quote-one']}>The best stories are told over coffee cup.</p>
        </Grid>
        <Grid>
          <p className={styles['home-page-header-block-quote-two']}>We don`t make your coffee. We make your day</p>
        </Grid>
        <Grid className={styles['home-page-header-block-button']}>
          <Button content="View Menu" />
        </Grid>
      </Grid>
    </Grid>
  )
}
