export const checkValidData = (email, password, fullname) => {
  let emailregex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  let passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const isEmailValid = emailregex.test(email);
  const isPasswordValid = passwordregex.test(password);

  let fullnameValid = true;
  if (fullname !== "") {
    let fullnameregrex =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    fullnameValid = fullnameregrex.test(fullname);
  }

  if (!isEmailValid) return "Email id not Valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!fullnameValid) return "Name is not valid";
  return null;
};
