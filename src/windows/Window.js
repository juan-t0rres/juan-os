import { useState } from "react";
import Draggable from "react-draggable";

export default function Window({
  title,
  children,
  removeWindow,
  onDrag,
  window,
  zIndex,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleDrag(e, ui) {
    const { x, y } = position;
    onDrag(window);
    setPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  }

  return (
    <Draggable
      onDrag={handleDrag}
      position={position}
      positionOffset={{ x: "-50%", y: "-50%" }}
    >
      <div className="window" style={{ zIndex: zIndex }}>
        <div className="bar pixel-font">
          <div />
          <div>{title}</div>
          <div onClick={removeWindow} className="remove-window">
            X
          </div>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </Draggable>
  );
}
