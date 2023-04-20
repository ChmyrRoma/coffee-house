import { ADD_TO_CART, DECREMENT, DELETE_ITEM, INCREMENT, REMOVE_CART_ITEMS } from './actions/counterActions';

const initialState = {
  count: 0,
  // @ts-ignore
  cart: JSON.parse(localStorage.getItem('cartItem')) || [],
}

const addItemToCart = (state: any, item?: any) => {
  const { count, cart } = state;
  if (count) {
    for (let i = 1; i <= count; i++) {
      cart.push(item)
      localStorage.setItem('cartItem', JSON.stringify([...cart]))
    }
  } else {
    cart.push(item)
    localStorage.setItem('cartItem', JSON.stringify([...cart]))
  }
  return {
    ...state,
    count: 0
  }
}

const deleteItem = (state: any, itemId: number, itemsStatus: boolean, item?: any ) => {
  const { cart } = state;
  if (itemsStatus) {
    const getCommonItems = cart.filter((el: any) => el.name === item.name)

    cart.map((el: any, id: number) => el.name === item.name ? (
      cart.splice(id, getCommonItems.length),
      localStorage.setItem('cartItem', JSON.stringify([...cart]))
    ) : false)
  } else {
    cart.splice(itemId, 1)
    localStorage.setItem('cartItem', JSON.stringify([...cart]))
  }
  return {
    ...state
  }
}

const removeCartItems = (state: any) => {
  const { cart } = state;
  if (cart.length) {
    cart.splice(0, cart.length);
    localStorage.setItem('cartItem', JSON.stringify([...cart]))
  }
  return {
    ...state
  }
}

export const CoffeeMenuItemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload
      };
    case ADD_TO_CART:
      return addItemToCart(state, action.payload)
    case DELETE_ITEM:
      return deleteItem(state, action.payload.itemId, action.payload.itemsStatus, action.payload.item)
    case REMOVE_CART_ITEMS:
      return removeCartItems(state)
    default:
      return state
  }
}
