import { Color, Light } from "./model";

export const colors: Record<Color, Light> = {
  red: {
    color: "red",
    duration: 2000,
    blink: false,
  },
  yellow: {
    color: "yellow",
    duration: 1000,
    blink: true,
  },
  green: {
    color: "green",
    duration: 3000,
    blink: false,
  },
};
