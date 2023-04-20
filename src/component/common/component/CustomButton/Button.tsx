import React from 'react';
import { Grid } from '@mui/material';

import styles from './Button.module.scss';

interface IButton {
  content: string
  onClick?: any
}
export const Button: React.FC<IButton> = ({ content, onClick }) => {
  return (
    <Grid>
      <button className={styles.button} onClick={onClick}>{content}</button>
    </Grid>
  )
}
