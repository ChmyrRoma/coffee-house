import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { CoffeeMenuItems }  from './CoffeeMenuItems/CoffeeMenuItems';
import { CoffeeMenuSideBar } from './CoffeeMenuSideBar/CoffeeMenuSideBar';

import styles from './CoffeeMenu.module.scss';

interface IMapStateToProps {
  coffeeMenu: IState
}

interface IState {
  menu: IStateProps
  categories: IStateCategoriesProps[]
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
  img: string
  link: string
}

export const CoffeeMenu: React.FC<any> = ({ type }) => {

  const coffeeMenu = useSelector((state: IMapStateToProps) => state.coffeeMenu);
  const { menu, categories }: IState = coffeeMenu;

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


  // const coffeeMenuItems = (itemType: any, data: any, title: any) => {
  //   if (type === itemType) {
  //     return data.map((el: IStateToProps) => (
  //       <CoffeeMenuItems
  //         id={el.id}
  //         name={el.name}
  //         link={el.link}
  //         price={el.price}
  //         menuPath={type === ''}
  //         content='Show in Menu'
  //         img={el.img}
  //       />
  //     ))
  //   }
  // }


  const coffeeMenuItems = (sideBar: boolean) => {
    return items.map(({ itemType, data, title }) => (
      sideBar ? (
        <CoffeeMenuSideBar name={title} activeLink={type === itemType} link={`/menu/${itemType}`} />
      ) : (
        (type === itemType) && data.map((el: any) => (
          <CoffeeMenuItems
            id={el.id}
            name={el.name}
            link={el.link}
            price={el.price}
            menuPath={type === ''}
            content='Show in Menu'
            img={el.img}
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
