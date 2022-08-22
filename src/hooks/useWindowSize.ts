import { useState, useEffect } from "react"

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    setWindowSize(getSize)
    function handleRecize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleRecize)
    return () => window.removeEventListener("resize", handleRecize)
  }, [])

  return windowSize
}
