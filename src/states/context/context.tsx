import React, { ReactNode, createContext, useReducer, useContext } from "react"

import reducer, { Actions } from "./reducer"

type ContextProps = {
  children: ReactNode
}

type ContextValue = {}

const Context = createContext<ContextValue | undefined>(undefined)

export function LanguageProvider({ children }: ContextProps) {
  const [state, dispatch] = useReducer(reducer, { language: "fr" })

  const value = {}

  return <Context.Provider value={value}>{children}</Context.Provider>
}

const useSomething = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider.")
  }

  return context
}

export default useSomething
