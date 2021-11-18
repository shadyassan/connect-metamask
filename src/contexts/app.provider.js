import React, { createContext, useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

AppStateContext.displayName = 'AppStateContext';
AppDispatchContext.displayName = 'AppDispatchContext';

const initialState = {
  txs: [],
  isValid: false,
  error: false,
  addr: '',
  ether: '',
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_TXS': {
      return {
        ...state,
        txs: action.txs,
      };
    }
    case 'SET_IS_VALID': {
      return {
        ...state,
        isValid: action.isValid,
      };
    }
    case 'SET_FORM_DATA': {
      return {
        ...state,
        ...action.data,
      };
    }
    case 'SET_ERROR': {
      return { ...state, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setError = (error) => dispatch({ type: 'SET_ERROR', error });
  const setTxs = (txs) => dispatch({ type: 'SET_TXS', txs });
  const setIsValid = (isValid) => dispatch({ type: 'SET_IS_VALID', isValid });
  const setFormData = (data) => dispatch({ type: 'SET_FORM_DATA', data });

  const value = useMemo(
    () => ({ ...state, setError, setTxs, setIsValid, setFormData }),
    [state],
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function useApp() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
}
