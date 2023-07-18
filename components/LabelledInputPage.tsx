import { LabelledInput } from "./LabelledInput";
export const LabelledInputPage = ({ override }: { override?: any }) => {
  return (
    <LabelledInput
      lineSize="Small"
      override={{
        width: "100%",
      }}
    />
  );
};
