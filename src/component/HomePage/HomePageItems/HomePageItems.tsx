import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import styles from './HomePageItems.module.scss';

interface ICoffeMenuProps {
  id: number
  name: string
  link: string
  image: string
}

export const HomePageItems: React.FC<ICoffeMenuProps> = ({ id, image, name, link }) => {
  return (
    <Grid key={id} className={styles['items-content']}>
      <Grid className={styles['items-content-photo']}>
        <img src={image} alt="latte" />
      </Grid>
      <Grid className={styles['items-content-name']}>
        {name}
      </Grid>
      <Grid className={styles['items-content-status']}>
        <Link to={link}>
          <p>Show in Menu</p>
        </Link>
      </Grid>
    </Grid>
  )
}
