import { OrgButton } from "./OrgButton";
import styled from "styled-components";
export const OrgButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <OrgButton
      state="Default"
      companyName="Vivid Labs"
      logoLetter="V"
      override={{
        width: "100%",
      }}
    />
  );
};
