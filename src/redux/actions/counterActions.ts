export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS';

const increaseCount = (defaultCount: number) => {
  return ({
    type: INCREMENT,
    payload: defaultCount
  });
}

const decreaseCount = (defaultCount: number) => {
  return ({
    type: DECREMENT,
    payload: defaultCount
  });
}

const addToCart = (items: any) => {
  return ({
    type: ADD_TO_CART,
    payload: items
  });
}

const deleteItem = (itemId: number, itemsStatus: boolean, item: any) => {
  return ({
    type: DELETE_ITEM,
    payload: {
      itemId: itemId,
      itemsStatus: itemsStatus,
      item: item
    }
  })
}

const removeCartItems = () => {
  return ({
    type: REMOVE_CART_ITEMS,
  })
}

export default {
  increaseCount,
  decreaseCount,
  addToCart,
  deleteItem,
  removeCartItems
}
