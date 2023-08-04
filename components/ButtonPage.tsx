import { Button } from "./Button";
import * as React from "react";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      variant="default"
      size="default"
      override={{
        width: "100%",
      }}
    />
  );
};
