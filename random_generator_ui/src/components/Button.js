import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ label, testID, handler, color = "primary" }) => {
  return (
    <Button
      data-testid={testID}
      onClick={handler}
      variant="outlined"
      color={color}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
