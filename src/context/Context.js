"use client"
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  return (
    <MyContext.Provider value={{ language,setLanguage }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
