import { Step } from "./Step";
import styled from "styled-components";
export const StepPage = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <Step
      status="Done"
      number="1"
      text="Step"
      override={{
        width: "100%",
      }}
    />
  );
};
