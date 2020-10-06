import React,{ createContext , useContext , useReducer } from 'react';

// * Prepares the Data Layer
export const StateContext = createContext();

// * Wrap our app and provide it to the Data Layer

export const StateProvider = ({ reducer ,initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>
)

// * pull information from the Data Layer

export const useStateValue = () => useContext(StateContext);