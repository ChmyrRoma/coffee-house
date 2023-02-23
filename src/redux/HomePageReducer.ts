const POST = 'POST';

const initialState = {
  coffeeMenu: [
    {id: 1, price: 'В наявності', name: 'Latte', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-4.png'},
    {id: 2, price: 'В наявності', name: 'Cappuccino', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-2.png'},
    {id: 3, price: 'В наявності', name: 'Hot Chocolate', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-6.png'},
    {id: 4, price: 'В наявності', name: 'Mocha', img: 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg?fit=1000%2C1000&ssl=1'},
    {id: 5, price: 'В наявності', name: 'Black Coffee', img: 'https://healthwire.pk/wp-content/uploads/2022/03/black-coffee-benefits.jpg'},
    {id: 6, price: 'В наявності', name: 'Green Tea', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-8.png'},
  ]
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
