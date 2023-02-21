import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { homeAction } from '../../redux/actions';

import { HomePage } from './HomePage';

interface IMapStateToProps {
  homePage: IStateProps
}

interface IStateProps {
  posts: string
}

const HomePageContainer = ({ posts }: any) => {
  return <HomePage />
}

const mapStateToProps: MapStateToProps<any, any, IMapStateToProps> = (state) => {
  return {
    posts: state.homePage.posts
  }
}

export default connect(mapStateToProps, { homeAction })(HomePageContainer);
