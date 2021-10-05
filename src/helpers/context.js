import React, { useContext, useState, useEffect } from 'react';
import { Mode, useLightSwitch } from 'use-light-switch';
const DarkModeContext = React.createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
  const mode = useLightSwitch();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (mode === Mode.Dark) {
      setIsDarkMode(true);
    }
  }, [mode]);
  
  const value = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
