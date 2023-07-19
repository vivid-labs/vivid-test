import { Tabs } from "./Tabs";
export const TabsPage = ({ override }: { override?: any }) => {
  return (
    <Tabs
      activeTab="First"
      override={{
        width: "100%",
      }}
    />
  );
};
