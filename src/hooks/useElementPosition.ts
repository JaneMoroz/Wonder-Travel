import React, { useState, useEffect } from "react"

export default function useElementPosition(el: React.RefObject<HTMLElement>) {
  function getElement(x: number, y: number) {
    return { x, y }
  }

  const [elementPosition, setElementPosition] = useState(getElement(0, 0))

  useEffect(() => {
    function handlePosition() {
      let element = el.current
      if (element) {
        let x =
          element.getBoundingClientRect().left +
          document.documentElement.scrollLeft +
          element.offsetWidth / 2
        let y =
          element.getBoundingClientRect().top +
          document.documentElement.scrollTop +
          element.offsetHeight / 2
        setElementPosition(getElement(x, y))
      }
    }
    if (el) {
      handlePosition()
    }
  }, [el])

  return elementPosition
}
