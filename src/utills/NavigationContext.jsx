
import { createContext, useContext, useRef } from "react";

export const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <NavigationContext.Provider
      value={{
        refs: {
          homeRef,
          aboutRef,
          servicesRef,
          portfolioRef,
          partnersRef,
          contactRef,
        },
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
