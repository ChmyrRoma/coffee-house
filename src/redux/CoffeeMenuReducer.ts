const COFFEE_MENU = 'COFFEE_MENU';

const initialState = {
  menu: {
    coffeeLatteMenu: [
      {id: 1, name: 'Coffee Latte', price: '$11.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133672.jpg'},
      {id: 2, name: 'Coffee Ice Latte', price: '$15.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133673.jpg'},
      {id: 3, name: 'Coffee Latte Macchiato', price: '$14.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133674.jpg'},
      {id: 4, name: 'Coffee Latte Classic', price: '$13.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133675.jpg'},
      {id: 5, name: 'Coffee Latte Cinnamon', price: '$16.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133676.jpg'},
      {id: 6, name: 'Pumpkin-Spiced Coffee Latte', price: '$16.00', img: 'https://www.segodnya.ua/img/forall/users/3241/324106/new/depositphotos_167229816_m-2015.jpg'},
      {id: 7, name: 'Ginger-Gingerbread Coffee Latte', price: '$12.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133677.jpg'},
      {id: 8, name: 'Coffee Latte Cheese', price: '$13.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133678.jpg'},
      {id: 9, name: 'Banana Coffee Latte', price: '$15.00', img: 'https://cdn.goodhouse.com.ua/images-jpg/13367/133679.jpg'}
    ],
    coffeeMochaMenu: [
      {id: 1, name: 'Iced Caramel Mocha', price: '$11.00', img: 'https://opencart.webdigify.com/OPC04/OPC099_coffee/image/cache/catalog/09-1000x1000.jpg'},
      {id: 2, name: 'Mocha Frappé', price: '$14.00', img: 'https://opencart.webdigify.com/OPC04/OPC099_coffee/image/cache/catalog/03-1000x1000.jpg'},
      {id: 3, name: 'Mocha', price: '$9.00', img: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?quality=90&webp=true&resize=600,545'},
      {id: 4, name: 'Mocha porridge', price: '$16.00', img: 'https://images.immediate.co.uk/production/volatile/sites/2/2020/12/Mocha-Porridge-4f26762.jpg?quality=90&webp=true&resize=600,545'},
      {id: 5, name: 'Mocha Latte Recipe', price: '$10.00', img: 'https://www.spoonfulofflavor.com/wp-content/uploads/2021/11/mocha-latte-recipe.jpg'},
      {id: 6, name: 'Frozen Mocha Frappuccino', price: '$18.00', img: 'https://www.roastycoffee.com/wp-content/uploads/Frozen-Mocha-Frappuccino-Recipe.png'}
    ],
    coffeeCappuccinoMenu: [
      {id: 1, name: 'Easy Cappuccino', price: '$15.00', img: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps37407_THE1213734_37407_WEB.jpg'},
      {id: 2, name: 'Keto Whipped Coffee Cappuccino', price: '$12.00', img: 'https://how2doketo.com/wp-content/uploads/2021/01/Keto-Whipped-Cappuccino-1-500x500.jpg'},
      {id: 3, name: 'Cappuccino', price: '$8.00', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg'},
      {id: 4, name: 'Cappuccino Rapide', price: '$10.00', img: 'https://img.cuisineaz.com/1024x576/2018/12/12/i145259-cappuccino-au-thermomix.jpeg'},
    ],
    greenTeaMenu: [
      {id: 1, name: 'Green Tea', price: '$5.00', img: 'https://static-bebeautiful-in.unileverservices.com/green-tea-youthful-skin-secret_1.jpg'},
      {id: 2, name: 'Cinnamon Green Tea', price: '$5.99', img: 'https://static.toiimg.com/photo/78092190.cms'},
      {id: 3, name: 'Lemon-Ginger Green Tea', price: '$6.00', img: 'https://www.thespruceeats.com/thmb/bevv5BuE22jGYxztejTzfZ1X7V0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/green-tea-with-lemon-5828c5665f9b58d5b1141810.jpg'},
      {id: 4, name: 'Matcha Green Tea', price: '$7.00', img: 'https://images.prom.ua/2538642632_chaj-matcha-latte.jpg'},
      {id: 5, name: 'Green Tea Infused With Apples & Cinnamon', price: '$7.00', img: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/02/GreenTeaCinnamonApples-497484228-770x533-1.jpg'},
    ],
    blackCoffeeMenu: [
      {id: 1, name: 'Black Coffee', price: '$6.00', img: 'https://www.collinsdictionary.com/images/full/blackcoffee_114233497_1000.jpg'},
      {id: 2, name: 'Black Coffee with Milk', price: '$7.99', img: 'https://www.kindpng.com/picc/m/355-3550110_cappuccino-png-coffee-in-white-background-transparent-png.png'},
      {id: 3, name: 'Iced Coffee', price: '$6.40', img: 'https://cdn.shopify.com/s/files/1/1135/9368/products/GCB_ICED_COFFEE_REDUX_2000x2000.jpg?v=1565306516'},
      {id: 4, name: 'Black Coffee with Whipped Cream', price: '$7.00', img: 'https://coffeeaffection.com/wp-content/uploads/2021/08/a-glass-of-coffee-with-whipped-cream.jpg'},
    ],
    cupcakeMenu: [
      {id: 1, name: 'Black Coffee', price: '$8.00', img: 'https://www.collinsdictionary.com/images/full/blackcoffee_114233497_1000.jpg'},
      {id: 2, name: 'Black Coffee with Milk', price: '$9.99', img: 'https://www.kindpng.com/picc/m/355-3550110_cappuccino-png-coffee-in-white-background-transparent-png.png'},
      {id: 3, name: 'Iced Coffee', price: '$8.40', img: 'https://cdn.shopify.com/s/files/1/1135/9368/products/GCB_ICED_COFFEE_REDUX_2000x2000.jpg?v=1565306516'},
      {id: 4, name: 'Black Coffee with Whipped Cream', price: '$10.00', img: 'https://coffeeaffection.com/wp-content/uploads/2021/08/a-glass-of-coffee-with-whipped-cream.jpg'},
    ],
    blackTeaMenu: [
      {id: 1, name: 'Black Coffee', price: '$4.00', img: 'https://www.collinsdictionary.com/images/full/blackcoffee_114233497_1000.jpg'},
      {id: 2, name: 'Black Coffee with Milk', price: '$4.99', img: 'https://www.kindpng.com/picc/m/355-3550110_cappuccino-png-coffee-in-white-background-transparent-png.png'},
      {id: 3, name: 'Iced Coffee', price: '$4.40', img: 'https://cdn.shopify.com/s/files/1/1135/9368/products/GCB_ICED_COFFEE_REDUX_2000x2000.jpg?v=1565306516'},
      {id: 4, name: 'Black Coffee with Whipped Cream', price: '$5.00', img: 'https://coffeeaffection.com/wp-content/uploads/2021/08/a-glass-of-coffee-with-whipped-cream.jpg'},
    ],
    espressoMenu: [
      {id: 1, name: 'Black Coffee', price: '$5.00', img: 'https://www.collinsdictionary.com/images/full/blackcoffee_114233497_1000.jpg'},
      {id: 2, name: 'Black Coffee with Milk', price: '$5.99', img: 'https://www.kindpng.com/picc/m/355-3550110_cappuccino-png-coffee-in-white-background-transparent-png.png'},
      {id: 3, name: 'Iced Coffee', price: '$5.70', img: 'https://cdn.shopify.com/s/files/1/1135/9368/products/GCB_ICED_COFFEE_REDUX_2000x2000.jpg?v=1565306516'},
      {id: 4, name: 'Black Coffee with Whipped Cream', price: '$6.50', img: 'https://coffeeaffection.com/wp-content/uploads/2021/08/a-glass-of-coffee-with-whipped-cream.jpg'},
    ],
    hotChocolateMenu: [
      {id: 1, name: 'Black Coffee', price: '$6.00', img: 'https://www.collinsdictionary.com/images/full/blackcoffee_114233497_1000.jpg'},
      {id: 2, name: 'Black Coffee with Milk', price: '$7.99', img: 'https://www.kindpng.com/picc/m/355-3550110_cappuccino-png-coffee-in-white-background-transparent-png.png'},
      {id: 3, name: 'Iced Coffee', price: '$6.40', img: 'https://cdn.shopify.com/s/files/1/1135/9368/products/GCB_ICED_COFFEE_REDUX_2000x2000.jpg?v=1565306516'},
      {id: 4, name: 'Black Coffee with Whipped Cream', price: '$7.00', img: 'https://coffeeaffection.com/wp-content/uploads/2021/08/a-glass-of-coffee-with-whipped-cream.jpg'},
    ]
  },
  categories: [
    {id: 1, name: 'Coffee Latte', link: '/menu/latte', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-4.png'},
    {id: 2, name: 'Cappuccino', link: '/menu/cappuccino', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-2.png'},
    {id: 3, name: 'Mocha', link: '/menu/mocha', img: 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg?fit=1000%2C1000&ssl=1'},
    {id: 4, name: 'Green Tea',  link: '/menu/green-tea', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-8.png'},
    {id: 5, name: 'Black Coffee', link: '/menu/black-coffee', img: 'https://healthwire.pk/wp-content/uploads/2022/03/black-coffee-benefits.jpg'},
    {id: 6, name: 'Cupcake', link: '/menu/cupcake', img: 'https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/18cb6cf1-1105-4cc3-abcf-448435ee9291/Mary%20Berry%20Chocolate%20Cupcakes%20%20(14).jpg?w=3840&q=85&auto=format&lossless=1'},
    {id: 7, name: 'Black Tea',  link: '/menu/black-tea', img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/319/319646/black-tea.jpg'},
    {id: 8, name: 'Espresso',  link: '/menu/espresso', img: 'https://westcupgroup.com/wp-content/uploads/2020/06/1_4FzJWow3qJOV_O-3iKgBOw.jpeg'},
    {id: 9, name: 'Hot Chocolate', link: '/menu/hot-chocolate', img: 'https://coffee-point.astemplatedesigns.com/assets/images/Products/Product-6.png'},
  ]
}

export const CoffeeMenuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COFFEE_MENU:
      return {...state}
    default:
      return state
  }
}
