import styles from "./DropdownDifferentSvgs.module.css";
import vivid_f18ac2cdaead from "./f18ac2cdaead.svg";
import vivid_d4f6c6048e71 from "./d4f6c6048e71.svg";
import vivid_a979430e218c from "./a979430e218c.svg";
import vivid_762894ccc421 from "./762894ccc421.svg";

export const DropdownDifferentSvgs = ({
  status,
  version,
}: {
  status: string;
  version: string;
}) => {
  const status_0 =
    status === "Open"
      ? {
          rotate: "-180deg",
        }
      : {
          rotate: "--90deg",
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
  const version_2 =
    version === "Figma"
      ? {
          height: "15px",
        }
      : {
          height: "19px",
        };

  return (
    <div className={styles.dropdownDifferentSvgs0}>
      <img
        src={vivid_f18ac2cdaead.src}
        className={styles.dropdownDifferentSvgs1}
      />
      <p className={styles.dropdownDifferentSvgs2}>Dropdown</p>
    </div>
  );
};
