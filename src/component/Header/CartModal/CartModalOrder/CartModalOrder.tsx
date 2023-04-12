import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { CustomInput } from '../../../common/component/CustomInput/CustomInput';
import ArrowLeft from '../../../../assets/icons/back-button.png';

import styles from './CartModalOrder.module.scss';

interface ICartModalOrder {
  handleChange: () => void
}

const CartModalOrder: React.FC<ICartModalOrder> = ({ handleChange }) => {
  const [acceptOrder, setAcceptOrder] = useState(false);
  const [correctField, setCorrectField] = useState('');
  const checked = true;
  const [emailValid, setEmailValid]: any = useState({
    content: '',
    status: false,
  });
  const [validContact, setValidContact] = useState({
    name: '',
    surname: '',
    email: '',
    address: '',
  })

  const checkEmailValidation = (event: any) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const value = event.target.value;
    setValidContact({ name: validContact.name, surname: validContact.surname, email: value, address: validContact.address })

    if (value.length <= 0) {
      return setEmailValid({ content: '', status: false })
    }
    if (value.match(validRegex)) {
      return setEmailValid({ content: '', status: true });
    } else {
      return setEmailValid({ content: 'Invalid email address!', status: false });
    }
  }

  const checkFormLength = ({ name, surname, email, address }: any) => {
    if (name.length && surname.length && (email.length && emailValid.status) && address.length) {
      setAcceptOrder(true)
      setCorrectField('')
    } else {
      setCorrectField('This field is empty')
    }
  }

  return (
    <Grid className={styles['modal-container']}>
      <Grid className={styles['modal-container-close-button']} onClick={handleChange}>
        <img src={ArrowLeft} alt="close-icon" />
        <p>BACK TO STORE</p>
      </Grid>
      <Grid className={styles['modal-container-header']}>
        <h2>Contact Information</h2>
      </Grid>
      <Grid className={styles['modal-container-content']}>
        <Grid className={styles['modal-container-content-address']}>
          <CustomInput
            placeholder="First Name"
            onChange={(e: any) => setValidContact({ name: e.target.value, surname: validContact.surname, email: validContact.email, address: validContact.address })}
          />
          {validContact.name.length <= 0 && <p>{correctField}</p>}
          <CustomInput
            placeholder="Last Name"
            onChange={(e: any) => setValidContact({ name: validContact.name, surname: e.target.value, email: validContact.email, address: validContact.address })}
          />
          {validContact.surname.length <= 0 && <p>{correctField}</p>}
          <CustomInput
            placeholder="Email"
            type="email"
            onChange={checkEmailValidation}
          />
          {validContact.email.length <= 0 && <p>{correctField}</p>}
          <p className={styles['modal-container-content-address-valid-text']}>{emailValid.content}</p>
          <CustomInput
            placeholder="Address"
            onChange={(e: any) => setValidContact({ name: validContact.name, surname: validContact.surname, email: validContact.email, address: e.target.value })}
          />
          {validContact.address.length <= 0 && <p>{correctField}</p>}
        </Grid>
        <p className={styles['modal-container-content-payment-method']}>Payment Method</p>
        <Grid className={styles['modal-container-content-checkbox']}>
          <input type="checkbox" id="cash" value="cash" checked={checked} />
          <label htmlFor="cash">Cash</label>
        </Grid>
      </Grid>
      <Grid className={styles['modal-container-footer']}>
        <Grid
          className={styles['modal-container-footer-button']}
          onClick={() => checkFormLength(validContact)}
        >
          <p>Confirm Order</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartModalOrder;
