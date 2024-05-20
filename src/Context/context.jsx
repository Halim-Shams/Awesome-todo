import React, { useContext, useReducer, useState, useEffect } from "react";
import { reducer } from "../reducer";

const defaultState = {
  activities: [],
  validation: false,
  darkTheme: false,
  alertContent: "",
  alertAction: "",
  alert: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // THEME HUNDLER
  const toggleTheme = () => {
    const switchOn = new Audio("/switch-on.wav");
    const switchOff = new Audio("/switch-off.wav");

    if (state.darkTheme) {
      switchOff.play();
    } else {
      switchOn.play();
    }

    dispatch({ type: "TOGGLE_THEME" });
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (state.alert) {
      //   console.log("Setting up timeout for ALERT_OUT");
      const timeout = setTimeout(() => {
        // console.log("Dispatching ALERT_OUT");
        dispatch({ type: "ALERT_OUT" });
      }, 1000);

      return () => {
        // console.log("Clearing timeout for ALERT_OUT");
        clearTimeout(timeout);
      };
    }
  }, [state.alert]);

  return (
    <AppContext.Provider value={{ toggleTheme, state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
