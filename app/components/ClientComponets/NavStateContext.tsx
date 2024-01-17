"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type NavState = {
  category: string | null;
  subcategory: string | null;
};

type NavStateProviderProps = {
  children: ReactNode;
};

const NavStateContext = createContext<
  [NavState, React.Dispatch<React.SetStateAction<NavState>>] | undefined
>(undefined);

const NavStateProvider: React.FC<NavStateProviderProps> = ({ children }) => {
  const [navState, setNavState] = useState<NavState>({
    category: null,
    subcategory: null,
  });

  return (
    <NavStateContext.Provider value={[navState, setNavState]}>
      {children}
    </NavStateContext.Provider>
  );
};

const useNavState = () => {
  const context = useContext(NavStateContext);
  if (!context) {
    throw new Error("useNavState must be used within a NavStateProvider");
  }
  return context;
};

export { NavStateContext, NavStateProvider, useNavState };
