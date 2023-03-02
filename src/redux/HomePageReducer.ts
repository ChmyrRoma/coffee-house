const HOME_PAGE_MENU = 'HOME_PAGE_MENU ';

const initialState = {
  homeCoffeeMenu: [
    {id: 1, name: 'Latte', link: '/menu/latte', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-4.png'},
    {id: 2, name: 'Cappuccino', link: '/menu/cappuccino', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-2.png'},
    {id: 3, name: 'Hot Chocolate', link: '/menu/hot-chocolate', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-6.png'},
    {id: 4, name: 'Mocha', link: '/menu/mocha', img: 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg?fit=1000%2C1000&ssl=1'},
    {id: 5, name: 'Black Coffee', link: '/menu/black-coffee', img: 'https://healthwire.pk/wp-content/uploads/2022/03/black-coffee-benefits.jpg'},
    {id: 6, name: 'Cupcake', link: '/menu/cupcake', img: 'https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/18cb6cf1-1105-4cc3-abcf-448435ee9291/Mary%20Berry%20Chocolate%20Cupcakes%20%20(14).jpg?w=3840&q=85&auto=format&lossless=1'},
  ]
}

export const HomePageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HOME_PAGE_MENU :
      return {...state}
    default:
      return state
  }
}
