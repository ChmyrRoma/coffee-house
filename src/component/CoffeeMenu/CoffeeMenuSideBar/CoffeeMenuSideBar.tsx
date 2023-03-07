import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import styles from '../CoffeeMenu.module.scss';

interface ICoffeeMenuSideBar {
  name: string
  link: string
  activeLink: boolean
}

export const CoffeeMenuSideBar: React.FC<ICoffeeMenuSideBar> = ({ name, link,activeLink }) => {
  return (
    <Grid className={styles['container']}>
      <Grid className={styles['container-content']}>
        <Link to={link} className={classnames({ [styles['container-content-active-link']]: activeLink })}>
          {name}
        </Link>
      </Grid>
    </Grid>
  )
}
