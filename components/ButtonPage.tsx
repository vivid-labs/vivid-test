import { Button } from "./Button";
import styled from "styled-components";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      state="Default"
      override={{
        width: "100%",
      }}
    />
  );
};
