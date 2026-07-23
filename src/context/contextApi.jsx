import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  user: [],
  loginUser: () => {},
};

const reducerFn = (state, action) => {
  console.log("state", state);
  console.log("action", action.payload);

  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const loginUser = (userData) => {
    console.log("userData from loginUser", userData);

    dispatch({ payload: userData, type: "LOGIN_USER" });
  };

  return (
    <AppContext.Provider value={{ user: state.user, loginUser }}>
      {children}
    </AppContext.Provider>
  );
};
