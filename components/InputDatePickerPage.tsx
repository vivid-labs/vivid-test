import { InputDatePicker } from "./InputDatePicker";
export const InputDatePickerPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <InputDatePicker
      type="Single Input"
      headlinePlural="Enter dates"
      headline="Enter date"
      supportingText="Select date"
      override={{
        width: "100%",
      }}
    />
  );
};
