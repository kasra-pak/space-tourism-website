import React, {
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from 'react';
import data from '../data';

interface GlobalContent {
  content: typeof data;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const initialValue = {
  content: data,
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
  closeMobileMenu: () => {},
};

const SiteContext = React.createContext<GlobalContent>(initialValue);

function SiteContextProvider({ children }: PropsWithChildren) {
  const [content, setContent] = useState(data);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(prevState => !prevState);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <SiteContext.Provider
      value={{
        content,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

function useSiteContext() {
  return useContext(SiteContext);
}

export { useSiteContext, SiteContextProvider };
