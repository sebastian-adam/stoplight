import { render } from "@testing-library/react";
import App from "./App";

test("app renders without exploding", () => {
  render(<App />);
});
