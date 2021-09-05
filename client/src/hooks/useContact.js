import React, { useReducer, useContext, createContext } from "react";

// setting initial state for contact form
const initialState = {
  contactFormVisible: false,
  showContactButtonVisible: true,
  hideContactButtonVisible: false,
};
// reducer for hiding and showing contact form
const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CONTACT_FORM":
      return {
        ...state,
        contactFormVisible: true,
        showContactButtonVisible: false,
        hideContactButtonVisible: true,
      };
    case "HIDE_CONTACT_FORM":
      return {
        ...state,
        contactFormVisible: false,
        showContactButtonVisible: true,
        hideContactButtonVisible: false,
      };
    default:
      return state;
  }
};

// create context to provide state to entire app

const contactContext = createContext();

//  context provider that provides the contact state to entire app

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <contactContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </contactContext.Provider>
  );
};

export const useContact = () => {
  return useContext(contactContext);
};

const useProvideContact = () => {
  const { state, dispatch } = useContact();

  // contact functions to pass the action type through dispatch
  const showContact = () => {
    dispatch({
      type: "SHOW_CONTACT_FORM",
    });
  };

  const hideContact = () => {
    dispatch({
      type: "HIDE_CONTACT_FORM",
    });
  };

  return {
    state,
    showContact,
    hideContact,
  };
};
export default useProvideContact;
