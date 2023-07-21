import arrowImage2 from "./arrowImage2.svg";
import arrowImage1 from "./arrowImage1.svg";
import arrowImage from "./arrowImage.svg";
import arrow from "./arrow.svg";
export const Dropdown = ({
  override,
  status,
  version,
}: {
  override?: any;
  status: string;
  version: string;
}) => {
  const arrowStatus =
    status === "Open"
      ? {
          rotate: "-180.0deg",
        }
      : {
          rotate: "90.0deg",
        };
  const dropdownStatus =
    status === "Open"
      ? {
          color: "rgb(250, 250, 250)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const arrowImageVersion =
    version === "Figma"
      ? {
          width: "8px",
          height: "8px",
        }
      : {
          width: "10px",
          height: "10px",
        };
  const dropdownTextVersion =
    version === "Figma"
      ? {
          color: "rgb(255, 255, 255)",
          fontSize: "12px",
        }
      : {
          color: "rgb(255, 255, 255)",
          fontSize: "16px",
        };
  let arrowSrc;
  if (status === "Open" && version === "Figma") {
    arrowSrc = arrowImage2;
  } else if (status === "Closed" && version === "Figma") {
    arrowSrc = arrowImage1;
  } else if (status === "Open" && version === "Web") {
    arrowSrc = arrowImage;
  } else {
    arrowSrc = arrow;
  }
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        height: "fit-content",
        padding: "0px 2px",
        position: "relative",
        width: "99px",
        ...override,
      }}
      figma-id="3:13:117"
    >
      <img
        src={arrowSrc.src}
        style={{
          ...arrowStatus,
          ...arrowImageVersion,
          flexShrink: 0,
        }}
        figma-id="3:13:115"
      />
      <p
        style={{
          ...dropdownStatus,
          ...dropdownTextVersion,
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontFamily: "Inter",
          fontWeight: 400,
        }}
        figma-id="3:13:114"
      >
        Dropdown
      </p>
    </div>
  );
};
