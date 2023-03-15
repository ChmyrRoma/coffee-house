export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const increaseCount = () => {
  return ({
    type: 'INCREMENT',
  });
}

const decreaseCount = () => {
  return ({
    type: 'DECREMENT',
  });
}

export default {
  increaseCount,
  decreaseCount
}
