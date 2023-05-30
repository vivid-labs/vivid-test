import styles from "./Dropdown.module.css";
import vivid_f18ac2cdaead from "./f18ac2cdaead.svg";
import vivid_d4f6c6048e71 from "./d4f6c6048e71.svg";
import vivid_a979430e218c from "./a979430e218c.svg";
import vivid_762894ccc421 from "./762894ccc421.svg";

export const Dropdown = ({
  style,
  status,
  version,
}: {
  style: any;
  status: string;
  version: string;
}) => {
  const status_0 =
    status === "Open"
      ? {
          rotate: "-180.0deg",
        }
      : {
          rotate: "90.0deg",
        };
  const status_1 =
    status === "Open"
      ? {
          color: "rgb(250, 250, 250)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const version_0 =
    version === "Figma"
      ? {
          width: "8px",
          height: "8px",
        }
      : {
          width: "10px",
          height: "10px",
        };
  const version_1 =
    version === "Figma"
      ? {
          color: "rgb(255, 255, 255)",
          fontSize: "12px",
        }
      : {
          color: "rgb(255, 255, 255)",
          fontSize: "16px",
        };
  let imageSrc_0;
  if (status === "Open" && version === "Figma") {
    imageSrc_0 = vivid_f18ac2cdaead;
  } else if (status === "Closed" && version === "Figma") {
    imageSrc_0 = vivid_d4f6c6048e71;
  } else if (status === "Open" && version === "Web") {
    imageSrc_0 = vivid_a979430e218c;
  } else {
    imageSrc_0 = vivid_762894ccc421;
  }

  return (
    <div style={style} className={styles.dropdown}>
      <img
        src={imageSrc_0.src}
        style={{
          ...status_0,
          ...version_0,
        }}
        className={styles.arrow}
      />
      <p
        style={{
          ...status_1,
          ...version_1,
        }}
        className={styles.dropdowndiv}
      >
        Dropdown
      </p>
    </div>
  );
};
