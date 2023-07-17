import { TabBar } from "./TabBar";
export const TabBarPage = ({ override }: { override?: any }) => {
  return (
    <TabBar
      screen="Desktop"
      override={{
        width: "100%",
      }}
    />
  );
};
