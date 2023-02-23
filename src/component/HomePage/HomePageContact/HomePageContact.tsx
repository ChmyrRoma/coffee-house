import React from 'react';
import { Grid } from '@mui/material';

import PhoneIcon from '../../../assets/icons/phone.png';
import EmailIcon from '../../../assets/icons/email.jpg';
import LocationIcon from '../../../assets/icons/location.jpg';
import ClockIcon from '../../../assets/icons/clock.png';


import styles from './HomePageContact.module.scss';

export const HomePageContact = () => {
  return (
    <Grid className={styles['home-page-body-contact']}>
      <Grid className={styles['home-page-body-contact-title']}>Contact Us</Grid>
      <Grid className={styles['home-page-body-contact-container']}>
        <Grid className={styles['home-page-body-contact-container-content']}>
          <Grid>

          </Grid>
          <Grid>

          </Grid>
          <Grid>

          </Grid>
          <Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
