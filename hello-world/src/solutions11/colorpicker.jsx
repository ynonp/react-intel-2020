import React, { useState } from "react";

export default function ColorPicker(props) {
  const [color, setColor] = useState('#000');
  const style = {
    backgroundColor: color,
  };

  return (
    <div style={style}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        />
    </div>
  )
}