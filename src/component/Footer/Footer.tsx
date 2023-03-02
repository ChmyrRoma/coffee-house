import React from 'react';
import {connect, MapStateToProps} from 'react-redux';
import { Grid } from '@mui/material';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { FooterContact } from './FooterContact/FooterContact';

import CoffeeHouse from '../../assets/icons/coffee-house.webp';

import styles from './Footer.module.scss';

interface IFooter {
  linksName: IState[]
  sideBarContact: IState[]
}

interface IMapStateToProps {
  footer: IFooter
}

interface IState {
  id: number
  name: string
  img: string
  link: string
}

const Footer: React.FC<IFooter> = ({ linksName, sideBarContact }) => {

  const footerLinks = () =>
    linksName.map((el) => <FooterLinks id={el.id} img={el.img} name={el.name} link={el.link} />)

  const footerContact = () =>
    sideBarContact.map((el) => <FooterContact id={el.id} img={el.img} name={el.name} />)

  return (
    <Grid className={styles.footer}>
      <Grid className={styles['footer-container']}>
        <Grid className={styles['footer-container-left']}>
          <img src={CoffeeHouse} alt="coffee-house" />
          <p>
            <b>Be like coffee</b>, strong enough to make a lasting impression on anyone who dares to taste you.
            Good morning, and have a good day
          </p>
        </Grid>
        <Grid className={styles['footer-container-center']}>
          <h2>Quick Links</h2>
          {footerLinks()}
        </Grid>
        <Grid className={styles['footer-container-right']}>
          <h2>Contact Info</h2>
          {footerContact()}
        </Grid>
      </Grid>
    </Grid>
  )
}

const mapStateToProps: MapStateToProps<any, any, IMapStateToProps> = (state) => {
  return {
    linksName: state.footer.linksName,
    sideBarContact: state.footer.sideBarContact
  }
}

export default connect(mapStateToProps)(Footer);
