import React, { createContext, useReducer, useContext, useEffect } from "react"
import { getStorageTheme, saveStorageTheme } from "../utils/localStorage"

interface Props {
  children: React.ReactNode
}

type GlobalStateContextType = {
  currentTheme: string
  cursorType: string
  cursorStyles: string[]
  toggleMenu: boolean
}

type GlobalActionContextType = {
  dispatch: React.Dispatch<Action>
  onCursor: (cursorType: string) => void
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
  | {
      type: "TOGGLE_MENU"
      toggleMenu: boolean
    }

const intitalState = {
  currentTheme: "",
  cursorType: "",
  cursorStyles: ["pointer", "hovered", "locked"],
  toggleMenu: false,
} as GlobalStateContextType

const GlobalStateContext = createContext({} as GlobalStateContextType)
const GlobalActionContext = createContext({} as GlobalActionContextType)

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
    case "TOGGLE_MENU": {
      return {
        ...state,
        toggleMenu: action.toggleMenu,
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

  // Cursor handlers
  const onCursor = (cursorType: string) => {
    cursorType = state.cursorStyles.includes(cursorType) ? cursorType : ""
    dispatch({ type: "CURSOR_TYPE", cursorType })
  }

  return (
    <GlobalActionContext.Provider value={{ dispatch, onCursor }}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalActionContext.Provider>
  )
}

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalActionContext = () => useContext(GlobalActionContext)
