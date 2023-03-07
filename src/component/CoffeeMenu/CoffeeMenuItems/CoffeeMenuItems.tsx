import React, { useState } from 'react';
import { Grid } from '@mui/material';

import styles from './CoffeeMenuItems.module.scss';
import {CoffeeMenuItemModal} from "./CoffeeMenuItemModal/CoffeeMenuItemModal";

interface ICoffeeMenu {
  id: number
  name: string
  price: number
  img: string
  content: string
  link: string
  menuPath: boolean
}

export const CoffeeMenuItems: React.FC<ICoffeeMenu> = ({
 id, name, price, img, content, link, menuPath
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => setIsOpen(!isOpen);

  return (
    <Grid key={id} className={styles['coffee-menu-body-container']}>
      <Grid className={styles['coffee-menu-body-container-photo']}>
        <img src={img} alt="hot-drink" />
      </Grid>
      <Grid className={styles['coffee-menu-body-container-name']}>
        {name}
      </Grid>
      <CoffeeMenuItemModal
        isOpen={isOpen}
        handleChange={handleChange}
        content={content}
        menuPath={menuPath}
        price={price}
        name={name}
        image={img}
      />
    </Grid>
  )
}
