import React from 'react';
import { Grid } from '@mui/material';

import styles from './Button.module.scss';

interface IButton {
  content: string
}
export const Button: React.FC<IButton> = ({ content }) => {
  return (
    <Grid>
      <button className={styles.button}>{content}</button>
    </Grid>
  )
}
