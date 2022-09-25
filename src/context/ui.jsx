import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    snackOpen,
    setSnackOpen,
    cartOpen,
    setCartOpen,
    profileOpen,
    setProfileOpen,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
