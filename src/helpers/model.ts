import { GREEN, YELLOW, RED } from "./constants";

export type Color = typeof GREEN | typeof YELLOW | typeof RED;

export interface Light {
  color: Color;
  duration: number;
  blink: boolean;
}
