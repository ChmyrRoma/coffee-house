import React from 'react';
import styles from './CustomInput.module.scss';

interface ICustomInput {
  placeholder?: string
  customHeaderStyle?: boolean
}

export const CustomInput: React.FC<ICustomInput> = ({ placeholder, customHeaderStyle = false }) => {
  return (
    <div className={styles['custom-input-style']}>
      <input
        placeholder={placeholder}
        className={styles[`custom-input-style-${customHeaderStyle ? 'header' : 'default'}`]}
      />
      <span className={styles['focus-border']}></span>
    </div>
  )
}
