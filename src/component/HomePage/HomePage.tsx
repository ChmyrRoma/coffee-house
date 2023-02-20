import React from 'react';
import { Grid } from '@mui/material';
import {connect, MapStateToProps} from 'react-redux';
import { homeAction } from '../../redux/actions';

import styles from './HomePage.module.scss';

interface IMapStateToProps {
  homePage: IStateProps
}

interface IStateProps {
  posts: string
}

const HomePage = ({ posts }: any) => {
  return (
    <Grid className={styles.page}>
      <Grid className={styles['page-content']}>Test</Grid>
    </Grid>
  )
}

const mapStateToProps: MapStateToProps<any, any, IMapStateToProps> = (state) => {
  return {
    posts: state.homePage.posts
  }
}

export default connect(mapStateToProps, { homeAction })(HomePage);
