import { render } from "@testing-library/react";
import Stats from "./Stats";

describe("Stats", () => {
  const statsProps = {
    data: {
      alphabeticalCount: "35151",
      alphanumericCount: "32251",
      floatCount: "33156",
      intCount: "33631",
    },
  };

  test("should display the correct corresponding number", () => {
    const { getByTestId } = render(<Stats {...statsProps} />);
    const alphabeticalCount = getByTestId("alphabetical-count").textContent;
    const floatCount = getByTestId("float-count").textContent;
    const intCount = getByTestId("int-count").textContent;
    const alphanumericCount = getByTestId("alphanumeric-count").textContent;
    expect(alphabeticalCount).toBe(statsProps.data.alphabeticalCount);
    expect(floatCount).toBe(statsProps.data.floatCount);
    expect(intCount).toBe(statsProps.data.intCount);
    expect(alphanumericCount).toBe(statsProps.data.alphanumericCount);
  });
});
