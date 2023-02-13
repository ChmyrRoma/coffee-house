import React from 'react';

import styles from './CustomInput.module.scss';

export const CustomInput = () => {
  return (
    <div>
      <input placeholder="Search Products Here" className={styles.input} />
    </div>
  )
}