const POST = 'POST';

const initialState = {
  posts: [{
    1: 'coffee',
    2: 'tea',
    3: 'latte'
  }]
}

export const HomePageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST:
      const title = 'Test'
      return {...state, title}
    default:
      return state
  }
}
