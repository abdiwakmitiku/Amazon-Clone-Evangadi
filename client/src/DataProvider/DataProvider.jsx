import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../Utility/reducer";

export const DataContext = createContext();

const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
