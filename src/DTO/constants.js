import { useContext, useState, createContext } from "react";

const ChangeScreen = createContext({
  state: [],
  setState: () => {},
});

export const useChangeScreen = () => useContext(ChangeScreen);

const StateProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <ChangeScreen.Provider value={{ state, setState }}>
      {children}
    </ChangeScreen.Provider>
  );
};

export default StateProvider;