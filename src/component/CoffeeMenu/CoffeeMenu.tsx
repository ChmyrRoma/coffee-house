import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { CoffeeMenuItems }  from './CoffeeMenuItems/CoffeeMenuItems';
import { CoffeeMenuSideBar } from './CoffeeMenuSideBar/CoffeeMenuSideBar';

import styles from './CoffeeMenu.module.scss';


interface ICoffeeMenuProps {
  type: string
}

interface IMapStateToProps {
  coffeeMenu: IState
  coffeeMenuItems: any
}

interface IState {
  menu: IStateProps
  categories: IStateCategoriesProps[]
  counter: any
}

interface IStateCategoriesProps {
  id: number
  name: string
  link: string
  img: string
}

interface IStateProps {
  coffeeLatteMenu: IStateToProps[]
  coffeeMochaMenu: IStateToProps[]
  coffeeCappuccinoMenu: IStateToProps[]
  greenTeaMenu: IStateToProps[]
  blackCoffeeMenu: IMapStateToProps[]
  cupcakeMenu: IMapStateToProps[]
  blackTeaMenu: IMapStateToProps[]
  espressoMenu: IMapStateToProps[]
  hotChocolateMenu: IMapStateToProps[]
}

interface IStateToProps {
  id: number
  name: string
  price: number
  total: number
  img: string
  link: string
  description: string
}


const CoffeeMenu: React.FC<ICoffeeMenuProps> = ({ type }) => {

  const state = useSelector((state: IMapStateToProps) => state);

  const { menu, categories } = state.coffeeMenu;
  const { count } = state.coffeeMenuItems;

  console.log('TEST', count)

  const items = [
    { itemType: '', title: '', data: categories },
    { itemType: 'latte', title: 'Latte', data: menu.coffeeLatteMenu },
    { itemType: 'cappuccino', title: 'Cappuccino', data: menu.coffeeCappuccinoMenu },
    { itemType: 'mocha', title: 'Mocha', data: menu.coffeeMochaMenu },
    { itemType: 'green-tea', title: 'Green Tea', data: menu.greenTeaMenu },
    { itemType: 'black-coffee', title: 'Black Coffee', data: menu.blackCoffeeMenu },
    { itemType: 'cupcake', title: 'Cupcake', data: menu.cupcakeMenu },
    { itemType: 'black-tea', title: 'Black Tea', data: menu.blackTeaMenu },
    { itemType: 'espresso', title: 'Espresso', data: menu.espressoMenu },
    { itemType: 'hot-chocolate', title: 'Hot Chocolate', data: menu.hotChocolateMenu },
  ]

  const coffeeMenuItems = (sideBar: boolean) => {
    return items.map(({ itemType, data, title }) => (
      sideBar ? (
        <CoffeeMenuSideBar name={title} activeLink={type === itemType} link={`/menu/${itemType}`} />
      ) : (
        (type === itemType) && data.map(({ id, name, price, img, description, link, total }: any) => (
          <CoffeeMenuItems
            id={id}
            name={name}
            price={price}
            total={total}
            menuPath={type === ''}
            content='Show in Menu'
            img={img}
            description={description}
            link={link}
            count={count}
          />
        ))
      )
    ))
  }

  return (
    <Grid className={styles['coffee-menu']}>
      <Grid className={styles['coffee-menu-header']}>
        <Link to="/menu">Menu</Link>
      </Grid>
      <Grid className={styles['coffee-menu-body']}>
        <Grid className={styles['coffee-menu-body-left']}>
          <Grid className={styles['coffee-menu-body-left-title']}>Categories</Grid>
          <Grid>
            {coffeeMenuItems(true)}
          </Grid>
        </Grid>
        <hr className={styles['coffee-menu-body-line']} />
        <Grid className={styles['coffee-menu-body-right']}>
          {coffeeMenuItems(false)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CoffeeMenu;
