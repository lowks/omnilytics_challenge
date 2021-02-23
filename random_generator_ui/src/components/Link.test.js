import { render } from "@testing-library/react";
import Link from "./Link";

describe("Link", () => {
  describe("Download Link", () => {
    const linkProps = {
      link: "localhost:4000/api/download/123456",
    };

    test("should display the correct download label", () => {
      const { getByTestId } = render(<Link {...linkProps} />);
      const linkText = getByTestId("link-text");
      expect(linkText.textContent).toBe("Link: click to download.");
    });

    test("should display the correct download url", () => {
      const { getByTestId } = render(<Link {...linkProps} />);
      const linkUrl = getByTestId("link-url");
      expect(linkUrl.attributes.href.textContent).toBe(linkProps.link);
    });
  });
});
