export const checkEmailValidation = (setValidContact: any, setEmailValid: any, validContact: any) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (validContact.email.length <= 0) {
    return setEmailValid({ content: '', status: false })
  }
  if (validContact.email.match(validRegex)) {
    return setEmailValid({ content: '', status: true });
  } else {
    return setEmailValid({ content: 'Invalid email address!', status: false });
  }
}

export const checkFormLength = (setAcceptOrder: any, setCorrectField: any, emailStatus?: boolean, validContact?: any, passwordStatus?: boolean) => {
  const objectValues = Object.values(validContact);
  const objectKeys = Object.keys(validContact);
  let status = false;

  objectKeys?.map((el: any, id) => {
    objectValues?.map((item: any) => {
      if ((validContact[el].length > 0) && (item[id].length > 0)) {
        if (emailStatus || (emailStatus && passwordStatus)) {
          setCorrectField('')
          status = true
          setAcceptOrder(true)
        }
      } else {
        setCorrectField('This field is empty')
        status = false
      }
    })
  })
  return status
}

export const checkPasswordValidation = (setPasswordValid: any, value: any) => {
  const validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (value.length <= 0) {
    return setPasswordValid({ content: '', status: false })
  }

  if (value.match(validRegex)) {
    return setPasswordValid({ content: '', status: true });
  } else {
    return setPasswordValid({ content: 'Minimum eight characters, at least one letter and one number', status: false });
  }
}
