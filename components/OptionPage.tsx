import { Option } from "./Option";
import styled from "styled-components";
export const OptionPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Option
      color="Gray"
      text="Text"
      override={{
        width: "100%",
      }}
    />
  );
};
