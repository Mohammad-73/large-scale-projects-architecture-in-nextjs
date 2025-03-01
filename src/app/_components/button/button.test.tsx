import { describe } from "node:test";
import { Button } from "./button";
import { render } from "@testing-library/react";

describe("Button Component", () => {
  // it("testing button", () => {});

  test("render a default button", () => {
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here"));
  });
});
