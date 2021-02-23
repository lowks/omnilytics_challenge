import React from "react";

const Stats = ({ data }) => {
  return (
    <>
      <p>
        Alphabetical string:{" "}
        {!data ? null : (
          <span data-testid="alphabetical-count">{data.alphabeticalCount}</span>
        )}
      </p>
      <p>
        Real numbers:{" "}
        {!data ? null : (
          <span data-testid="float-count">{data.floatCount}</span>
        )}
      </p>
      <p>
        Integers:{" "}
        {!data ? null : <span data-testid="int-count">{data.intCount}</span>}
      </p>
      <p>
        Alphanumerics:{" "}
        {!data ? null : (
          <span data-testid="alphanumeric-count">{data.alphanumericCount}</span>
        )}
      </p>
    </>
  );
};

export default Stats;
