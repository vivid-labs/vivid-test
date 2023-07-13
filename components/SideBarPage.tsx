import { SideBar } from "./SideBar";
export const SideBarPage = ({ override }: { override?: any }) => {
  return (
    <SideBar
      style="Colored"
      override={{
        width: "100%",
      }}
    />
  );
};
