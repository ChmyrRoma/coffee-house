import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { homeAction } from '../../redux/actions';

import HomePage from './HomePage';

interface IMapStateToProps {
  homePage: IStateProps
}

interface IStateProps {
  coffeeMenu: ICoffeeMenuProps[]
}

interface ICoffeeMenuProps {
  id: number
  name: string,
  price: number
  img: any
}

const HomePageContainer: React.FC<IStateProps> = ({ coffeeMenu }) => {
  return <HomePage coffeeMenu={coffeeMenu} />
}

const mapStateToProps: MapStateToProps<any, any, IMapStateToProps> = (state) => {
  return {
    coffeeMenu: state.homePage.coffeeMenu
  }
}

export default connect(mapStateToProps, { homeAction })(HomePageContainer);
