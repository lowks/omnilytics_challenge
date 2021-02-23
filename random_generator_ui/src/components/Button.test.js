import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  describe("Generate Button", () => {
    const generateBtnMockCallback = jest.fn();
    const generateBtnProps = {
      label: "Generate",
      testID: "generate-btn",
      color: "secondary",
      handler: generateBtnMockCallback,
    };

    test("should display the correct label", () => {
      const { getByTestId } = render(<Button {...generateBtnProps} />);
      const generateBtn = getByTestId("generate-btn");
      expect(generateBtn.textContent).toBe("Generate");
    });

    test("should call the correct handler on click", () => {
      const { getByTestId } = render(<Button {...generateBtnProps} />);
      const generateBtn = getByTestId("generate-btn");
      fireEvent.click(generateBtn);
      expect(generateBtnMockCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe("Report Button", () => {
    const reportBtnMockCallback = jest.fn();
    const reportBtnProps = {
      label: "Report",
      testID: "report-btn",
      color: "primary",
      handler: reportBtnMockCallback,
    };

    test("should display the correct label", () => {
      const { getByTestId } = render(<Button {...reportBtnProps} />);
      const reportBtn = getByTestId("report-btn");
      expect(reportBtn.textContent).toBe("Report");
    });

    test("should call the correct handler on click", () => {
      const { getByTestId } = render(<Button {...reportBtnProps} />);
      const reportBtn = getByTestId("report-btn");
      fireEvent.click(reportBtn);
      expect(reportBtnMockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
