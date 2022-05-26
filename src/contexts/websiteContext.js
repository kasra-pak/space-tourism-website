import React, { useContext, useEffect, useState } from "react";
import data from '../data'

const SiteContext = React.createContext()

function SiteContextProvider({ children }) {
  const [content, setContent] = useState(data)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // function fetchData() {
  //   setContent(data)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  function toggleMobileMenu() {
    setIsMobileMenuOpen(prevState => !prevState)
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
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
      { children }
    </SiteContext.Provider>
  )
}

function useSiteContext() {
  return useContext(SiteContext)
}

export { useSiteContext, SiteContextProvider}