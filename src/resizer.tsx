import React, { useEffect, useRef, useState } from "react";
import "./resizer.css";

type P = {
  children: React.ReactNode;
};

export const Resizer: React.FC<P> = ({ children }: P) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(undefined);
  const [width, setWidth] = useState<number>(undefined);

  const [startX, setStartX] = useState(null);
  const [startWidth, setStartWidth] = useState(null);
  const [startY, setStartY] = useState(null);
  const [startHeight, setStartHeight] = useState(null);

  const onMouseMoveHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (startX) {
      const newWidth = Math.max(startWidth + e.clientX - startX, 0);
      setWidth(newWidth);
    }
    if (startY) {
      const newHeight = Math.max(startHeight + e.clientY - startY, 0);
      setHeight(newHeight);
    }
  };

  const onMouseUpHandler = (e: MouseEvent) => {
    setStartX(null);
    setStartY(null);
    setStartWidth(null);
    setStartHeight(null);
    window.removeEventListener("mousemove", onMouseMoveHandler);
    window.removeEventListener("mouseup", onMouseUpHandler);
  };

  useEffect(() => {
    if (!wrapper.current) return;
    setHeight(wrapper.current.offsetHeight);
    setWidth(wrapper.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (startX || startY) {
      window.addEventListener("mousemove", onMouseMoveHandler);
      window.addEventListener("mouseup", onMouseUpHandler);
    }
  }, [startX, startY]);

  return (
    <div className="resizer-wrapper" ref={wrapper} style={{ width, height }}>
      <div
        className="resizer-handle resizer-handle-x"
        onMouseDown={(e) => {
          setStartX(e.clientX);
          setStartWidth(width);
        }}
      />
      <div
        className="resizer-handle resizer-handle-y"
        onMouseDown={(e) => {
          setStartY(e.clientY);
          setStartHeight(height);
        }}
      />
      <div
        className="resizer-handle resizer-handle-xy"
        onMouseDown={(e) => {
          setStartX(e.clientX);
          setStartWidth(width);
          setStartY(e.clientY);
          setStartHeight(height);
        }}
      />
      {children}
    </div>
  );
};
