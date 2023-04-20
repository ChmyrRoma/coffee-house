export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'

const signUpAction = (userData: any) => {
  return ({
    type: SIGN_UP,
    payload: {
      userData,
    }
  })
}

const signInAction = (userData: any) => {
  return ({
    type: SIGN_IN,
    payload: {
      userData,
    }
  })
}

const logOutAction = (userData: any) => {
  return ({
    type: LOG_OUT,
    payload: userData
  })
}

export default {
  signUpAction,
  signInAction,
  logOutAction
}