import React from 'react';
import { Grid } from '@mui/material';

import styles from './HomePageItems.module.scss';

interface ICoffeMenuProps {
  id: number
  name: string,
  status: string
  image: string
}

export const HomePageItems: React.FC<ICoffeMenuProps> = ({ id, image, name, status }) => {
  return (
    <Grid key={id} className={styles['items-content']}>
      <Grid className={styles['items-content-photo']}>
        <img src={image} alt="latte" />
      </Grid>
      <Grid className={styles['items-content-name']}>
        {name}
      </Grid>
      <Grid className={styles['items-content-price']}>
        <p>{status}</p>
      </Grid>
    </Grid>
  )
}
