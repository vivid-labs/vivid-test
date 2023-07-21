import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "fit-content",
        padding: "0px 0px 0px 54px",
        position: "relative",
        width: "1440px",
        ...override,
      }}
      figma-id="4:6:431"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          width: "fit-content",
          height: "fit-content",
          position: "relative",
          flexShrink: 0,
        }}
        figma-id="4:6:432"
      >
        <img
          src={moon.src}
          style={{
            width: "16.64px",
            height: "16.64px",
            flexShrink: 0,
          }}
          figma-id="4:6:433"
        />
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            textAlign: "center",
            color: "rgb(255, 255, 255)",
            fontSize: "19px",
            fontFamily: "Quicksand",
            fontWeight: 700,
          }}
          figma-id="4:6:436"
        >
          MilanTour
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "45px",
          width: "fit-content",
          height: "fit-content",
          position: "relative",
          flexShrink: 0,
        }}
        figma-id="4:6:437"
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "38px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            flexShrink: 0,
          }}
          figma-id="4:6:438"
        >
          <Link linkText="Day Tours" figma-id="4:6:439" />
          <Link linkText="Multi-day Tours" figma-id="4:6:440" />
          <Link linkText="Attractions" figma-id="4:6:441" />
          <Link linkText="Themes" figma-id="4:6:442" />
        </div>
        <img
          src={hamburgerMenu.src}
          style={{
            width: "50px",
            height: "50px",
            flexShrink: 0,
          }}
          figma-id="4:6:443"
        />
      </div>
    </div>
  );
};
