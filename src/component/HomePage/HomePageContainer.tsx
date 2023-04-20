import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import HomePage from './HomePage';

interface IMapStateToProps {
  homePage: IStateProps
}

interface IStateProps {
  homeCoffeeMenu: IHomeCoffeeMenuProps[]
}

interface IHomeCoffeeMenuProps {
  id: number
  name: string
  link: string
  img: string
}

const HomePageContainer: React.FC<IStateProps> = ({ homeCoffeeMenu }) => {
  return <HomePage homeCoffeeMenu={homeCoffeeMenu} />
}

const mapStateToProps: MapStateToProps<any, any, IMapStateToProps> = (state) => {
  return {
    homeCoffeeMenu: state.homePage.homeCoffeeMenu
  }
}

export default connect(mapStateToProps, { })(HomePageContainer);
