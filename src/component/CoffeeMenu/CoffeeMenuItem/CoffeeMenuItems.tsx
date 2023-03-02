import React from 'react';
import { Grid } from '@mui/material';
import classnames from 'classnames';

import styles from './CoffeeMenuItems.module.scss';
import {Link} from "react-router-dom";

interface ICoffeeMenu {
  id: number
  name: string
  price: number
  img: string
  content: string
  menuPath: boolean
  link: string
}

export const CoffeeMenuItems: React.FC<ICoffeeMenu> = ({
 id, name, price, img, content, menuPath, link
}) => {
  return (
    <Grid key={id} className={styles['coffee-menu-body-container']}>
      <Grid className={styles['coffee-menu-body-container-photo']}>
        <img src={img} alt="hot-drink" />
      </Grid>
      <Grid className={styles['coffee-menu-body-container-name']}>
        {name}
      </Grid>
      <Grid className={styles['coffee-menu-body-container-status']}>
        <p className={classnames({[styles['without-text']]: !menuPath})}>
          <Link to={link}>{price || content}</Link>
        </p>
        <p className={classnames({ [styles['background-text']]: true, [styles['without-background-text']]: !menuPath })}>
          Add to Cart
        </p>
      </Grid>
    </Grid>
  )
}
