import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { CoffeeMenuItems }  from './CoffeeMenuItem/CoffeeMenuItems';
import { CoffeeMenuSideBar } from './CoffeeMenuSideBar/CoffeeMenuSideBar';

import styles from './CoffeeMenu.module.scss';

interface IState {
  title: string
  menuPath: boolean
  activeLink: string
  coffeeCategory: IStateToProps[]
  categories: IStateCategoriesProps[]
}

interface IStateToProps {
  id: number
  name: string
  price: number
  img: string
  link: string
}

interface IStateCategoriesProps {
  id: number
  name: string
  link: string
  img: string
}

export const CoffeeMenu: React.FC<IState> = ({ title, coffeeCategory, categories, menuPath, activeLink }) => {

  const coffeeMenuItems = (coffeeItems: IStateToProps[]) =>
    coffeeItems.map((el: IStateToProps) => (
      <CoffeeMenuItems
        id={el.id}
        name={el.name}
        link={el.link}
        price={el.price}
        content='Show in Menu'
        menuPath={menuPath}
        img={el.img}
      />
    ))

  const coffeeMenuSideBar = () =>
    categories.map(el => <CoffeeMenuSideBar name={el.name} activeLink={activeLink === el.link} link={el.link} />)

  return (
    <Grid className={styles['coffee-menu']}>
      <Grid className={styles['coffee-menu-header']}>
        <Link to="/menu">Menu</Link>
        {title && `|${title}`}
      </Grid>
      <Grid className={styles['coffee-menu-body']}>
        <Grid className={styles['coffee-menu-body-left']}>
          <Grid className={styles['coffee-menu-body-left-title']}>Categories</Grid>
          <Grid>
            {coffeeMenuSideBar()}
          </Grid>
        </Grid>
        <hr className={styles['coffee-menu-body-line']} />
        <Grid className={styles['coffee-menu-body-right']}>
          {coffeeMenuItems(coffeeCategory)}
        </Grid>
      </Grid>
    </Grid>
  )
}
