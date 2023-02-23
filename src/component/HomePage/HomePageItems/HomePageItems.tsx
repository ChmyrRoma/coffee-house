import React from 'react';
import { Grid } from '@mui/material';

import styles from './HomePageItems.module.scss';

interface ICoffeMenuProps {
  id: number
  name: string,
  price: number
  image: any
}

export const HomePageItems: React.FC<ICoffeMenuProps> = ({ id, image, name, price }) => {
  return (
    <Grid key={id} className={styles['items-content']}>
      <Grid className={styles['items-content-photo']}>
        <img src={image} alt="latte" />
      </Grid>
      <Grid className={styles['items-content-name']}>
        {name}
      </Grid>
      <Grid className={styles['items-content-price']}>
        <p>{price}</p>
      </Grid>
    </Grid>
  )
}
