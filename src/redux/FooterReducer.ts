import ArrowRight from '../assets/icons/arrow-right.png';
import PhoneIcon from '../assets/icons/phone.png';
import EmailIcon from '../assets/icons/email.png';
import LocationIcon from '../assets/icons/location.jpg';

const initialState = {
  linksName: [
    {id: 1, img: ArrowRight, name: 'Home', link: ''},
    {id: 2, img: ArrowRight, name: 'Menu', link: '/menu'},
    {id: 3, img: ArrowRight, name: 'Login', link: '/login'},
    {id: 4, img: ArrowRight, name: 'Registration', link: '/register'},
  ],
  sideBarContact: [
    {id: 1, img: PhoneIcon, name: '+111-222-333'},
    {id: 2, img: PhoneIcon, name: '+123-456-789'},
    {id: 3, img: EmailIcon, name: 'abc@gmail.com'},
    {id: 4, img: EmailIcon, name: 'xyz@gmail.com'},
    {id: 4, img: LocationIcon, name: 'Cherkasy, Ukraine'}
  ]
}

export const FooterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}
