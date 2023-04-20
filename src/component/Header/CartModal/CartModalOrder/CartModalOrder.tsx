import React, {useEffect, useState} from 'react';
import { Grid } from '@mui/material';

import { CustomInput } from '../../../common/component/CustomInput/CustomInput';
import { checkEmailValidation, checkFormLength } from '../../../common/component/validation/Validation';
import ArrowLeft from '../../../../assets/icons/back-button.png';

import styles from './CartModalOrder.module.scss';

interface ICartModalOrder {
  handleChange: () => void
  confirmOrder: boolean
  setConfirmOrder: (element: boolean) => void
}

const CartModalOrder: React.FC<ICartModalOrder> = ({ handleChange, confirmOrder, setConfirmOrder }) => {
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

  const checkValidForm = () => {
    setAcceptOrder(checkFormLength(setAcceptOrder, setCorrectField, emailValid.status, validContact))
  }

  useEffect(() => {
    if (acceptOrder) {
      setConfirmOrder(!confirmOrder)
    }
    setAcceptOrder(false)

  }, [acceptOrder])


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
            onChange={(e: any) => (
                setValidContact({ name: validContact.name, surname: validContact.surname, email: e.target.value, address: validContact.address }),
                checkEmailValidation(setValidContact, setEmailValid, validContact)
            )}
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
          onClick={checkValidForm}
        >
          <p>Confirm Order</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartModalOrder;
