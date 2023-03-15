import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import allActions from '../../../../redux/actions/actions';

import { Button } from '../../../common/component/CustomButton/Button';

import CloseIcon from '../../../../assets/icons/close-icon.png';
import CoffeeCup from '../../../../assets/icons/coffeeCup.png'

import styles from './CoffeeMenuItemModal.module.scss';

interface ICoffeeMenuItemModal {
  isOpen: boolean
  handleChange: () => void
  content: string
  menuPath: boolean
  price: number
  name: string
  image: string
  description: string
  link: string
  count: number
}


export const CoffeeMenuItemModal: React.FC<ICoffeeMenuItemModal> = ({
 isOpen, handleChange, content, menuPath, price , name, image,
 description, link, count
}) => {

  const dispatch = useDispatch()


  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "";
    }
  }, [isOpen])

  const Modal = () => {
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
              <p>{description}</p>
            </Grid>
            <hr className={styles.inline} />
            <Grid className={styles['modal-container-body-content-price']}>
              <p>{price}</p>
            </Grid>
            <Grid className={styles['modal-container-body-content-counter']}>
              <Grid className={styles['modal-container-body-content-counter-block']}>
                <Grid className={classnames({ [styles.minus]: true, [styles.disabled]: count <= 0 })} onClick={() => dispatch(allActions.counterActions.decreaseCount())}>
                  <p>-</p>
                  <img src={CoffeeCup} alt="coffee-cup" />
                </Grid>
                <Grid className={styles.count}><p>{count}</p></Grid>
                <Grid className={styles.plus} onClick={() => dispatch(allActions.counterActions.increaseCount())}>
                  <p>+</p>
                  <img src={CoffeeCup} alt="coffee-cup" />
                </Grid>
              </Grid>
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
     <Grid className={styles['coffee-menu-body-container-status']}>
       <p className={classnames({[styles['without-text']]: !menuPath})}>
         <Link to={link}>{price || content}</Link>
       </p>
       <p onClick={handleChange} className={classnames({ [styles['background-text']]: true, [styles['without-background-text']]: !menuPath })}>
         Add to Cart
       </p>
     </Grid>
     {isOpen && (
       <Grid className={styles['modal']}>
         <Modal />
       </Grid>
     )}
   </Grid>
 )
}
