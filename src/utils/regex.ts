export const emailRegex =
  /^[A-Z_%+-]+[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
export const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
