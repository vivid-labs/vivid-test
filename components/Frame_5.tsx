import { Dropdown } from "./Dropdown";
export const Frame_5 = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "46px",
        flexShrink: 0,
        backgroundColor: "rgb(109, 21, 21)",
        ...override,
      }}
      figma-id="3:1983:904"
    >
      <Dropdown status="Open" version="Web" figma-id="3:1983:901" />
    </div>
  );
};
