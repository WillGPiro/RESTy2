import React , { createContext } from 'react';

const RestyContext = createContext;

export const RestyProvider = ({ children }) => {
  return (
    <RestyContext.Provider = {}>
      {children}
    </RestyContext.Provider>
  )
};

