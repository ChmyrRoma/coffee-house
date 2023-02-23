import React from 'react';
import { Grid } from '@mui/material';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { FooterContact } from './FooterContact/FooterContact';

import CoffeeHouse from '../../assets/icons/coffee-house.webp';
import PhoneIcon from '../../assets/icons/phone.png';
import EmailIcon from '../../assets/icons/email.png';
import LocationIcon from '../../assets/icons/location.jpg';
import ArrowRight from '../../assets/icons/arrow-right.png';

import styles from './Footer.module.scss';

const linksName = [
  {id: 1, img: ArrowRight, name: 'Home', link: '/'},
  {id: 2, img: ArrowRight, name: 'Login', link: '/login'},
  {id: 3, img: ArrowRight, name: 'Registration', link: '/register'},
]


const sideBarContact = [
  {id: 1, img: PhoneIcon, name: '+111-222-333'},
  {id: 2, img: PhoneIcon, name: '+123-456-789'},
  {id: 3, img: EmailIcon, name: 'abc@gmail.com'},
  {id: 4, img: EmailIcon, name: 'xyz@gmail.com'},
  {id: 4, img: LocationIcon, name: 'Cherkasy, Ukraine'}
]

const Footer = () => {

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

export default Footer;
