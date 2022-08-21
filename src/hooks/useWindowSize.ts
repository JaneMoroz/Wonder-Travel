import { useState, useEffect } from "react"

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleRecize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleRecize)
    return () => window.removeEventListener("resize", handleRecize)
  }, [])

  return windowSize
}
