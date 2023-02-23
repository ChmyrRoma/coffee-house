import React from 'react';
import { Grid } from '@mui/material';

import PhoneIcon from '../../../assets/icons/phone.png';
import EmailIcon from '../../../assets/icons/email.png';
import LocationIcon from '../../../assets/icons/location.jpg';
import ClockIcon from '../../../assets/icons/clock.png';

import styles from './HomePageContact.module.scss';

export const HomePageContact = () => {
  return (
    <Grid className={styles['home-page-body-contact']}>
      <Grid className={styles['home-page-body-contact-title']}>Contact Us</Grid>
      <Grid className={styles['home-page-body-contact-container']}>
        <Grid className={styles['home-page-body-contact-container-content']}>
          <Grid className={styles['content-item']}>
            <img src={PhoneIcon} alt="phone-icon" />
            <h3>Contact</h3>
            <Grid className="margin-top">
              <p>+111-222-333</p>
              <p>+123-456-789</p>
            </Grid>
          </Grid>
          <Grid className={styles['content-item']}>
            <img src={ClockIcon} alt="clock-icon" />
            <h3>Opening Hours</h3>
            <Grid className="margin-top">
              <p>Mon - Fri : 8am - 6pm</p>
              <p>Sat - Sun : 10am - 4pm</p>
            </Grid>
          </Grid>
          <Grid className={styles['content-item']}>
            <img src={EmailIcon} alt="email-icon" />
            <h3>Email</h3>
            <Grid className="margin-top">
              <p>abc@gmail.com</p>
              <p>xyz@gmail.com</p>
            </Grid>
          </Grid>
          <Grid className={styles['content-item']}>
            <img src={LocationIcon} alt="location-icon" />
            <h3>Address</h3>
            <Grid className="margin-top">
              <p>Cherkasy, Ukraine</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
