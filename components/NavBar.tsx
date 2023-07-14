import logo from "./logo.png";
import { ProfilePicture } from "./ProfilePicture";
export const NavBar = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 12px",
        position: "relative",
        width: "100%",
        height: "69px",
        flexShrink: 0,
        ...override,
      }}
      figma-id="1:5"
    >
      <img
        style={{
          width: "42.09px",
          height: "44px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
        }}
        src={logo.src}
        figma-id="1:55"
      />
      <ProfilePicture />
    </div>
  );
};
