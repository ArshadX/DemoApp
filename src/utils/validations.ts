import {emailRegex, passwordRegex, usernameRegex} from './regex';
import {
  emailValidatorTypes,
  passwordValidatorTypes,
  usernameValidatorTypes,
} from './typesdef';
// export const emailValidationOnBlur = (email, setisBlankemail) => {
//   if (email === '') {
//     setisBlankemail(true);
//   }
// };
// export const passwordValidationOnBlur = (password, setisBlankpassword) => {
//   if (password === '') {
//     setisBlankpassword(true);
//   }
// };

export const changeEmail = (
  text: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setValidEmail: React.Dispatch<React.SetStateAction<boolean>>,
  setisBlankemail: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let temp = text.trim();
  if (temp === '') {
    setValidEmail(true);
    setEmail('');
  } else {
    setValidEmail(emailRegex.test(temp));
    setEmail(temp);
    setisBlankemail(false);
  }
};

export const changePassword = (
  text: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setValidPassword: React.Dispatch<React.SetStateAction<boolean>>,
  setisBlankpassword: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let temp = text.trim();
  if (temp === '') {
    setValidPassword(true);
    setPassword('');
  } else {
    setValidPassword(passwordRegex.test(temp));
    setPassword(temp);
    setisBlankpassword(false);
  }
};

export const changeUsername = (
  text: String,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  setisValidUsername: React.Dispatch<React.SetStateAction<boolean>>,
  setisBlankUsername: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let temp = text.trim();
  if (temp === '') {
    setisValidUsername(true);
    setUsername('');
  } else {
    setisValidUsername(usernameRegex.test(temp));
    setUsername(temp);
    setisBlankUsername(false);
  }
};
