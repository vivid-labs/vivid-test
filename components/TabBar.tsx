import { Tabs } from "./Tabs";
export const TabBar = ({
  override,
  screen,
}: {
  override?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div
          style={override}
          className="flex flex-col items-center gap-[10px] px-[10px] py-0 relative w-[1280px] bg-[rgb(43,_43,_43)]"
          figma-id="1979:10145"
        >
          <Tabs
            property_1="Tab 1"
            override={{
              height: "fit-content",
              width: "1050px",
            }}
          />
        </div>
      );
    case "Tablet":
      return (
        <div
          style={override}
          className="flex flex-col items-center gap-[10px] px-[10px] py-0 relative w-[834px] bg-[rgb(43,_43,_43)]"
          figma-id="1979:10151"
        >
          <Tabs
            property_1="Tab 1"
            override={{
              height: "fit-content",
              width: "680px",
            }}
          />
        </div>
      );
    case "Mobile":
      return (
        <div
          style={override}
          className="flex flex-col items-center gap-[10px] px-[10px] py-0 relative w-[375px] bg-[rgb(43,_43,_43)]"
          figma-id="1979:10242"
        >
          <Tabs
            property_1="Tab 1"
            override={{
              height: "fit-content",
              width: "315px",
            }}
          />
        </div>
      );
    default:
      return null;
  }
};
