const initialState = {
  homeCoffeeMenu: [
    {id: 1, name: 'Latte', link: '/menu/latte', img: 'https://athome.starbucks.com/sites/default/files/styles/homepage_banner_xlarge/public/2022-04/CAH_ClassicLatte_Hero.jpg?h=cf77c377&itok=IfuBgei'},
    {id: 2, name: 'Cappuccino', link: '/menu/cappuccino', img: 'https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-superJumbo.jpg'},
    {id: 3, name: 'Hot Chocolate', link: '/menu/hot-chocolate', img: 'https://www.thespruceeats.com/thmb/xQM18fY_pEkluO2pAx5paxqu9A0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/viennese-hot-chocolate-1446540-hero-051-30a64d2bc47649369733670b7820ed5f.jpg'},
    {id: 4, name: 'Mocha', link: '/menu/mocha', img: 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg?fit=1000%2C1000&ssl=1'},
    {id: 5, name: 'Black Coffee', link: '/menu/black-coffee', img: 'https://healthwire.pk/wp-content/uploads/2022/03/black-coffee-benefits.jpg'},
    {id: 6, name: 'Cupcake', link: '/menu/cupcake', img: 'https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/18cb6cf1-1105-4cc3-abcf-448435ee9291/Mary%20Berry%20Chocolate%20Cupcakes%20%20(14).jpg?w=3840&q=85&auto=format&lossless=1'},
  ]
}

export const HomePageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}
