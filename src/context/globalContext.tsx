import React, { createContext, useReducer, useContext } from "react"

interface Props {
  children: React.ReactNode
}

type GlobalStateContextType = {
  currentTheme: string
  cursorType: string
  cursorStyles: string[]
}

type Action =
  | {
      type: "TOGGLE_THEME"
      theme: string
    }
  | {
      type: "CURSOR_TYPE"
      cursorType: string
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
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }
  }
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("theme") === null
        ? "dark"
        : window.localStorage.getItem("theme"),
    cursorType: "",
    cursorStyles: ["pointer", "hovered"],
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
