import React from 'react';
import { Grid } from '@mui/material';

import styles from './FooterContact.module.scss';

interface IFooterContact {
  id: number
  img: string
  name: string
}

export const FooterContact: React.FC<IFooterContact> = ({ id, img, name }) => {
  return (
    <Grid className={styles['footer-container-right-contact']}>
      <Grid key={id} className={styles['footer-container-right-contact-content']}>
        <img src={img} alt="contact-icon" />
        <p>{name}</p>
      </Grid>
    </Grid>
  )
}
