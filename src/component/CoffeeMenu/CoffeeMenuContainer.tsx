import React, { useEffect, useState } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { CoffeeMenu } from './CoffeeMenu';
import { coffeeMenuAction } from '../../redux/actions';


interface IMapStateToProps {
  coffeeMenu: IState
}

interface IState {
  coffeeMenu: IStateProps
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
}


const CoffeeMenuContainer: React.FC<IState> = ({ coffeeMenu, categories }) => {
  const [coffeeCategory, setCoffeeCategory]: object[] | any = useState([]);
  const [title, setTitle] = useState('');
  const [activeLink, setActiveLink] = useState('');

  const location = useLocation()

  const checkPathname = {
    menuPath: location.pathname === '/menu',
    lattePath: location.pathname === '/menu/latte',
    mochaPath: location.pathname === '/menu/mocha',
    cappuccinoPath: location.pathname === '/menu/cappuccino',
    greenTeaPath: location.pathname === '/menu/green-tea',
    blackCoffeePath: location.pathname === '/menu/black-coffee',
    cupcakePath: location.pathname === '/menu/cupcake',
    blackTeaPath: location.pathname === '/menu/black-tea',
    espressoPath: location.pathname === '/menu/espresso',
    hotChocolatePath: location.pathname === '/menu/hot-chocolate',
  }


  useEffect(() => {
    if (checkPathname.menuPath) {
      setTitle('');
      setActiveLink('');
      return setCoffeeCategory(categories);
    }
    if (checkPathname.lattePath) {
      setTitle('Latte')
      setActiveLink('/menu/latte');
      return setCoffeeCategory(coffeeMenu.coffeeLatteMenu);
    }
    if (checkPathname.mochaPath) {
      setTitle('Mocha')
      setActiveLink('/menu/mocha');
      return setCoffeeCategory(coffeeMenu.coffeeMochaMenu);
    }
    if (checkPathname.cappuccinoPath) {
      setTitle('Cappuccino')
      setActiveLink('/menu/cappuccino');
      return setCoffeeCategory(coffeeMenu.coffeeCappuccinoMenu);
    }
    if (checkPathname.greenTeaPath) {
      setTitle('Green Tea')
      setActiveLink('/menu/green-tea');
      return setCoffeeCategory(coffeeMenu.greenTeaMenu);
    }
    if (checkPathname.blackCoffeePath) {
      setTitle('Black Coffee')
      setActiveLink('/menu/black-coffee');
      return setCoffeeCategory(coffeeMenu.blackCoffeeMenu);
    }
    if (checkPathname.cupcakePath) {
      setTitle('Cupcake')
      setActiveLink('/menu/cupcake');
      return setCoffeeCategory(coffeeMenu.cupcakeMenu);
    }
    if (checkPathname.blackTeaPath) {
      setTitle('Black Tea')
      setActiveLink('/menu/black-tea');
      return setCoffeeCategory(coffeeMenu.blackTeaMenu);
    }
    if (checkPathname.espressoPath) {
      setTitle('Espresso')
      setActiveLink('/menu/espresso');
      return setCoffeeCategory(coffeeMenu.espressoMenu);
    }
    if (checkPathname.hotChocolatePath) {
      setTitle('Hot Chocolate')
      setActiveLink('/menu/hot-chocolate');
      return setCoffeeCategory(coffeeMenu.hotChocolateMenu);
    }
  }, [location])


  return (
    <CoffeeMenu
      title={title}
      activeLink={activeLink}
      coffeeCategory={coffeeCategory}
      categories={categories}
      menuPath={checkPathname.menuPath}
    />
  )
}

const mapStateToProps: MapStateToProps<any, any, IMapStateToProps> = (state) => {
  return {
    coffeeMenu: state.coffeeMenu.menu,
    categories: state.coffeeMenu.categories
  }
}

export default connect(mapStateToProps, { coffeeMenuAction })(CoffeeMenuContainer);
