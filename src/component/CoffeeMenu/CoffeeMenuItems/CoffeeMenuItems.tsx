import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { CoffeeMenuItemModal } from './CoffeeMenuItemModal/CoffeeMenuItemModal';

import styles from './CoffeeMenuItems.module.scss';

interface ICoffeeMenu {
  id: number
  name: string
  price: number
  img: string
  content: string
  description: string
  menuPath: boolean
  link: string
  count: number
}

export const CoffeeMenuItems: React.FC<ICoffeeMenu> = ({
 id, name, price, img, content, menuPath, description,
 link, count
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
        description={description}
        link={link}
        count={count}
      />
    </Grid>
  )
}
