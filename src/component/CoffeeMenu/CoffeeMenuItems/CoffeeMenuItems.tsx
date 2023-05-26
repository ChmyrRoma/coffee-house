import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { CoffeeMenuItemModal } from './CoffeeMenuItemModal/CoffeeMenuItemModal';
import allActions from '../../../redux/actions/actions';

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
  total: number
}

export const CoffeeMenuItems: React.FC<ICoffeeMenu> = ({
 id, name, price, img, content, menuPath, description,
 link, count, total
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  const cartItems = {
    id: id,
    name: name,
    price: price,
    count: 1,
    total: total,
    img: img
  }

  const handleChange = () => {
    setIsOpen(!isOpen);
    dispatch(allActions.counterActions.increaseCount(0))
  }

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
        total={total}
        name={name}
        image={img}
        description={description}
        link={link}
        count={count}
        dispatch={dispatch}
        cartItems={cartItems}
      />
    </Grid>
  )
}
