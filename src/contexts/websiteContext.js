import React, { useContext, useEffect, useState } from "react";
import data from '../data.json'

const SiteContext = React.createContext()

function SiteContextProvider({ children }) {
  const [content, setContent] = useState({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function fetchData() {
    setContent(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function toggleMobileMenu() {
    setIsMobileMenuOpen(prevState => !prevState)
  }

  return (
    <SiteContext.Provider
      value={{
        content,
        isMobileMenuOpen,
        toggleMobileMenu,
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