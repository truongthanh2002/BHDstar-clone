
export const validateFormatPassword = (password) => {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/.test(password);
};

export const validateFormatEmail = (email) => {
  return /^[^@]+@[^@]+\.[^@]{3,}$/.test(email);
};

export const validateDuplePass = (pass,rePass) => {
  return pass === rePass
};
export const validatePhone = (phone) => {
  return /^\d{10,}$/.test(phone);
};