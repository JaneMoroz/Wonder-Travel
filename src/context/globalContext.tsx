import React, { createContext, useReducer, useContext } from "react"

interface Props {
  children: React.ReactNode
}

type GlobalStateContextType = {
  currentTheme: string
}

type Action = {
  type: string
  theme: string
}

const GlobalStateContext = createContext({} as GlobalStateContextType)
const GlobalDispatchContext = createContext({} as React.Dispatch<Action>)

const globalReducer = (state: GlobalStateContextType, action: Action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("theme") === null
        ? "dark"
        : window.localStorage.getItem("theme"),
  } as GlobalStateContextType)

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
