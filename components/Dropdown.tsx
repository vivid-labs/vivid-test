import styles from "./Dropdown.module.css";
import vivid_f18ac2cdaead from "./f18ac2cdaead.svg";
import vivid_d4f6c6048e71 from "./d4f6c6048e71.svg";
import vivid_a979430e218c from "./a979430e218c.svg";
import vivid_762894ccc421 from "./762894ccc421.svg";

export const Dropdown = ({
  status,
  version,
}: {
  status: string;
  version: string;
}) => {
  const status_0 = status === "Open" ? {} : {};
  const version_0 = version === "Figma" ? {} : {};
  let imageSrc_0;
  if (Status === "Open" && Version === "Figma") {
    imageSrc_0 = vivid_f18ac2cdaead;
  } else if (Status === "Closed" && Version === "Figma") {
    imageSrc_0 = vivid_d4f6c6048e71;
  } else if (Status === "Open" && Version === "Web") {
    imageSrc_0 = vivid_a979430e218c;
  } else if (Status === "Closed" && Version === "Web") {
    imageSrc_0 = vivid_762894ccc421;
  }

  return (
    <div
      style={{
        ...status_0,
        ...version_0,
      }}
      className={styles.dropdown0}
    >
      <img src={imageSrc_0.src} className={styles.dropdown1} />
      <p className={styles.dropdown2}>Dropdown</p>
    </div>
  );
};
