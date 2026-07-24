import { createContext, useEffect, useReducer } from "react";
import { getUserApi } from "../api/getUserApi";

export const AppContext = createContext();

const initialState = {
  user: [],
  isAuthenticated: false,
  loginUser: () => {},
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { user: action.payload, isAuthenticated: true };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserApi();
      console.log(data);

      if (data) {
        loginUser(data);
      }
    };

    fetchData();
  }, []);

  const loginUser = (userData) => {
    // console.log("userData from loginUser", userData);

    dispatch({ payload: userData, type: "LOGIN_USER" });
  };

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
