import { Dropdown } from "./Dropdown";
export const DropdownPage = ({ override }: { override?: any }) => {
  return (
    <Dropdown
      status="Open"
      version="Figma"
      override={{
        width: "100%",
      }}
    />
  );
};
