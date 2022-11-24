import { useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function Window({
  title,
  children,
  removeWindow,
  onDrag,
  windowString,
  zIndex,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  function handleDrag(e, ui) {
    const { x, y } = position;
    onDrag(windowString);
    setPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  }

  const content = (
    <div className="window crt" style={{ zIndex: zIndex }}>
      <div className="bar pixel-font">
        <div />
        <div>{title}</div>
        <div onClick={removeWindow} className="remove-window">
          X
        </div>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );

  if (isMobile) {
    return content;
  }
  return (
    <Draggable
      onDrag={handleDrag}
      position={position}
      positionOffset={isMobile ? null : { x: "-50%", y: "-50%" }}
    >
      {content}
    </Draggable>
  );
}
