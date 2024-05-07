import { createContext, useState } from "react";

const initialState = {
  isEnabled: false,
  setIsEnabled: () => {},
  selectedLevel: null,
  setSelectedLevel: () => {}
};

export const ModeContext = createContext(initialState);
export const ModeProvider = ({ children }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);
  
    return <ModeContext.Provider value={{ isEnabled, setIsEnabled, selectedLevel, setSelectedLevel }}>{children}</ModeContext.Provider>;
  };
  