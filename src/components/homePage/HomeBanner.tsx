import React, { useEffect, useRef } from "react"
import heroVideo from "../../assets/video/hero-big.mp4"

// Styled components
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"

// Custom hook
import useWindowSize from "../../hooks/useWindowSize"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

type HomeBannerProps = {
  onCursor: (cursorType: string) => void
}

const HomeBanner: React.FC<HomeBannerProps> = ({ onCursor }) => {
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()
  let canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (size.height > 0 && size.width > 0) {
      let renderingElement = canvas.current
      if (renderingElement) {
        // create an offscreen canvas only for the drawings
        let drawingElement =
          renderingElement.cloneNode() as HTMLCanvasElement | null
        // contexts
        let drawingCtx = drawingElement!.getContext(
          "2d"
        ) as CanvasRenderingContext2D
        let renderingCtx = renderingElement.getContext(
          "2d"
        ) as CanvasRenderingContext2D

        // coordinates
        let lastX: number
        let lastY: number

        // boolean responsible for moving
        let moving = false

        if (renderingCtx) {
          renderingCtx.globalCompositeOperation = "source-over"
          renderingCtx.fillStyle =
            currentTheme === "dark" ? "#2f3e46" : "#cad2c5"
          renderingCtx.fillRect(0, 0, size.width, size.height)

          const _mouseover = (e: MouseEvent): void => {
            moving = true
            lastX = e.pageX - renderingElement!.offsetLeft
            lastY = e.pageY - renderingElement!.offsetTop
          }

          const _mouseup = (e: MouseEvent): void => {
            moving = false
            lastX = e.pageX - renderingElement!.offsetLeft
            lastY = e.pageY - renderingElement!.offsetTop
          }

          const _mousemove = (e: MouseEvent): void => {
            if (moving) {
              drawingCtx.globalCompositeOperation = "source-over"
              renderingCtx.globalCompositeOperation = "destination-out"
              let currentX = e.pageX - renderingElement!.offsetLeft
              let currentY = e.pageY - renderingElement!.offsetTop
              drawingCtx.lineJoin = "round"
              drawingCtx.moveTo(lastX, lastY)
              drawingCtx.lineTo(currentX, currentY)
              drawingCtx.closePath()
              drawingCtx.lineWidth = 120
              drawingCtx.stroke()
              lastX = currentX
              lastY = currentY
              renderingCtx.drawImage(drawingElement!, 0, 0)
            }
          }

          const _mouseclick = (e: MouseEvent): void => {
            moving = true
            lastX = e.pageX - renderingElement!.offsetLeft
            lastY = e.pageY - renderingElement!.offsetTop
          }

          renderingElement.addEventListener("mouseover", _mouseover)
          renderingElement.addEventListener("mouseup", _mouseup)
          renderingElement.addEventListener("mousemove", _mousemove)
          renderingElement.addEventListener("click", _mouseclick)

          return () => {
            drawingElement = null
            drawingElement! = renderingElement!.cloneNode() as HTMLCanvasElement
            renderingElement!.removeEventListener("mouseover", _mouseover)
            renderingElement!.removeEventListener("mouseup", _mouseup)
            renderingElement!.removeEventListener("mousemove", _mousemove)
            renderingElement!.addEventListener("click", _mouseclick)
          }
        }
      }
    }
  }, [currentTheme, size])

  if (size.height === 0 && size.width === 0 && currentTheme === null) {
    return <Banner></Banner>
  }

  // Animation
  const headiline = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        {size.height > 0 && size.width > 0 && (
          <video
            height="100%"
            width="100%"
            loop
            autoPlay
            muted
            src={heroVideo}
          />
        )}
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseLeave={() => onCursor("")}
        onMouseEnter={() => onCursor("hovered")}
      />
      <BannerTitle>
        <Headline variants={headiline} initial="initial" animate="animate">
          КАМЧАТКА
        </Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
