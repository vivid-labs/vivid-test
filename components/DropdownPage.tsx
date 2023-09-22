import { Dropdown } from "./Dropdown";
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
