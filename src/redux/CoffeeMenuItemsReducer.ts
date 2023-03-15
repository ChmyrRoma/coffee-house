const initialState = {
  count: 0,
}

function handleChange(state: any, change: number) {
  const { count } = state;
  return ({
    count: count + change,
  })
}

export const CoffeeMenuItemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return handleChange(state, +1);
    case 'DECREMENT':
      return handleChange(state, -1);
    default:
      return state
  }
}
