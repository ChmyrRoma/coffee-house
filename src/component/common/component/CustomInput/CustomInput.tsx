import React from 'react';
import styles from './CustomInput.module.scss';

interface ICustomInput {
  placeholder?: string
  customHeaderStyle?: boolean
  type?: string
  onChange?: (e: any) => any
}

export const CustomInput: React.FC<ICustomInput> = ({
 placeholder, customHeaderStyle = false, type, onChange
}) => {
  return (
    <div className={styles['custom-input-style']}>
      <input
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={styles[`custom-input-style-${customHeaderStyle ? 'header' : 'default'}`]}
      />
      <span className={styles['focus-border']}></span>
    </div>
  )
}
