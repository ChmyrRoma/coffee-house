import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignUp } from './SignUp';

import allActions from '../../../../redux/actions/actions';
import { checkEmailValidation, checkFormLength, checkPasswordValidation } from '../../../common/component/validation/Validation';


const SignUpContainer = () => {
  const [acceptOrder, setAcceptOrder]: any = useState(false);
  const [correctField, setCorrectField] = useState('');

  const [emailValid, setEmailValid]: any = useState({
    content: '',
    status: false,
  });
  const [passwordValid, setPasswordValid]: any = useState({
    content: '',
    status: false,
  });
  const [validContact, setValidContact] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  })

  const state = useSelector((state: any) => state);
  const { content }: any = state.signStatus;

  const dispatch = useDispatch()

  const createUser = () => {
    setAcceptOrder(checkFormLength(setAcceptOrder, setCorrectField, emailValid.status, validContact, passwordValid.status))
  }

  useEffect(() => {
    if (acceptOrder) {
      dispatch(allActions.signActions.signUpAction(validContact))
    }
    setAcceptOrder(false)

  }, [acceptOrder])


  return (
    <SignUp
      checkEmailValidation={checkEmailValidation}
      validContact={validContact}
      emailValid={emailValid}
      setValidContact={setValidContact}
      setEmailValid={setEmailValid}
      correctField={correctField}
      setCorrectField={setCorrectField}
      checkPasswordValidation={checkPasswordValidation}
      setPasswordValid={setPasswordValid}
      passwordValid={passwordValid}
      createUser={createUser}
      content={content}
    />
  )
}

export default SignUpContainer;
