export type emailValidatorTypes = {
  text: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setValidEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setisBlankemail: React.Dispatch<React.SetStateAction<boolean>>;
};

export type passwordValidatorTypes = {
  text: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setValidPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setisBlankpassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export type usernameValidatorTypes = {
  text: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setValidEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setisBlankemail: React.Dispatch<React.SetStateAction<boolean>>;
};
