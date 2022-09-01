import React from "react"

// Context
import {
  useGlobalStateContext,
  useGlobalActionContext,
} from "../context/globalContext"

const AllToursButton = () => {
  const { toggleMenu } = useGlobalStateContext()
  const { dispatch, onCursor } = useGlobalActionContext()
  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_MENU", toggleMenu: !toggleMenu })}
      onMouseEnter={() => onCursor("pointer")}
      onMouseLeave={() => onCursor("")}
    >
      <span>Все туры</span>
    </button>
  )
}

export default AllToursButton
