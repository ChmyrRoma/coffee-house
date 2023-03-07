import React from 'react';
import classnames from 'classnames';
import { Grid } from '@mui/material';

import CloseIcon from '../../../../assets/icons/close-icon.png';

import styles from './CoffeeMenuItemModal.module.scss';
import {Button} from "../../../common/component/CustomButton/Button";

interface ICoffeeMenuItemModal {
  isOpen: boolean
  handleChange: () => void
  content: string
  menuPath: boolean
  price: number
  name: string
  image: string
}


export const CoffeeMenuItemModal: React.FC<ICoffeeMenuItemModal> = ({
 isOpen, handleChange, content, menuPath, price , name, image
}) => {

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "";
    }
  }, [isOpen])

  const CustomModal = () => {
    return (
      <Grid className={styles['modal-container']}>
        <Grid className={styles['modal-container-header']}>
          <Grid className={styles['modal-container-header-title']}>
            <p>{name}</p>
          </Grid>
          <Grid className={styles['modal-container-header-close-button']} onClick={handleChange}>
            <img src={CloseIcon} alt="close-icon" />
          </Grid>
        </Grid>
        <hr className={styles.inline} />
        <Grid className={styles['modal-container-body']}>
          <Grid className={styles['modal-container-body-img']}>
            <img src={image} alt="coffee-item" />
          </Grid>
          <Grid className={styles['modal-container-body-content']}>
            <hr className={styles.inline} />
            <Grid className={styles['modal-container-body-content-text']}>
              <p>
                An iced latte is a drink with espresso, milk and optional sweetener.
                The milk is often frothed to simulate the steamed milk in a standard latte.
                So what's the difference vs iced coffee? Iced coffee uses brewed coffee and optional milk.
              </p>
            </Grid>
            <hr className={styles.inline} />
            <Grid className={styles['modal-container-body-content-price']}>
              <p>{price}</p>
            </Grid>
            <Grid className={styles['modal-container-body-content-count']}>
              <p className={styles.minus}>-</p>
              <p className={styles.count}>0</p>
              <p className={styles.plus}>+</p>
            </Grid>
            <Grid className={styles['modal-container-body-content-button']}>
              <Button content="Add to Trip" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

 return (
   <Grid>
     <Grid className={styles['coffee-menu-body-container-status']} onClick={handleChange}>
       <p className={classnames({[styles['without-text']]: !menuPath})}>
         <p>{price || content}</p>
       </p>
       <p className={classnames({ [styles['background-text']]: true, [styles['without-background-text']]: !menuPath })}>
         Add to Cart
       </p>
     </Grid>
     {isOpen && (
       <Grid className={styles['modal']}>
         <CustomModal />
       </Grid>
     )}
   </Grid>
 )
}
