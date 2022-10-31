import React, {useEffect, useRef, useState} from "react";
import './resizer.css';

type P = {
  children: React.ReactNode
}

export const Resizer: React.FC<P> = ({children}: P) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(undefined)
  const [width, setWidth] = useState<number>(undefined)

  const [isOverX, setIsOverX] = useState(false)

  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);
  console.log(startX, "render");

  const onMouseMoveHandler = (e: MouseEvent) => {
    console.log(startX, "func");
    if (startX) {
      console.log("move");
      setWidth(startWidth + e.clientX - startX)
    }
  }
  const onMouseUpHandler = (e: MouseEvent) => {
    setStartX(null);
    setStartWidth(null);
    window.removeEventListener("mousemove", onMouseMoveHandler)
    window.removeEventListener("mouseup", onMouseUpHandler)
  }

  useEffect(() => {
    if (!wrapper.current) return
    // @ts-ignore
    console.log(wrapper.current.offsetHeight);
    console.log(wrapper.current.offsetWidth);
    setHeight(wrapper.current.offsetHeight)
    setWidth(wrapper.current.offsetWidth)
  }, []);

  return (
    <div className="resizer-wrapper" ref={wrapper} style={{width, height}}>
      <div
        className="resizer-handle resizer-handle-x"
        // onMouseEnter={() => setIsOverX(true)}
        onMouseDown={(e) => {
          console.log("start");
          setStartX(e.clientX);
          setStartWidth(width);
          window.addEventListener("mousemove", (e: MouseEvent) => {
            console.log(startX, "func");
            if (startX) {
              console.log("move");
              setWidth(startWidth + e.clientX - startX)
            }
          })
          window.addEventListener("mouseup", onMouseUpHandler)
        }}
        onMouseUp={(e) => {
          // setIsOverX(false)
          setStartX(null);
          setStartWidth(null);
        }}
      />
      <div className="resizer-handle resizer-handle-y"/>
      {/*<div className="resizer-handle resizer-handle-xy"/>*/}
      {children}
    </div>
  )
}