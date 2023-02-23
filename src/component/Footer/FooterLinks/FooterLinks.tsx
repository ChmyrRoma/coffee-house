import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './FooterLinks.module.scss';

interface IFooterLinks {
  id: number
  img: string
  name: string
  link: string
}

export const FooterLinks: React.FC<IFooterLinks> = ({ id, img, name, link }) => {
  return (
    <Grid className={styles['footer-container-center-links']}>
      <Grid key={id} className={styles['footer-container-center-links-item']}>
        <img src={img} alt="arrow-right" />
        <Link to={link}>
          <p>{name}</p>
        </Link>
      </Grid>
    </Grid>
  )
}
