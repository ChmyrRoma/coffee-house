import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SignIn } from './SignIn';

import { checkEmailValidation, checkFormLength, checkPasswordValidation } from '../../../common/component/validation/Validation';
import allActions from '../../../../redux/actions/actions';


const SignInContainer = () => {
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
    email: '',
    password: '',
  })

  const state = useSelector((state: any) => state);
  const { userLog, userLogError, userLogStatus }: any = state.signStatus;

  console.log('sdadsadasda', userLog)

  const dispatch = useDispatch()

  const signIn = () => {
    setAcceptOrder(checkFormLength(setAcceptOrder, setCorrectField, emailValid.status, validContact, passwordValid.status))
  }

  useEffect(() => {
    if (acceptOrder) {
      dispatch(allActions.signActions.signInAction(validContact))
    }
    setAcceptOrder(false)

  }, [acceptOrder])

  const navigate = useNavigate();

  useEffect(() => {
    if (userLogStatus) {
      navigate("/");
    }
  }, [userLog.length]);


  return (
    <SignIn
      signIn={signIn}
      validContact={validContact}
      setValidContact={setValidContact}
      checkEmailValidation={checkEmailValidation}
      checkPasswordValidation={checkPasswordValidation}
      emailValid={emailValid}
      correctField={correctField}
      setEmailValid={setEmailValid}
      passwordValid={passwordValid}
      setPasswordValid={setPasswordValid}
      emailError={userLogError.email}
      passwordError={userLogError.password}
      userLogStatus={userLogStatus}
    />
  )
}

export default SignInContainer;
