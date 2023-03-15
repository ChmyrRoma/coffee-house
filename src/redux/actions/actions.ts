import counterActions from './counterActions'

export const homeAction = () => {
  return {
    type: 'HOME_PAGE_MENU`',
  };
}

export const signAction = () => {
  return {
    type: 'SIGN_STATUS',
  }
}

const allActions = {
  counterActions
}

export default allActions
