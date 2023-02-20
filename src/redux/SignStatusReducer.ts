const SIGN_STATUS = 'SIGN_STATUS';

const initialState = {
  login: null,
  register: null
}

export const SignStatusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGN_STATUS:
      const title = 'Test'
      return {...state, title}
    default:
      return state
  }
}
