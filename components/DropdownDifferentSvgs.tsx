import styles from "./DropdownDifferentSvgs.module.css";
import arrowImage2 from "./arrowImage2.svg";
import arrowImage1 from "./arrowImage1.svg";
import arrowImage from "./arrowImage.svg";
import arrow from "./arrow.svg";
export const DropdownDifferentSvgs = ({
  override,
  status,
  version,
  blue,
}: {
  override?: any;
  status: string;
  version: string;
  blue: string;
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
          color: "rgb(0, 129, 225)",
        }
      : {
          color: "rgb(0, 129, 225)",
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
          color: "rgb(0, 129, 225)",
          fontSize: "12px",
        }
      : {
          color: "rgb(0, 129, 225)",
          fontSize: "16px",
        };
  const dropdownText1Blue =
    blue === "False"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(0, 129, 225)",
        };
  let arrowSrc;
  if (status === "Open" && version === "Figma" && blue === "False") {
    arrowSrc = arrowImage2;
  } else if (status === "Closed" && version === "Figma" && blue === "False") {
    arrowSrc = arrowImage1;
  } else if (status === "Open" && version === "Web" && blue === "False") {
    arrowSrc = arrowImage;
  } else if (status === "Closed" && version === "Web" && blue === "False") {
    arrowSrc = arrow;
  } else if (status === "Open" && version === "Figma" && blue === "True") {
    arrowSrc = arrowImage2;
  } else if (status === "Closed" && version === "Figma" && blue === "True") {
    arrowSrc = arrowImage1;
  } else if (status === "Open" && version === "Web" && blue === "True") {
    arrowSrc = arrowImage;
  } else {
    arrowSrc = arrow;
  }
  return (
    <div
      style={override}
      className={styles.dropdownDifferentSvgs}
      figma-id="3:1438:911"
    >
      <img
        src={arrowSrc.src}
        style={{
          ...arrowStatus,
          ...arrowImageVersion,
        }}
        className={styles.arrow}
        figma-id="3:1438:912"
      />
      <p
        style={{
          ...dropdownStatus,
          ...dropdownTextVersion,
          ...dropdownText1Blue,
        }}
        className={styles.dropdown}
        figma-id="3:1438:913"
      >
        Dropdown
      </p>
    </div>
  );
};
