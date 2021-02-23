import React from "react";

const Link = ({ link }) => {
  return (
    <p data-testid="link-text">
      Link:{" "}
      {!link ? null : (
        <a
          data-testid="link-url"
          href={link}
          style={{ textDecoration: "none" }}
        >
          click to download.
        </a>
      )}
    </p>
  );
};

export default Link;
