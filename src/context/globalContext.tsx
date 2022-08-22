import React, { createContext, useReducer, useContext, useEffect } from "react"
import { getStorageTheme, saveStorageTheme } from "../utils/localStorage"

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

const intitalState = {
  currentTheme: "",
  cursorType: "",
  cursorStyles: ["pointer", "hovered"],
} as GlobalStateContextType

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
  const [state, dispatch] = useReducer(globalReducer, intitalState)

  // Get theme from the local storage and set it to the current theme
  useEffect(() => {
    const theme = getStorageTheme()
    dispatch({ type: "TOGGLE_THEME", theme })
  }, [])

  // Set theme and save it to the local storage when it gets changed
  useEffect(() => {
    saveStorageTheme(state.currentTheme)
  }, [state.currentTheme])

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
