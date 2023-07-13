import { FormField } from "./FormField";
export const FormFieldPage = ({ override }: { override?: any }) => {
  return (
    <FormField
      type="TextInput"
      field="Add Text"
      placeholder="Placeholder"
      override={{
        width: "100%",
      }}
    />
  );
};
