import React from "react";
import { useState, useEffect } from "react";

import { GREEN, YELLOW, RED } from "../helpers/constants";
import { colors } from "../helpers/data";
import { Color } from "../helpers/model";

// Let's keep the order of the lights decoupled from the individual light data
export const colorSequence: Color[] = [GREEN, YELLOW, RED];

function TrafficLight() {
  const initialColor = colorSequence[0];
  const [activeColor, setActiveColor] = useState(initialColor);
  const [blink, setBlink] = useState(false);

  /////////////////
  // Main timer
  useEffect(() => {
    // Active color
    const activeColorIndex = colorSequence.indexOf(activeColor);
    const { duration } = colors[activeColor];

    // Next active color
    const nextColorIndex = (activeColorIndex + 1) % colorSequence.length;
    const nextActiveColor = colorSequence[nextColorIndex];

    // Initialize timer
    const timer = setTimeout(() => {
      setActiveColor(nextActiveColor);
    }, duration);

    // Destroy timer
    return () => {
      clearTimeout(timer);
    };
  }, [activeColor]);

  /////////////////
  // Blink timer
  useEffect(() => {
    // Active color
    const { blink: lightShouldBlink } = colors[activeColor];

    // Initialize timer
    const timer =
      lightShouldBlink &&
      setTimeout(() => {
        setBlink(!blink);
      }, 200);

    // Destroy timer
    return () => {
      timer && clearTimeout(timer);
    };
  }, [activeColor, blink]);

  const getBackroundColor = (color: Color) =>
    activeColor === color && !blink ? activeColor : "#404040";

  return (
    <div className="flex flex-col flex-1 gap-2 items-center">
      {Object.values(colors).map((color) => (
        <div
          key={color.color}
          className="w-20 h-20 radius rounded-full"
          style={{
            backgroundColor: getBackroundColor(color.color),
          }}
        />
      ))}
    </div>
  );
}

export default TrafficLight;
