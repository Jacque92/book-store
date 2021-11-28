export const loginSubmit = () => {
  return { type: "logIn/success", payload: true };
};

// const trueOrFalse = (email, password) => {
//   if (email === "abc" && password === "def") {
//     console.log("success");
//     setUserInput({ email: "", password: "" });
//     setIsLogin(true);
//   } else {
//     console.log("something wrong");
//   }
// };

export const logInReducer = (state = false, action) => {
  switch (action.type) {
    case "logIn/success":
      return action.payload;
    default:
      return state;
  }
};
