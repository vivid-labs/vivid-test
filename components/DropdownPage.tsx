import { Dropdown } from "./Dropdown";
import styled from "styled-components";
export const DropdownPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Dropdown
      status="Idle"
      text="Select..."
      override={{
        width: "100%",
      }}
    />
  );
};
