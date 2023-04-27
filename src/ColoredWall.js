import React, { useState } from "react";
import ColoredInput from "./ColoredInput";
import "./Wall.css";

export const ColoredWall = () => {
  const [wallColor, setWallColor] = useState("");

  const changeColor = (color) => {
    setWallColor(color);
  };

  return (
    <div>
      <div className="color-bar"></div>
      <div className="wall">
        <div
          className="wall-config"
          style={{ backgroundColor: `${wallColor}` }}
        >
          <h1 className="glow">Color Changing Wall</h1>
        </div>
        <ColoredInput changeColor={changeColor} />
      </div>
    </div>
  );
};
