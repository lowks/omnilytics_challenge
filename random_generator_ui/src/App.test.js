import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const { getByTestId } = render(<App />);

  test("should display card & card content", () => {
    const card = getByTestId("card");
    const cardContent = getByTestId("card-content");
    expect(card).toBeDefined();
    expect(cardContent).toBeDefined();
  });
});
